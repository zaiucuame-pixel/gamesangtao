/* =========================================================
   LOGIC DÙNG CHUNG – chạy được cả trên trình duyệt lẫn trong
   bộ kiểm tra (Node). Không đụng tới giao diện.
   ========================================================= */
(function (goc) {
  "use strict";
  const L = {};
  const kep = (x, a, b) => Math.max(a, Math.min(b, x));
  L.kep = kep;

  /* Danh sách cảnh theo chế độ.
     Thời cuộc có thể "dùng lại" một cảnh của Bài học: { dungLai: 0, nam: 2019 } */
  L.danhSachCanh = function (nv, cheDo, MR) {
    if (cheDo !== "thoiCuoc") return nv.canh;
    return (MR.thoiCuoc[nv.id] || []).map(c =>
      c.dungLai != null ? dungLai(nv.canh[c.dungLai], c) : c);
  };
  /* Cảnh dùng lại có thể gắn "dấu" vào lựa chọn để các cảnh sau nhớ: { dat: { 0: "diXa" } } */
  function dungLai(goc, c) {
    const moi = Object.assign({}, goc, { nam: c.nam, dungLai: c.dungLai });
    if (c.dat && goc.luaChon) moi.luaChon = goc.luaChon.map((l, i) => (c.dat[i] ? Object.assign({}, l, { dat: c.dat[i] }) : l));
    return moi;
  };

  L.trangThaiDau = function (nv, MR) {
    const t = MR.tamLy[nv.id] || {};
    return Object.assign({ thuNhap: 0, tayNghe: 20, gan: 50 }, nv.batDau, { tamTrang: t.tamTrangDau ?? 50, co: [] });
  };

  /* Tâm trạng thay đổi theo điều nhân vật coi trọng (do hoàn cảnh),
     cộng thêm tác động trực tiếp (tamTrang) nếu tình huống có ghi. */
  L.tamTrangDoi = function (nv, hu, MR) {
    if (!hu) return 0;
    const w = (MR.tamLy[nv.id] || {}).coiTrong || { thuNhap: 0.34, tayNghe: 0.33, gan: 0.33 };
    // một phần đến từ điều nhân vật coi trọng, phần còn lại do áp lực/niềm vui trực tiếp của tình huống
    const d = 0.4 * (w.thuNhap * (hu.thuNhap || 0) / 100 + w.tayNghe * (hu.tayNghe || 0) + w.gan * (hu.gan || 0)) + (hu.tamTrang || 0);
    return kep(Math.round(d), -25, 25);
  };

  L.apDung = function (tt, nv, hu, MR, dat) {
    if (!hu) return 0;
    const dm = L.tamTrangDoi(nv, hu, MR);
    tt.thuNhap = Math.max(0, tt.thuNhap + (hu.thuNhap || 0));
    tt.tayNghe = kep(tt.tayNghe + (hu.tayNghe || 0), 0, 100);
    tt.gan = kep(tt.gan + (hu.gan || 0), 0, 100);
    tt.tamTrang = kep(tt.tamTrang + dm, 0, 100);
    if (dat) tt.co = [...(tt.co || []), ...[].concat(dat)];
    return dm;
  };

  /* Mô tả có thể đổi theo lựa chọn trước đó (vd. đã đi làm xa) */
  L.moTa = function (c, tt) {
    if (c.moTaTheo && tt && tt.co) for (const k of Object.keys(c.moTaTheo)) if (tt.co.includes(k)) return c.moTaTheo[k];
    return c.moTa;
  };

  /* Điều kiện dạng khai báo: tnTu/tnDuoi (so với bình quân vùng 2024),
     tayNgheTu/Duoi, ganTu/Duoi, tamTrangTu/Duoi, cheDo, nv, co, demTu.
     Có thể là mảng nhiều điều kiện: thoả một trong số đó là được. */
  L.thoaMan = function (dk, tt, v, cheDo, nv) {
    if (!dk) return true;
    /* Mảng điều kiện = chỉ cần thoả một trong số đó */
    if (Array.isArray(dk)) return dk.some(d => L.thoaMan(d, tt, v, cheDo, nv));
    if (dk.cheDo && dk.cheDo !== cheDo) return false;
    if (dk.nv && (!nv || dk.nv !== nv.id)) return false;
    if (dk.co && !dk.co.every(f => (tt.co || []).includes(f))) return false;
    /* demTu: { diXa: 2 } = dấu "diXa" phải xuất hiện ít nhất 2 lần */
    if (dk.demTu) for (const [f, n] of Object.entries(dk.demTu)) if ((tt.co || []).filter(x => x === f).length < n) return false;
    const tl = tt.thuNhap / v.tn2024;
    if (dk.tnTu != null && tl < dk.tnTu) return false;
    if (dk.tnDuoi != null && tl >= dk.tnDuoi) return false;
    for (const k of ["tayNghe", "gan", "tamTrang"]) {
      if (dk[k + "Tu"] != null && tt[k] < dk[k + "Tu"]) return false;
      if (dk[k + "Duoi"] != null && tt[k] >= dk[k + "Duoi"]) return false;
    }
    return true;
  };

  L.ketThuc = function (tt, nv, v, cheDo, MR) {
    return MR.ketThuc.find(k => L.thoaMan(k.dieuKien, tt, v, cheDo, nv)) || null;
  };

  L.uocMoDat = function (tt, nv, v, cheDo, MR) {
    const t = MR.tamLy[nv.id];
    return !!(t && L.thoaMan(t.uocMo.dieuKien, tt, v, cheDo, nv));
  };

  /* Chọn câu "nghĩ thầm" theo tâm trạng vừa thay đổi */
  L.suyNghi = function (nv, dm, buoc, MR) {
    const s = (MR.tamLy[nv.id] || {}).suyNghi;
    if (!s) return "";
    const ds = dm >= 4 ? s.vui : dm <= -4 ? s.buon : s.binhThuong;
    return ds[buoc % ds.length];
  };

  /* Những kết thúc có thể đạt được của một nhân vật ở một chế độ (đi thử mọi đường) */
  L.ketThucCoThe = function (nv, v, cd, MR) {
    const ds = L.danhSachCanh(nv, cd, MR), out = new Set();
    (function di(i, t) {
      if (i === ds.length) { const e = L.ketThuc(t, nv, v, cd, MR); if (e) out.add(e.id); return; }
      const c = ds[i];
      if (c.luaChon) c.luaChon.forEach(l => { const t2 = { ...t, co: [...(t.co || [])] }; L.apDung(t2, nv, l.hieuUng, MR, l.dat); di(i + 1, t2); });
      else if (c.loai === "cauHoi") { const t2 = { ...t }; L.apDung(t2, nv, c.thuong, MR); di(i + 1, t2); di(i + 1, { ...t }); }
      else di(i + 1, t);
    })(0, L.trangThaiDau(nv, MR));
    return MR.ketThuc.filter(e => out.has(e.id));
  };

  if (typeof module !== "undefined" && module.exports) module.exports = L;
  else goc.LOGIC = L;
})(this);
