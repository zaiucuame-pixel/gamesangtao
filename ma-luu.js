/* =========================================================
   MÃ LƯU GAME – gói huy chương, skin, album vào một mã ngắn
   (vd. GS1-7KQ2-…) để chép sang máy khác, không cần tài khoản.
   Chạy được cả trên trình duyệt lẫn trong bộ kiểm tra (Node).

   Cấu trúc (theo bit): phiên bản · dấu vân tay nội dung · album ·
   câu chuyện đã chơi · ước mơ · huy hiệu · phiếu điều tra ·
   số lượt "thông thái" · skin · khung vàng · mã kiểm tra.
   Mã được viết bằng bảng chữ Crockford Base32 (không có I, L, O, U
   nên khó chép nhầm), chia nhóm 4 kí tự.
   ========================================================= */
(function (goc) {
  "use strict";
  const CHU = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const PHIEN_BAN = 1;
  const CHE_DO = ["baiHoc", "thoiCuoc"];

  /* băm 16 bit (FNV-1a rút gọn) */
  function bam(x) {
    let h = 0x811c9dc5;
    for (let i = 0; i < x.length; i++) {
      h ^= typeof x === "string" ? x.charCodeAt(i) : x[i];
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return (h ^ (h >>> 16)) & 0xffff;
  }

  function tao(ND, MR, L, cauHinh) {
    const VUNG = Object.fromEntries(ND.vung.map(v => [v.id, v]));
    const NV = ND.nhanVat.map(n => n.id);
    const ALBUM = [];
    for (const nv of ND.nhanVat) for (const cd of CHE_DO)
      for (const k of L.ketThucCoThe(nv, VUNG[nv.vung], cd, MR)) ALBUM.push(`${cd}:${nv.id}:${k.id}`);
    const PHIEU = [], daCo = new Set();
    for (const nv of ND.nhanVat.filter(n => n.chinh)) for (const cd of CHE_DO)
      for (const c of L.danhSachCanh(nv, cd, MR))
        for (const p of [c.phieu, ...(c.luaChon || []).map(l => l.phieuThem)])
          if (p && !daCo.has(p.chu)) { daCo.add(p.chu); PHIEU.push(p); }
    const HH = cauHinh.huyHieu, SKIN = cauHinh.skin;
    const VAN_TAY = bam(JSON.stringify([ALBUM, NV, HH, SKIN, PHIEU.map(p => p.chu)]));

    function ma(luu) {
      const bit = [];
      const ghi = (gt, n) => { for (let i = n - 1; i >= 0; i--) bit.push((gt >> i) & 1); };
      ghi(PHIEN_BAN, 4); ghi(VAN_TAY, 16);
      ALBUM.forEach(k => ghi(luu.album && luu.album[k] ? 1 : 0, 1));
      NV.forEach(id => CHE_DO.forEach(cd => ghi(luu.daChoi && luu.daChoi[id + ":" + cd] ? 1 : 0, 1)));
      NV.forEach(id => ghi(luu.uocMo && luu.uocMo[id] ? 1 : 0, 1));
      HH.forEach(id => ghi(luu.huyHieu && luu.huyHieu[id] ? 1 : 0, 1));
      const coPhieu = new Set((luu.phieu || []).map(p => p.chu));
      PHIEU.forEach(p => ghi(coPhieu.has(p.chu) ? 1 : 0, 1));
      ghi(Math.min(255, luu.thongThai || 0), 8);
      ghi(Math.max(0, SKIN.indexOf(luu.skin)), 4);
      ghi(luu.khung === "vang" ? 1 : 0, 1);
      while (bit.length % 8) bit.push(0);
      const byte = [];
      for (let i = 0; i < bit.length; i += 8) byte.push(parseInt(bit.slice(i, i + 8).join(""), 2));
      const kt = bam(byte);
      byte.push(kt >> 8, kt & 255);
      let s = "";
      const tatCa = byte.map(b => b.toString(2).padStart(8, "0")).join("");
      for (let i = 0; i < tatCa.length; i += 5) s += CHU[parseInt(tatCa.slice(i, i + 5).padEnd(5, "0"), 2)];
      return "GS" + PHIEN_BAN + "-" + s.match(/.{1,4}/g).join("-");
    }

    function doc(chuoi) {
      let s = String(chuoi || "").toUpperCase().replace(/[\s-]/g, "")
        .replace(/O/g, "0").replace(/[IL]/g, "1");
      if (!s.startsWith("GS")) throw new Error("Mã lưu phải bắt đầu bằng GS.");
      s = s.slice(3);   // bỏ "GS1"
      let tatCa = "";
      for (const c of s) {
        const i = CHU.indexOf(c);
        if (i < 0) throw new Error(`Mã có kí tự lạ: “${c}”.`);
        tatCa += i.toString(2).padStart(5, "0");
      }
      const byte = [];
      for (let i = 0; i + 8 <= tatCa.length; i += 8) byte.push(parseInt(tatCa.slice(i, i + 8), 2));
      const tongBit = 4 + 16 + ALBUM.length + NV.length * 2 + NV.length + HH.length + PHIEU.length + 8 + 4 + 1;
      const soByte = Math.ceil(tongBit / 8);
      if (byte.length < soByte + 2) throw new Error("Mã bị thiếu kí tự – kiểm tra lại xem đã chép đủ chưa.");
      const than = byte.slice(0, soByte);
      if (bam(than) !== ((byte[soByte] << 8) | byte[soByte + 1])) throw new Error("Mã không đúng – có thể đã chép nhầm một kí tự.");
      const bit = than.map(b => b.toString(2).padStart(8, "0")).join("");
      let vt = 0;
      const doc1 = n => { const g = parseInt(bit.slice(vt, vt + n), 2); vt += n; return g; };
      if (doc1(4) !== PHIEN_BAN) throw new Error("Mã thuộc phiên bản game khác.");
      if (doc1(16) !== VAN_TAY) throw new Error("Mã được tạo từ phiên bản game cũ, không dùng được nữa.");
      const luu = { album: {}, daChoi: {}, uocMo: {}, huyHieu: {}, phieu: [] };
      ALBUM.forEach(k => { if (doc1(1)) luu.album[k] = true; });
      NV.forEach(id => CHE_DO.forEach(cd => { if (doc1(1)) luu.daChoi[id + ":" + cd] = { khoiPhuc: true }; }));
      NV.forEach(id => { if (doc1(1)) luu.uocMo[id] = true; });
      HH.forEach(id => { if (doc1(1)) luu.huyHieu[id] = true; });
      PHIEU.forEach(p => { if (doc1(1)) luu.phieu.push({ loai: p.loai, chu: p.chu }); });
      luu.thongThai = doc1(8);
      luu.skin = SKIN[doc1(4)] || "mac-dinh";
      luu.khung = doc1(1) ? "vang" : "";
      return luu;
    }

    /* Bản lưu "đủ đồ": mọi kết thúc, mọi câu chuyện, mọi huy hiệu – dùng để giới thiệu game */
    function dayDu(skin) {
      const luu = { album: {}, daChoi: {}, uocMo: {}, huyHieu: {}, phieu: PHIEU.map(p => ({ loai: p.loai, chu: p.chu })),
        thongThai: 3, skin: skin || "mac-dinh", khung: "vang" };
      ALBUM.forEach(k => { luu.album[k] = true; });
      NV.forEach(id => CHE_DO.forEach(cd => { luu.daChoi[id + ":" + cd] = { khoiPhuc: true }; }));
      NV.forEach(id => { luu.uocMo[id] = true; });
      HH.forEach(id => { luu.huyHieu[id] = true; });
      return luu;
    }

    return { ma, doc, dayDu, soAlbum: ALBUM.length, soPhieu: PHIEU.length };
  }

  const MA_LUU = { tao };
  if (typeof module !== "undefined" && module.exports) module.exports = MA_LUU;
  else goc.MA_LUU = MA_LUU;
})(this);
