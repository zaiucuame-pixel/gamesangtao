/* =========================================================
   TÀI KHOẢN NGƯỜI CHƠI
   - Dùng Firebase (Authentication + Firestore) khi đã có cấu hình.
   - Thêm ?gialap=1 vào đường dẫn để dùng "máy chủ giả lập" lưu
     trong trình duyệt (chỉ dùng cho bộ kiểm tra tự động).
   - Chỉ lưu TÊN ĐĂNG NHẬP và tiến độ game. Không lưu email, họ tên.
   ========================================================= */
(function () {
  "use strict";
  const MIEN = "@nguoichoi.gamesangtao.example"; // tên đăng nhập -> "email" nội bộ, không có thư thật
  const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
  const HOP_LE = /^[a-z0-9_]{3,20}$/;

  const loiViet = {
    "auth/email-already-in-use": "Tên đăng nhập này đã có người dùng. Hãy chọn tên khác.",
    "auth/invalid-credential": "Sai tên đăng nhập hoặc mật khẩu.",
    "auth/wrong-password": "Sai tên đăng nhập hoặc mật khẩu.",
    "auth/user-not-found": "Sai tên đăng nhập hoặc mật khẩu.",
    "auth/invalid-login-credentials": "Sai tên đăng nhập hoặc mật khẩu.",
    "auth/weak-password": "Mật khẩu cần ít nhất 6 kí tự.",
    "auth/too-many-requests": "Thử sai quá nhiều lần. Chờ vài phút rồi thử lại nhé.",
    "auth/network-request-failed": "Không kết nối được mạng. Kiểm tra Internet rồi thử lại.",
    "auth/invalid-email": "Tên đăng nhập chỉ gồm chữ thường không dấu, số và dấu _ (3–20 kí tự)."
  };
  const dichLoi = e => loiViet[e && e.code] || "Có lỗi xảy ra, thử lại sau nhé." + (e && e.code ? ` (${e.code})` : "");

  function kiemTra(ten, mk) {
    if (!HOP_LE.test(ten)) throw { code: "auth/invalid-email" };
    if (!mk || mk.length < 6) throw { code: "auth/weak-password" };
  }

  /* ---------------- Máy chủ giả lập (cho bộ kiểm tra) ---------------- */
  function mayChuGiaLap() {
    const KHO = "gamesangtao-maychu-gialap", PHIEN = "gamesangtao-phien-gialap";
    const doc = () => { try { return JSON.parse(localStorage.getItem(KHO)) || { users: {}, data: {} }; } catch (e) { return { users: {}, data: {} }; } };
    const ghi = d => localStorage.setItem(KHO, JSON.stringify(d));
    let nguoi = null, nghe = () => {};
    try { nguoi = JSON.parse(localStorage.getItem(PHIEN)); } catch (e) { nguoi = null; }
    const doi = u => { nguoi = u; u ? localStorage.setItem(PHIEN, JSON.stringify(u)) : localStorage.removeItem(PHIEN); nghe(u); };
    return {
      ten: "giả lập",
      khoiDong: cb => { nghe = cb; setTimeout(() => cb(nguoi), 0); },
      dangKy: async (ten, mk) => {
        kiemTra(ten, mk); const d = doc();
        if (d.users[ten]) throw { code: "auth/email-already-in-use" };
        d.users[ten] = { mk, uid: "gl-" + ten }; ghi(d); doi({ uid: d.users[ten].uid, ten });
      },
      dangNhap: async (ten, mk) => {
        const u = doc().users[ten];
        if (!u || u.mk !== mk) throw { code: "auth/invalid-credential" };
        doi({ uid: u.uid, ten });
      },
      dangXuat: async () => doi(null),
      taiTienDo: async () => { const x = doc().data[nguoi && nguoi.uid]; return x ? JSON.parse(x) : null; },
      luuTienDo: async obj => { const d = doc(); d.data[nguoi.uid] = JSON.stringify(obj); ghi(d); }
    };
  }

  /* ---------------- Firebase ---------------- */
  function napScript(src) {
    return new Promise((ok, hong) => {
      const s = document.createElement("script");
      s.src = src; s.onload = ok; s.onerror = () => hong(new Error("Không tải được " + src));
      document.head.appendChild(s);
    });
  }
  function mayChuFirebase(cfg) {
    let auth, db, nguoi = null;
    const tenTu = u => (u.email || "").replace(MIEN, "");
    return {
      ten: "Firebase",
      khoiDong: async cb => {
        await napScript(SDK + "firebase-app-compat.js");
        await napScript(SDK + "firebase-auth-compat.js");
        await napScript(SDK + "firebase-firestore-compat.js");
        firebase.initializeApp(cfg);
        auth = firebase.auth(); db = firebase.firestore();
        auth.onAuthStateChanged(u => { nguoi = u ? { uid: u.uid, ten: tenTu(u) } : null; cb(nguoi); });
      },
      dangKy: async (ten, mk) => {
        kiemTra(ten, mk);
        const r = await auth.createUserWithEmailAndPassword(ten + MIEN, mk);
        await db.collection("nguoiChoi").doc(r.user.uid).set({ ten, taoLuc: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      },
      dangNhap: async (ten, mk) => { await auth.signInWithEmailAndPassword(ten + MIEN, mk); },
      dangXuat: async () => auth.signOut(),
      taiTienDo: async () => {
        const d = await db.collection("nguoiChoi").doc(nguoi.uid).get();
        const x = d.exists && d.data().tienDo;
        return x ? JSON.parse(x) : null;
      },
      luuTienDo: async obj => {
        await db.collection("nguoiChoi").doc(nguoi.uid).set({
          ten: nguoi.ten, tienDo: JSON.stringify(obj), capNhat: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      }
    };
  }

  /* ---------------- Giao diện chung cho game ---------------- */
  const gialap = /[?&]gialap=1\b/.test(location.search);
  const cfg = window.FIREBASE_CONFIG;
  const mc = gialap ? mayChuGiaLap() : (cfg && cfg.apiKey ? mayChuFirebase(cfg) : null);
  let nguoiHienTai = null;

  window.TAI_KHOAN = {
    coSan: () => !!mc,
    loaiMayChu: () => (mc ? mc.ten : ""),
    nguoiDung: () => nguoiHienTai,
    dichLoi,
    khoiDong(cb) {
      if (!mc) return cb(null, null);
      Promise.resolve(mc.khoiDong(u => { nguoiHienTai = u; cb(u, null); }))
        .catch(e => cb(null, "Không kết nối được máy chủ tài khoản: " + e.message));
    },
    dangKy: (ten, mk) => mc.dangKy(String(ten).trim().toLowerCase(), mk),
    dangNhap: (ten, mk) => mc.dangNhap(String(ten).trim().toLowerCase(), mk),
    dangXuat: () => mc.dangXuat(),
    taiTienDo: () => mc.taiTienDo(),
    luuTienDo: obj => mc.luuTienDo(obj)
  };
})();
