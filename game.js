/* =========================================================
   TUỔI 18 – CHỌN ĐƯỜNG MƯU SINH · game.js
   Giao diện game. Nội dung: noi-dung.js, mo-rong.js.
   Phần tính toán dùng chung với bộ kiểm tra: logic.js.
   ========================================================= */
(function () {
  "use strict";

  const ND = window.NOI_DUNG;
  const MR = window.MO_RONG;
  const L = window.LOGIC;
  const VUNG = Object.fromEntries(ND.vung.map(v => [v.id, v]));
  const $san = document.getElementById("san-khau");
  const KHOA = "gamesangtao-v1";
  const TEN_CHE_DO = { baiHoc: "📘 Bài học", thoiCuoc: "📰 Thời cuộc 2019–2024" };

  /* ---------- tiện ích ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const so = n => Math.round(n).toLocaleString("vi-VN");
  const lan = (a, b) => (b / a).toLocaleString("vi-VN", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  const lenDau = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const mat = m => m >= 70 ? "😄" : m >= 50 ? "🙂" : m >= 35 ? "😐" : "😟";

  function docLuu() {
    try { return JSON.parse(localStorage.getItem(KHOA)) || {}; } catch (e) { return {}; }
  }
  function ghiLuu(d) {
    try { localStorage.setItem(KHOA, JSON.stringify(d)); } catch (e) { /* bỏ qua */ }
  }
  const LUU_TRONG = () => ({ daChoi: {}, phieu: [], album: {}, huyHieu: {}, uocMo: {}, thongThai: 0, cheDo: "baiHoc", skin: "mac-dinh", khung: "" });
  let luu = Object.assign(LUU_TRONG(), docLuu());
  luu.uocMo = luu.uocMo || {}; luu.thongThai = luu.thongThai || 0;

  let tbHen;
  function thongBao(chu) {
    const el = document.getElementById("thong-bao");
    el.textContent = chu;
    el.classList.add("hien");
    clearTimeout(tbHen);
    tbHen = setTimeout(() => el.classList.remove("hien"), 2600);
  }

  function chanDung(nv, co = "") {
    const v = VUNG[nv.vung];
    const anh = nv.anh ? `<img src="${esc(nv.anh)}" alt="${esc(nv.ten)}" onerror="this.replaceWith(document.createTextNode('${nv.emoji}'))">` : nv.emoji;
    return `<div class="chan-dung ${co}" style="--mau-vung:${v.mau}">${anh}</div>`;
  }

  function ganNen(el, url) {
    if (!url || !el) return;
    const img = new Image();
    img.onload = () => { el.style.backgroundImage = `url("${url}")`; el.classList.add("co-anh"); };
    img.src = url;
  }

  /* Những kết thúc có thể đạt được của một nhân vật ở một chế độ (để vẽ album) */
  const _ktCoThe = {};
  function ketThucCoThe(nv, cd) {
    const k = nv.id + ":" + cd;
    if (_ktCoThe[k]) return _ktCoThe[k];
    const ds = L.danhSachCanh(nv, cd, MR), v = VUNG[nv.vung], out = new Set();
    (function di(i, t) {
      if (i === ds.length) { const e = L.ketThuc(t, nv, v, cd, MR); if (e) out.add(e.id); return; }
      const c = ds[i];
      if (c.luaChon) c.luaChon.forEach(l => { const t2 = { ...t }; L.apDung(t2, nv, l.hieuUng, MR, l.dat); di(i + 1, t2); });
      else if (c.loai === "cauHoi") { const t2 = { ...t }; L.apDung(t2, nv, c.thuong, MR); di(i + 1, t2); di(i + 1, { ...t }); }
      else di(i + 1, t);
    })(0, L.trangThaiDau(nv, MR));
    return (_ktCoThe[k] = MR.ketThuc.filter(e => out.has(e.id)));
  }

  /* =========================================================
     MÀN 1: CHỌN CHẾ ĐỘ & NHÂN VẬT
     ========================================================= */
  function manChon() {
    const cd = luu.cheDo;
    const daiMau = ND.vung.map(v => `<span style="background:${v.mau}"></span>`).join("");
    const the = ND.nhanVat.map(nv => {
      const v = VUNG[nv.vung];
      const tl = MR.tamLy[nv.id];
      const xong = luu.daChoi[nv.id + ":" + cd];
      const huy = xong ? `<span class="huy-hieu xong">✔ Đã chơi</span>` : (nv.chinh ? `<span class="huy-hieu">⭐ Nhiệm vụ 1</span>` : "");
      return `
        <button class="the-nv ${nv.chinh ? "chinh" : ""}" style="--mau-vung:${v.mau}" data-nv="${nv.id}">
          ${huy}
          ${chanDung(nv)}
          <div>
            <div class="vung">${esc(v.ten)}</div>
            <h3>${esc(nv.ten)}</h3>
            <div class="que">📍 ${esc(nv.que)}</div>
            <div class="que">🌟 ${esc(tl.uocMo.chu)}</div>
            ${nv.chinh ? `<p style="margin:6px 0 0;font-size:14px">${esc(nv.gioiThieu)}</p>` : ""}
          </div>
        </button>`;
    }).join("");

    const soNv = new Set(Object.keys(luu.daChoi).map(k => k.split(":")[0])).size;
    const soKt = Object.keys(luu.album).length;
    $san.innerHTML = `
      <section class="anh-bia">
        <span class="nhan">📚 Địa lí 9 · Bài 4 · Thực hành</span>
        <h1>Tuổi 18 – Chọn đường mưu sinh</h1>
        <p>Bạn vừa 18 tuổi. Mỗi năm là một ngã rẽ về việc làm. Hãy sống thử cuộc đời của một bạn trẻ ở một trong <b>6 vùng</b> của nước ta – và tự khám phá vì sao thu nhập mỗi vùng lại khác nhau.</p>
        <p style="font-size:14px;opacity:.85">Đã trải nghiệm: <b>${soNv}/6</b> nhân vật · <b>${soKt}</b> kết thúc trong 📔 Album${soNv ? " · Mở <b>🏆 Đại hội 6 vùng</b> để so sánh!" : ""}</p>
        <div class="dai-mau">${daiMau}</div>
      </section>

      <details class="the bang-nv-gon" ${Object.keys(luu.daChoi).length ? "open" : ""}>
        <summary><b>🎯 Nhiệm vụ</b> <small>${NHIEM_VU.filter(n => luu.huyHieu[n.id]).length}/${NHIEM_VU.length} hoàn thành · phần thưởng: huy hiệu & skin</small></summary>
        <div class="luoi-nhiem-vu">${bangNhiemVu()}</div>
      </details>

      <h2>🧭 Chọn chế độ chơi</h2>
      <div class="chon-che-do">
        <button class="che-do ${cd === "baiHoc" ? "dang-chon" : ""}" data-che-do="baiHoc">
          <b>📘 Bài học</b>
          <span>Kinh tế bình thường – bám sát nội dung Bài 4. Phù hợp để học trên lớp.</span>
        </button>
        <button class="che-do ${cd === "thoiCuoc" ? "dang-chon" : ""}" data-che-do="thoiCuoc">
          <b>📰 Thời cuộc 2019–2024</b>
          <span>Bài học + lịch sử – xã hội: sống qua dịch COVID-19, giá cả tăng vọt, bão lũ, hạn mặn… Mỗi nhân vật trải qua 3 sự kiện có thật.</span>
        </button>
      </div>

      <h2>🎭 Chọn nhân vật</h2>
      <div class="luoi-nv">${the}</div>
    `;
    $san.querySelectorAll("[data-che-do]").forEach(b => b.addEventListener("click", () => {
      luu.cheDo = b.dataset.cheDo; ghiLuu(luu);
      $san.querySelectorAll("[data-che-do]").forEach(x => x.classList.toggle("dang-chon", x === b));
      $san.querySelectorAll(".the-nv").forEach(x => {
        const id = x.dataset.nv, hh = x.querySelector(".huy-hieu");
        const xong = luu.daChoi[id + ":" + luu.cheDo];
        const nv = ND.nhanVat.find(n => n.id === id);
        if (hh) hh.remove();
        const moi = xong ? `<span class="huy-hieu xong">✔ Đã chơi</span>` : (nv.chinh ? `<span class="huy-hieu">⭐ Nhiệm vụ 1</span>` : "");
        x.insertAdjacentHTML("afterbegin", moi);
      });
    }));
    $san.querySelectorAll("[data-nv]").forEach(b => b.addEventListener("click", () => batDau(b.dataset.nv)));
  }

  /* =========================================================
     MÀN 2: CHƠI
     ========================================================= */
  let tt = null; // trạng thái lượt chơi

  function batDau(id) {
    const nv = ND.nhanVat.find(n => n.id === id);
    const cheDo = luu.cheDo;
    tt = Object.assign(L.trangThaiDau(nv, MR), {
      nv, v: VUNG[nv.vung], cheDo,
      ds: L.danhSachCanh(nv, cheDo, MR),
      buoc: -1, nghe: "", phieu: [], dungCau: 0, tongCau: 0, lichSu: []
    });
    manGioiThieu();
  }

  function manGioiThieu() {
    const { nv, v, cheDo } = tt;
    const tl = MR.tamLy[nv.id];
    $san.innerHTML = `
      <article class="the canh" style="--mau-vung:${v.mau}">
        <div class="canh-dau" id="dau-canh">
          <span class="nam">${TEN_CHE_DO[cheDo]} · ${esc(v.ten)}</span>
          <h2>Xin chào, mình là ${esc(nv.ten)}!</h2>
        </div>
        <div class="canh-than" style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center">
          ${chanDung(nv, "lon")}
          <div>
            <p class="mo-ta" style="margin:0">${esc(nv.gioiThieu)}</p>
            <p style="font-size:14px;color:var(--chu-nhat);margin:8px 0 0">📍 Quê: ${esc(nv.que)}<br>📊 Thu nhập bình quân đầu người của vùng năm 2024 (SGK): <b>${so(v.tn2024)} nghìn đồng/tháng</b></p>
          </div>
        </div>
        <div class="canh-than tam-ly" style="padding-top:0">
          <div class="o-tam-ly"><b>🏠 Hoàn cảnh</b>${esc(tl.hoanCanh)}</div>
          <div class="o-tam-ly"><b>🌟 Ước mơ</b>${esc(tl.uocMo.chu)}</div>
          <div class="o-tam-ly"><b>😟 Nỗi lo</b>${esc(tl.noiLo)}</div>
        </div>
        ${cheDo === "thoiCuoc" ? `<div class="canh-than" style="padding-top:0"><p class="ghi-chu" style="margin:0">📰 Năm 2019, ${esc(nv.ten)} vừa tròn 18 tuổi. Hành trình kéo dài đến năm 2024, đi qua 3 sự kiện <b>có thật</b> (có ghi nguồn). Thu nhập của nhân vật là <b>số mô phỏng</b> cho game, không phải số liệu thống kê.</p></div>` : ""}
        <div class="canh-than" style="padding-top:0">
          <button class="nut" id="nut-di">${cheDo === "thoiCuoc" ? "Bắt đầu năm 2019 →" : "Bắt đầu năm thứ nhất →"}</button>
        </div>
      </article>`;
    ganNen(document.getElementById("dau-canh"), nv.nen);
    document.getElementById("nut-di").onclick = canhTiep;
    lenDau();
  }

  function hud() {
    const { nv, v } = tt;
    return `
      <div class="hud" style="--mau-vung:${v.mau}">
        ${chanDung(nv, "nho")}
        <div>
          <div class="ten">${esc(nv.ten)}</div>
          <div class="vung">${esc(v.ten)}${tt.nghe ? " · " + esc(tt.nghe) : ""}</div>
        </div>
        <div class="chi-so">
          <div class="o"><div class="nhan">💰 Thu nhập (nghìn đ/tháng)</div><div class="so" id="cs-tn">${so(tt.thuNhap)}</div></div>
          <div class="o"><div class="nhan">🎓 Tay nghề</div><div class="so" id="cs-tay">${tt.tayNghe}</div><div class="thanh"><i style="width:${tt.tayNghe}%"></i></div></div>
          <div class="o"><div class="nhan">🏡 Gắn bó quê hương</div><div class="so" id="cs-gan">${tt.gan}</div><div class="thanh"><i style="width:${tt.gan}%"></i></div></div>
          <div class="o"><div class="nhan">💭 Tâm trạng</div><div class="so" id="cs-tam">${mat(tt.tamTrang)} ${tt.tamTrang}</div><div class="thanh"><i style="width:${tt.tamTrang}%"></i></div></div>
          ${nv.chinh ? `<div class="o"><div class="nhan">📋 Phiếu điều tra</div><div class="so" id="cs-phieu">${tt.phieu.length}</div></div>` : ""}
        </div>
      </div>`;
  }

  function tienDo() {
    let s = "";
    for (let i = 0; i < tt.ds.length; i++) s += `<span class="${i < tt.buoc ? "xong" : i === tt.buoc ? "dang" : ""}"></span>`;
    return `<div class="tien-do" style="--mau-vung:${tt.v.mau}">${s}</div>`;
  }

  function tinThoiSu(c) {
    const s = MR.suKien[c.suKien];
    if (!s) return "";
    return `<div class="tin-thoi-su">
      <div class="tts-dau">📰 TIN THỜI SỰ ${s.nam}</div>
      <b>${esc(s.tieuDe)}</b>
      <p>${esc(s.tin)}</p>
      <small>Nguồn: <a href="${esc(s.nguon.url)}" target="_blank" rel="noopener">${esc(s.nguon.ten)}</a></small>
    </div>`;
  }

  function canhTiep() {
    tt.buoc++;
    if (tt.buoc >= tt.ds.length) return manKetThuc();
    const c = tt.ds[tt.buoc];
    const tongNam = Math.max(...tt.ds.map(x => x.nam || 1));
    const nhanNam = tt.cheDo === "thoiCuoc" ? `Năm ${c.nam}` : `Năm ${c.nam || tt.buoc + 1}/${tongNam}`;

    let than = "";
    if (c.loai === "chon" || c.loai === "bienCo") {
      than = `<div class="luoi-chon">${c.luaChon.map((l, i) => `<button class="lua-chon" data-i="${i}">${esc(l.chu)}</button>`).join("")}</div>`;
    } else if (c.loai === "cauHoi") {
      than = `<p class="mo-ta"><b>${esc(c.cauHoi)}</b></p>
        <div class="luoi-chon">${c.dapAn.map((d, i) => `<button class="lua-chon" data-i="${i}">${"ABCD"[i]}. ${esc(d)}</button>`).join("")}</div>`;
    } else {
      than = `<button class="nut toi" id="nut-ghi">${tt.nv.chinh ? "📋 Ghi vào sổ điều tra" : "Đọc xong"}</button>`;
    }
    const moTa = L.moTa(c, tt);

    $san.innerHTML = `
      ${hud()}
      ${tienDo()}
      <article class="the canh" style="--mau-vung:${tt.v.mau}">
        <div class="canh-dau" id="dau-canh">
          <span class="nam">${nhanNam}</span>
          <h2>${esc(c.tieuDe)}</h2>
        </div>
        <div class="canh-than">
          ${c.loai === "bienCo" ? tinThoiSu(c) : ""}
          ${moTa ? `<p class="mo-ta">${esc(moTa)}</p>` : ""}
          ${than}
          <div id="ket-qua"></div>
        </div>
      </article>`;
    ganNen(document.getElementById("dau-canh"), tt.nv.nen);

    if (c.luaChon) {
      $san.querySelectorAll(".lua-chon").forEach(b => b.onclick = () => chon(c, +b.dataset.i));
    } else if (c.loai === "cauHoi") {
      $san.querySelectorAll(".lua-chon").forEach(b => b.onclick = () => traLoi(c, +b.dataset.i));
    } else {
      document.getElementById("nut-ghi").onclick = () => {
        document.getElementById("nut-ghi").remove();
        tt.lichSu.push({ nam: c.nam, tieuDe: c.tieuDe, chon: "Đọc bản tin" });
        hienKetQua({ phieu: [c.phieu], diaLi: c.diaLi });
      };
    }
    lenDau();
  }

  function chon(c, i) {
    const l = c.luaChon[i];
    $san.querySelectorAll(".lua-chon").forEach((b, j) => { b.disabled = true; if (j === i) b.classList.add("da-chon"); });
    const dm = L.apDung(tt, tt.nv, l.hieuUng, MR, l.dat);
    if (l.nghe) tt.nghe = l.nghe;
    tt.lichSu.push({ nam: c.nam, tieuDe: c.tieuDe, chon: l.chu, dm, suKien: c.suKien });
    hienKetQua({
      loi: l.ketQua, hieuUng: l.hieuUng, dm,
      nghi: l.suyNghi || L.suyNghi(tt.nv, dm, tt.buoc, MR),
      phieu: [c.phieu, l.phieuThem], diaLi: l.diaLi || c.diaLi
    });
  }

  function traLoi(c, i) {
    const dung = i === c.dung;
    tt.tongCau++;
    if (dung) tt.dungCau++;
    $san.querySelectorAll(".lua-chon").forEach((b, j) => {
      b.disabled = true;
      if (j === c.dung) b.classList.add("dung");
      else if (j === i) b.classList.add("sai");
    });
    const dm = dung ? L.apDung(tt, tt.nv, c.thuong, MR) : 0;
    tt.lichSu.push({ nam: c.nam, tieuDe: c.tieuDe, chon: dung ? "Trả lời đúng ✅" : "Trả lời chưa đúng" });
    hienKetQua({
      loi: dung ? "🎉 Chính xác! Bạn được thưởng." : "😅 Chưa đúng rồi. Xem giải thích nhé:",
      hieuUng: dung ? c.thuong : null, dm,
      phieu: [c.phieu],
      diaLi: [c.giaiThich, c.diaLi].filter(Boolean).join(" ")
    });
  }

  function chipHieuUng(hu, dm) {
    const ds = [];
    const them = (gt, ten) => { if (gt) ds.push(`<span class="chip ${gt > 0 ? "cong" : "tru"}">${gt > 0 ? "+" : ""}${so(gt)} ${ten}</span>`); };
    if (hu) { them(hu.thuNhap, "💰"); them(hu.tayNghe, "🎓"); them(hu.gan, "🏡"); }
    them(dm, "💭");
    return ds.length ? `<div class="chip-hang">${ds.join("")}</div>` : "";
  }

  function hienKetQua({ loi, hieuUng, dm, nghi, phieu, diaLi }) {
    const moi = (phieu || []).filter(Boolean);
    moi.forEach(p => tt.phieu.push(p));
    const phieuHtml = (tt.nv.chinh && moi.length)
      ? moi.map(p => `<div class="phieu-moi"><b>📋 Phiếu điều tra mới – ${tenLoaiPhieu(p.loai)}:</b> ${esc(p.chu)}</div>`).join("")
      : "";
    const laCuoi = tt.buoc >= tt.ds.length - 1;
    document.getElementById("ket-qua").innerHTML = `
      <div class="ket-qua">
        ${loi ? `<p class="loi">${esc(loi)}</p>` : ""}
        ${chipHieuUng(hieuUng, dm)}
        ${nghi ? `<div class="tam-ly-nghi">${chanDung(tt.nv, "nho")}<span>💭 <i>“${esc(nghi)}”</i></span></div>` : ""}
        ${diaLi ? `<div class="goc-dia-li"><b>📍 Góc Địa lí:</b> ${esc(diaLi)}${anhThat(tt.ds[tt.buoc].anh)}</div>` : ""}
        ${phieuHtml}
        <div class="hang-nut"><button class="nut" id="nut-tiep">${laCuoi ? "Xem hồ sơ cuộc đời 🏁" : (tt.cheDo === "thoiCuoc" ? "Đi tiếp →" : "Năm tiếp theo →")}</button></div>
      </div>`;
    if (moi.length && tt.nv.chinh) thongBao(`📋 Nhận ${moi.length} phiếu điều tra!`);
    const thay = (id, gt) => { const el = document.getElementById(id); if (el && el.textContent !== String(gt)) { el.textContent = gt; el.classList.remove("nhay"); void el.offsetWidth; el.classList.add("nhay"); } };
    thay("cs-tn", so(tt.thuNhap)); thay("cs-tay", tt.tayNghe); thay("cs-gan", tt.gan);
    thay("cs-tam", `${mat(tt.tamTrang)} ${tt.tamTrang}`); thay("cs-phieu", tt.phieu.length);
    const thanh = $san.querySelectorAll(".hud .thanh i");
    [tt.tayNghe, tt.gan, tt.tamTrang].forEach((g, k) => { if (thanh[k]) thanh[k].style.width = g + "%"; });
    document.getElementById("nut-tiep").onclick = canhTiep;
    document.getElementById("ket-qua").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function anhThat(a) {
    if (!a) return "";
    return `<figure class="anh-that">
      <img src="${esc(a.src)}" alt="${esc(a.chu)}" loading="lazy" onerror="this.closest('figure').remove()">
      <figcaption>📷 ${esc(a.chu)}${a.nguon ? `<br><small>${esc(a.nguon)}</small>` : ""}</figcaption>
    </figure>`;
  }

  const tenLoaiPhieu = l => ({ thucTrang: "Thực trạng", giaiPhap: "Giải pháp", yNghia: "Ý nghĩa" }[l] || "Ghi chú");

  /* =========================================================
     MÀN 3: HỒ SƠ CUỘC ĐỜI
     ========================================================= */
  /* =========================================================
     NHIỆM VỤ – HUY HIỆU – SKIN
     ========================================================= */
  const soNvXong = cd => new Set(Object.keys(luu.daChoi)
    .filter(k => cd === "baiHoc" ? (k.endsWith(":baiHoc") || !k.includes(":")) : k.endsWith(":" + cd))
    .map(k => k.split(":")[0])).size;

  const NHIEM_VU = [
    { id: "du-6-vung", icon: "🗺️", ten: "Đi đủ 6 vùng", mo: "Hoàn thành câu chuyện của cả 6 nhân vật ở chế độ Bài học",
      tien: () => [soNvXong("baiHoc"), 6], skin: "lua-chin" },
    { id: "thoi-cuoc", icon: "📰", ten: "Nhân chứng thời cuộc", mo: "Hoàn thành cả 6 câu chuyện ở chế độ Thời cuộc 2019–2024",
      tien: () => [soNvXong("thoiCuoc"), 6], skin: "pho-co" },
    { id: "uoc-mo", icon: "🌟", ten: "Người truyền cảm hứng", mo: "Giúp 3 nhân vật khác nhau thực hiện được ước mơ",
      tien: () => [Object.keys(luu.uocMo).length, 3], skin: "bien" },
    { id: "suu-tam", icon: "🏆", ten: "Nhà sưu tầm", mo: "Mở khoá 15 kết thúc trong album",
      tien: () => [Object.keys(luu.album).length, 15], skin: "hoa-ban" },
    { id: "thong-thai", icon: "🧠", ten: "Thông thái", mo: "Trả lời đúng mọi câu hỏi chặn đường trong 3 lượt chơi",
      tien: () => [luu.thongThai, 3], khung: "vang" },
    { id: "tho-san", icon: "🔮", ten: "Thợ săn bí mật", mo: "Tìm ra cả 3 kết thúc bí mật (mỗi cái tặng một skin đặc biệt)",
      tien: () => [BI_MAT.filter(daTimBiMat).length, BI_MAT.length] }
  ];
  const BI_MAT = MR.ketThuc.filter(k => k.biMat);
  function daTimBiMat(k) { return Object.keys(luu.album).some(a => a.endsWith(":" + k.id)); }
  function skinDaMo(id) {
    return id === "mac-dinh" || NHIEM_VU.some(n => n.skin === id && luu.huyHieu[n.id]) || BI_MAT.some(k => k.skin === id && daTimBiMat(k));
  }
  const SKIN = {
    "mac-dinh": { icon: "🧭", ten: "Mặc định" },
    "lua-chin": { icon: "🌾", ten: "Đồng lúa chín" },
    "pho-co": { icon: "🏮", ten: "Phố cổ về đêm" },
    "bien": { icon: "🌊", ten: "Biển miền Trung" },
    "hoa-ban": { icon: "🌸", ten: "Hoa ban Tây Bắc" },
    "chong-dich": { icon: "💙", ten: "Tuyến đầu chống dịch" },
    "giang-sinh": { icon: "🎄", ten: "Giáng sinh" },
    "halloween": { icon: "🎃", ten: "Halloween" }
  };
  const phanThuong = nvu => nvu.skin ? `skin ${SKIN[nvu.skin].icon} ${SKIN[nvu.skin].ten}` : nvu.khung ? "✨ khung chân dung vàng" : "🏅 huy hiệu đặc biệt";

  function apSkin() {
    const s = SKIN[luu.skin] && skinDaMo(luu.skin) ? luu.skin : "mac-dinh";
    document.body.dataset.skin = s;
    document.body.dataset.khung = luu.khung === "vang" && luu.huyHieu["thong-thai"] ? "vang" : "";
    const ic = document.querySelector(".logo-icon");
    if (ic) ic.textContent = SKIN[s].icon;
  }

  function kiemNhiemVu() {
    const moi = [];
    for (const n of NHIEM_VU) {
      const [a, b] = n.tien();
      if (a >= b && !luu.huyHieu[n.id]) { luu.huyHieu[n.id] = true; moi.push(n); }
    }
    return moi;
  }

  function bangNhiemVu() {
    return NHIEM_VU.map(n => {
      const [a, b] = n.tien(), xong = !!luu.huyHieu[n.id];
      const pt = Math.min(100, Math.round(a / b * 100));
      return `<div class="nhiem-vu ${xong ? "xong" : ""}">
        <span class="nv-icon">${n.icon}</span>
        <div class="nv-than">
          <b>${esc(n.ten)}</b> <small>${esc(n.mo)}</small>
          <div class="nv-thanh"><i style="width:${pt}%"></i></div>
          <small class="nv-so">${xong ? "✅ Hoàn thành" : `${Math.min(a, b)}/${b}`} · 🎁 ${phanThuong(n)}</small>
        </div>
      </div>`;
    }).join("");
  }

  function manKetThuc() {
    const { nv, v, cheDo } = tt;
    const nghe = tt.nghe || "Lao động tự do";
    const kt = L.ketThuc(tt, nv, v, cheDo, MR);
    const tl = MR.tamLy[nv.id];
    const datUocMo = L.uocMoDat(tt, nv, v, cheDo, MR);
    const khoaAlbum = `${cheDo}:${nv.id}:${kt.id}`;
    const moiMo = !luu.album[khoaAlbum];

    luu.daChoi[nv.id + ":" + cheDo] = { nghe, thuNhap: tt.thuNhap, tayNghe: tt.tayNghe, gan: tt.gan, tamTrang: tt.tamTrang };
    luu.album[khoaAlbum] = true;
    if (nv.chinh) {
      const da = new Set(luu.phieu.map(p => p.chu));
      tt.phieu.forEach(p => { if (!da.has(p.chu)) { luu.phieu.push(p); da.add(p.chu); } });
    }
    if (datUocMo) luu.uocMo[nv.id] = true;
    if (tt.tongCau > 0 && tt.dungCau === tt.tongCau) luu.thongThai = (luu.thongThai || 0) + 1;
    const hhMoi = kiemNhiemVu();
    ghiLuu(luu);

    const tile = tt.thuNhap / v.tn2024;
    const max = Math.max(tt.thuNhap, v.tn2024, ...ND.vung.map(x => x.tn2024));
    const w = x => Math.max(8, (x / max) * 100) + "%";
    const dongTG = tt.lichSu.filter(h => h.chon).map(h => `
      <li class="${h.suKien ? "co-su-kien" : ""}"><span class="nam-tg">${h.nam || ""}</span>
        <div><b>${esc(h.tieuDe)}</b>${h.suKien ? ` <span class="the-su-kien">📰 ${esc(MR.suKien[h.suKien].tieuDe)}</span>` : ""}<br><small>${esc(h.chon)}</small></div></li>`).join("");

    $san.innerHTML = `
      <article class="the ho-so" style="--mau-vung:${v.mau}">
        ${chanDung(nv, "lon")}
        <h2>Hồ sơ cuộc đời của ${esc(nv.ten)}</h2>
        <div class="nghe">💼 ${esc(nghe)}</div>

        ${kt.biMat ? `<div class="bao-bi-mat">🔮 Bạn đã tìm ra một <b>KẾT THÚC BÍ MẬT</b>!<br>🎁 Nhận huy hiệu ${kt.icon} và skin <b>${SKIN[kt.skin].icon} ${esc(SKIN[kt.skin].ten)}</b> <button class="nut" data-den="album">🎨 Mặc thử ngay</button></div>` : ""}
        <div class="ket-thuc ${kt.biMat ? "bi-mat" : ""}">
          <div class="kt-icon">${kt.icon}</div>
          <div>
            <small>${TEN_CHE_DO[cheDo]} · ${kt.biMat ? "Kết thúc bí mật" : "Kết thúc"}${moiMo ? " <b class='moi'>MỚI!</b>" : ""}</small>
            <h3>${esc(kt.tieuDe)}</h3>
            <p>${esc(kt.chu.replaceAll("{ten}", nv.ten))}</p>
            <p class="uoc-mo ${datUocMo ? "dat" : ""}">🌟 Ước mơ “${esc(tl.uocMo.chu)}”: <b>${datUocMo ? "đã thành hiện thực!" : "vẫn còn dang dở"}</b></p>
          </div>
        </div>

        <div class="chi-so-cuoi">
          <span>🎓 Tay nghề <b>${tt.tayNghe}</b></span>
          <span>🏡 Gắn bó quê <b>${tt.gan}</b></span>
          <span>💭 Tâm trạng <b>${mat(tt.tamTrang)} ${tt.tamTrang}</b></span>
          ${tt.tongCau ? `<span>❓ Câu hỏi đúng <b>${tt.dungCau}/${tt.tongCau}</b></span>` : ""}
        </div>
        ${hhMoi.length ? `<div class="hh-moi">${hhMoi.map(n => `<span>🎉 Hoàn thành nhiệm vụ ${n.icon} <b>${esc(n.ten)}</b> – nhận huy hiệu + ${phanThuong(n)}!</span>`).join("")}<button class="nut" data-den="album">🎨 Mở Tủ đồ</button></div>` : ""}

        <div class="so-sanh">
          <div class="dong"><span>💰 Thu nhập của ${esc(nv.ten)}</span><div class="cot" style="width:${w(tt.thuNhap)}">${so(tt.thuNhap)}</div></div>
          <div class="dong"><span>📊 Bình quân đầu người<br><small>${esc(v.ten)} (2024)</small></span><div class="cot nhat" style="width:${w(v.tn2024)}">${so(v.tn2024)}</div></div>
          <p class="ghi-chu">Đơn vị: nghìn đồng/tháng. Thu nhập của ${esc(nv.ten)} (số mô phỏng) bằng khoảng <b>${tile.toLocaleString("vi-VN", { maximumFractionDigits: 1 })} lần</b> mức bình quân đầu người của vùng.
          <br>💡 Vì sao một người đi làm thường có thu nhập cao hơn mức "bình quân đầu người"? Vì khi tính bình quân, tổng thu nhập của hộ được chia cho <b>tất cả</b> thành viên, kể cả trẻ em, người già không đi làm.</p>
        </div>

        <h3 style="text-align:left;margin-top:18px">🧭 Hành trình ${cheDo === "thoiCuoc" ? "2019–2024" : ""}</h3>
        <ol class="dong-thoi-gian">${dongTG}</ol>

        <div class="hang-nut" style="justify-content:center">
          <button class="nut" id="choi-lai">🔁 Chơi lại ${esc(nv.ten)}</button>
          ${nv.chinh ? `<button class="nut toi" data-den="baocao">📋 Báo cáo việc làm Hà Nội</button>` : ""}
          <button class="nut phu" data-den="album">📔 Album</button>
          <button class="nut phu" data-den="daihoi">🏆 Đại hội 6 vùng</button>
          <button class="nut phu" data-den="chon">🎭 Nhân vật khác</button>
        </div>
      </article>`;
    ganDieuHuong($san);
    document.getElementById("choi-lai").onclick = () => batDau(nv.id);
    if (moiMo) thongBao(kt.biMat ? `🔮 Kết thúc bí mật! Mở khoá skin ${SKIN[kt.skin].ten}` : `${kt.icon} Mở khoá kết thúc mới: ${kt.tieuDe}`);
    lenDau();
  }

  /* =========================================================
     MÀN ALBUM
     ========================================================= */
  function manAlbum() {
    const hh = NHIEM_VU.map(n =>
      `<div class="huy-hieu-lon ${luu.huyHieu[n.id] ? "co" : ""}"><span>${n.icon}</span><b>${esc(n.ten)}</b><small>${esc(n.mo)}</small></div>`).join("")
      + BI_MAT.map(k => daTimBiMat(k)
        ? `<div class="huy-hieu-lon co bi-mat"><span>${k.icon}</span><b>${esc(k.tieuDe)}</b><small>Kết thúc bí mật</small></div>`
        : `<div class="huy-hieu-lon bi-mat"><span>🔮</span><b>???</b><small>Gợi ý: ${esc(k.goiY)}</small></div>`).join("");
    const daMo = skinDaMo;
    const skinHtml = Object.entries(SKIN).map(([id, s]) => {
      const nvu = NHIEM_VU.find(n => n.skin === id);
      const mo = daMo(id), dang = (luu.skin || "mac-dinh") === id;
      return `<button class="o-skin ${mo ? "" : "khoa"} ${dang ? "dang-dung" : ""}" data-skin="${id}" ${mo ? "" : "disabled"}>
        <span class="mau-skin skin-${id}"></span>
        <b>${s.icon} ${esc(s.ten)}</b>
        <small>${dang ? "✔ Đang dùng" : mo ? "Bấm để dùng" : nvu ? "🔒 " + esc(nvu.ten) : "🔮 Kết thúc bí mật – " + esc((BI_MAT.find(k => k.skin === id) || {}).goiY || "")}</small>
      </button>`;
    }).join("");
    const coKhung = !!luu.huyHieu["thong-thai"];
    let tong = 0, mo = 0;
    const khoi = ND.nhanVat.map(nv => {
      const v = VUNG[nv.vung];
      const hang = ["baiHoc", "thoiCuoc"].map(cd => {
        const o = ketThucCoThe(nv, cd).map(k => {
          const co = luu.album[`${cd}:${nv.id}:${k.id}`];
          tong++; if (co) mo++;
          return `<div class="o-album ${co ? "mo" : ""} ${k.biMat ? "bi-mat" : ""}" title="${co ? esc(k.tieuDe) : "Chưa mở khoá"}"><span>${co ? k.icon : k.biMat ? "🔮" : "❓"}</span><small>${co ? esc(k.tieuDe) : k.biMat ? "Bí mật" : "???"}</small></div>`;
        }).join("");
        return `<div class="album-hang"><div class="album-cd">${TEN_CHE_DO[cd]}</div><div class="album-o">${o}</div></div>`;
      }).join("");
      return `<div class="album-nv" style="--mau-vung:${v.mau}">${chanDung(nv, "nho")}<div><b>${esc(nv.ten)}</b> <small>${esc(v.ten)}</small>${hang}</div></div>`;
    }).join("");
    $san.innerHTML = `
      <section class="anh-bia" style="margin-bottom:16px">
        <span class="nhan">📔 Bộ sưu tập</span>
        <h1 style="font-size:clamp(28px,6vw,44px)">Album & Tủ đồ</h1>
        <p>Bạn đã mở khoá <b>${mo}/${tong}</b> kết thúc. Hoàn thành nhiệm vụ để nhận huy hiệu và skin giao diện mới!</p>
      </section>
      <article class="the"><h2>🎨 Tủ đồ – Skin giao diện</h2>
        <div class="luoi-skin">${skinHtml}</div>
        <label class="chon-khung ${coKhung ? "" : "khoa"}">
          <input type="checkbox" id="khung-vang" ${luu.khung === "vang" ? "checked" : ""} ${coKhung ? "" : "disabled"}>
          ✨ Khung chân dung vàng ${coKhung ? "" : "<small>🔒 Hoàn thành nhiệm vụ Thông thái</small>"}
        </label>
      </article>
      <article class="the buoc"><h2>🎯 Nhiệm vụ</h2><div class="luoi-nhiem-vu">${bangNhiemVu()}</div></article>
      <article class="the buoc"><h2>🏅 Huy hiệu</h2><div class="luoi-huy-hieu">${hh}</div></article>
      <article class="the buoc"><h2>🎞️ Kết thúc đã mở</h2>${khoi}</article>`;
    $san.querySelectorAll(".o-skin:not([disabled])").forEach(b => b.onclick = () => {
      luu.skin = b.dataset.skin; ghiLuu(luu); apSkin();
      thongBao(`${SKIN[luu.skin].icon} Đã đổi sang skin ${SKIN[luu.skin].ten}`);
      manAlbum();
    });
    const k = document.getElementById("khung-vang");
    if (k) k.onchange = () => { luu.khung = k.checked ? "vang" : ""; ghiLuu(luu); apSkin(); };
    lenDau();
  }

  /* =========================================================
     MÀN 4: BÁO CÁO VIỆC LÀM HÀ NỘI (Nhiệm vụ 1)
     ========================================================= */
  function manBaoCao() {
    const ds = loai => luu.phieu.filter(p => p.loai === loai);
    const muc = (tieuDe, loai) => {
      const p = ds(loai);
      return `<h3>${tieuDe}</h3>${p.length ? `<ul>${p.map(x => `<li>${esc(x.chu)}</li>`).join("")}</ul>` : `<p class="trong">Chưa có phiếu. Chơi đường của Minh để thu thập nhé!</p>`}`;
    };
    const minh = ND.nhanVat.find(n => n.chinh);
    const chuaChoi = !luu.phieu.length;

    $san.innerHTML = `
      <article class="the bao-cao">
        <h1>📋 Báo cáo: Vấn đề việc làm ở Hà Nội</h1>
        <p style="color:var(--chu-nhat);margin-top:0">Nhiệm vụ 1 – Bài 4. Tổng hợp từ ${luu.phieu.length} phiếu điều tra thu thập trong hành trình của Minh.</p>
        ${chuaChoi ? `<div class="phieu-moi">Bạn chưa có phiếu điều tra nào. Hãy đi đường của <b>Minh</b> để thu thập tư liệu cho báo cáo.</div>` : ""}
        ${muc("1. Thực trạng", "thucTrang")}
        ${muc("2. Giải pháp", "giaiPhap")}
        ${muc("3. Ý nghĩa", "yNghia")}
        <p class="ghi-chu" style="margin-top:18px">✍️ Gợi ý: đây là khung báo cáo. Em hãy viết lại bằng lời văn của mình, bổ sung số liệu từ Niên giám thống kê Hà Nội hoặc cổng thông tin của thành phố, và ghi rõ nguồn.</p>
        <div class="hang-nut">
          ${chuaChoi ? `<button class="nut" id="choi-minh">🧑‍💻 Đi đường của Minh</button>` : `
          <button class="nut" id="nut-in">🖨️ In / Lưu PDF</button>
          <button class="nut phu" id="nut-chep">📄 Sao chép nội dung</button>
          <button class="nut phu" id="nut-xoa">🗑️ Xoá phiếu, làm lại</button>`}
        </div>
      </article>`;
    const $ = id => document.getElementById(id);
    if ($("choi-minh")) $("choi-minh").onclick = () => batDau(minh.id);
    if ($("nut-in")) $("nut-in").onclick = () => window.print();
    if ($("nut-chep")) $("nut-chep").onclick = () => {
      const chu = ["BÁO CÁO: VẤN ĐỀ VIỆC LÀM Ở HÀ NỘI", ...[["1. Thực trạng", "thucTrang"], ["2. Giải pháp", "giaiPhap"], ["3. Ý nghĩa", "yNghia"]]
        .map(([t, l]) => t + "\n" + ds(l).map(p => "- " + p.chu).join("\n"))].join("\n\n");
      (navigator.clipboard ? navigator.clipboard.writeText(chu) : Promise.reject())
        .then(() => thongBao("✅ Đã sao chép báo cáo"), () => thongBao("Không sao chép được, hãy bôi đen và copy thủ công"));
    };
    if ($("nut-xoa")) $("nut-xoa").onclick = () => {
      if (!confirm("Xoá toàn bộ phiếu điều tra đã thu thập?")) return;
      luu.phieu = []; ghiLuu(luu); manBaoCao();
    };
    lenDau();
  }

  /* =========================================================
     MÀN 5: ĐẠI HỘI 6 VÙNG (Nhiệm vụ 2)
     ========================================================= */
  function manDaiHoi() {
    const V = ND.vung;
    const max = Math.max(...V.map(v => v.tn2024));
    const nvCuaVung = id => ND.nhanVat.find(n => n.vung === id);

    const bieuDo = V.map(v => {
      const nv = nvCuaVung(v.id);
      return `
      <div class="bd-dong" style="--mau-vung:${v.mau}">
        <div class="bd-ten">${nv ? chanDung(nv, "nho") : `<span class="cham" style="background:${v.mau}"></span>`}<span>${esc(v.ten)}<br><span class="bd-lan">tăng gấp ${lan(v.tn2010, v.tn2024)} lần</span></span></div>
        <div class="bd-cot">
          <div class="bd-thanh y2010" data-w="${(v.tn2010 / max) * 100}" style="width:0">${so(v.tn2010)}</div>
          <div class="bd-thanh y2024" data-w="${(v.tn2024 / max) * 100}" style="width:0;background:${v.mau}">${so(v.tn2024)}</div>
        </div>
      </div>`;
    }).join("");

    const tuyChonVung = `<option value="">— chọn —</option>` + V.map(v => `<option value="${v.id}">${esc(v.ten)}</option>`).join("");
    const sel = (id, opts) => `<select data-cau="${id}">${opts}</select>`;
    const ops = arr => `<option value="">— chọn —</option>` + arr.map(a => `<option value="${esc(a)}">${esc(a)}</option>`).join("");

    $san.innerHTML = `
      <section class="anh-bia" style="margin-bottom:16px">
        <span class="nhan">⭐ Nhiệm vụ 2</span>
        <h1 style="font-size:clamp(28px,6vw,44px)">🏆 Đại hội 6 vùng</h1>
        <p>6 nhân vật gặp nhau và so sánh thu nhập của vùng mình. Hãy đọc biểu đồ, xếp hạng và viết nhận xét về <b>sự phân hoá thu nhập theo vùng</b> ở nước ta.</p>
      </section>

      <article class="the">
        <h2>📊 Thu nhập bình quân đầu người một tháng (giá hiện hành)</h2>
        <p style="margin:0;color:var(--chu-nhat);font-size:14px">Đơn vị: nghìn đồng · Nguồn: ${esc(ND.nguonSoLieu)}</p>
        <div class="chu-giai">
          <span><i style="background:repeating-linear-gradient(45deg,#d9d2c2,#d9d2c2 4px,#e8e2d4 4px,#e8e2d4 8px)"></i>Năm 2010</span>
          <span><i style="background:linear-gradient(90deg,${V.map(v => v.mau).join(",")})"></i>Năm 2024</span>
        </div>
        <div class="bieu-do">${bieuDo}</div>
      </article>

      <article class="the buoc">
        <span class="buoc-so">Thử thách 1</span>
        <h2>Xếp hạng năm 2024</h2>
        <p style="margin-top:0">Bấm lần lượt các vùng theo thứ tự thu nhập năm 2024 <b>từ cao xuống thấp</b>. (Bấm lại để bỏ chọn.)</p>
        <div class="luoi-xep" id="luoi-xep">
          ${V.map(v => `<button class="nut-vung" style="--mau-vung:${v.mau}" data-v="${v.id}">${esc(v.ten)}</button>`).join("")}
        </div>
        <div class="hang-nut"><button class="nut" id="kiem-xep">Kiểm tra</button><button class="nut phu" id="lai-xep">Làm lại</button></div>
        <div id="kq-xep"></div>
      </article>

      <article class="the buoc">
        <span class="buoc-so">Thử thách 2</span>
        <h2>Hoàn thành nhận xét</h2>
        <p style="margin-top:0">Chọn từ thích hợp để hoàn thành bài nhận xét. Có thể dùng máy tính để chia: <i>số năm 2024 ÷ số năm 2010</i>.</p>
        <div class="cau-nx">a) Từ năm 2010 đến năm 2024, thu nhập bình quân đầu người của <b>tất cả</b> các vùng đều ${sel("xuhuong", ops(["tăng", "giảm", "không thay đổi"]))}.</div>
        <div class="cau-nx">b) Vùng có tốc độ tăng nhanh nhất là ${sel("nhanh", tuyChonVung)}, gấp khoảng ${sel("lannhanh", ops(["3,1 lần", "4,1 lần", "5,1 lần"]))}.</div>
        <div class="cau-nx">c) Năm 2024, vùng có thu nhập cao nhất là ${sel("cao", tuyChonVung)}, thấp nhất là ${sel("thap", tuyChonVung)}.</div>
        <div class="cau-nx">d) Năm 2010, vùng có thu nhập thấp nhất lại là ${sel("thap2010", tuyChonVung)}.</div>
        <div class="cau-nx">e) Vùng cao nhất gấp vùng thấp nhất khoảng ${sel("chenh2010", ops(["1,8 lần", "2,4 lần", "3,5 lần"]))} năm 2010 và khoảng ${sel("chenh2024", ops(["1,8 lần", "2,4 lần", "3,5 lần"]))} năm 2024. Như vậy, chênh lệch thu nhập giữa các vùng đang ${sel("xuhuongchenh", ops(["thu hẹp dần", "ngày càng mở rộng"]))}, nhưng vẫn còn khá lớn.</div>
        <div class="hang-nut"><button class="nut" id="kiem-nx">Chấm điểm</button></div>
        <div id="kq-nx"></div>
      </article>

      <div class="hang-nut"><button class="nut phu" data-den="chon">🎭 Chơi nhân vật khác</button></div>
    `;
    ganDieuHuong($san);

    // hoạt hình biểu đồ
    requestAnimationFrame(() => setTimeout(() => {
      $san.querySelectorAll(".bd-thanh").forEach(el => el.style.width = el.dataset.w + "%");
    }, 60));

    /* ---- Thử thách 1: xếp hạng ---- */
    let thuTu = [];
    const veXep = () => {
      $san.querySelectorAll(".nut-vung").forEach(b => {
        const k = thuTu.indexOf(b.dataset.v);
        b.classList.toggle("da-xep", k >= 0);
        const cu = b.querySelector(".thu-tu"); if (cu) cu.remove();
        if (k >= 0) b.insertAdjacentHTML("beforeend", `<span class="thu-tu">${k + 1}</span>`);
      });
    };
    $san.querySelectorAll(".nut-vung").forEach(b => b.onclick = () => {
      const id = b.dataset.v;
      thuTu = thuTu.includes(id) ? thuTu.filter(x => x !== id) : [...thuTu, id];
      veXep();
    });
    document.getElementById("lai-xep").onclick = () => { thuTu = []; veXep(); document.getElementById("kq-xep").innerHTML = ""; };
    document.getElementById("kiem-xep").onclick = () => {
      if (thuTu.length < V.length) return thongBao("Hãy xếp đủ cả 6 vùng nhé!");
      const dung = [...V].sort((a, b) => b.tn2024 - a.tn2024);
      const diem = thuTu.filter((id, i) => dung[i].id === id).length;
      document.getElementById("kq-xep").innerHTML = `
        <p class="diem">${diem === 6 ? "🎉" : "🧐"} Đúng ${diem}/6 vị trí</p>
        <ol>${dung.map(v => `<li><b style="color:${v.mau}">${esc(v.ten)}</b>: ${so(v.tn2024)} nghìn đồng</li>`).join("")}</ol>`;
    };

    /* ---- Thử thách 2: nhận xét ---- */
    const caoNhat = (nam) => [...V].sort((a, b) => b[nam] - a[nam])[0];
    const thapNhat = (nam) => [...V].sort((a, b) => a[nam] - b[nam])[0];
    const nhanhNhat = [...V].sort((a, b) => b.tn2024 / b.tn2010 - a.tn2024 / a.tn2010)[0];
    const c10 = caoNhat("tn2010"), t10 = thapNhat("tn2010"), c24 = caoNhat("tn2024"), t24 = thapNhat("tn2024");
    const dapAn = {
      xuhuong: "tăng",
      nhanh: nhanhNhat.id,
      lannhanh: lan(nhanhNhat.tn2010, nhanhNhat.tn2024) + " lần",
      cao: c24.id,
      thap: t24.id,
      thap2010: t10.id,
      chenh2010: lan(t10.tn2010, c10.tn2010) + " lần",
      chenh2024: lan(t24.tn2024, c24.tn2024) + " lần",
      xuhuongchenh: (c24.tn2024 / t24.tn2024) < (c10.tn2010 / t10.tn2010) ? "thu hẹp dần" : "ngày càng mở rộng"
    };

    document.getElementById("kiem-nx").onclick = () => {
      let d = 0, tong = 0;
      $san.querySelectorAll("select[data-cau]").forEach(s => {
        tong++;
        const ok = s.value === dapAn[s.dataset.cau];
        if (ok) d++;
        s.classList.toggle("dung", ok);
        s.classList.toggle("sai", !ok);
      });
      const kq = document.getElementById("kq-nx");
      kq.innerHTML = `<p class="diem">${d === tong ? "🏆" : "✍️"} ${d}/${tong} ô đúng</p>` + (d === tong ? nhanXetHoanChinh() : `<p>Ô viền đỏ là chưa đúng. Xem lại biểu đồ rồi chọn lại nhé!</p><button class="nut phu" id="xem-dap-an">Xem bài nhận xét mẫu</button>`);
      const xem = document.getElementById("xem-dap-an");
      if (xem) xem.onclick = () => { kq.insertAdjacentHTML("beforeend", nhanXetHoanChinh()); xem.remove(); };
      if (d === tong) thongBao("🏆 Xuất sắc! Bạn đã hoàn thành Nhiệm vụ 2");
    };

    function nhanXetHoanChinh() {
      const tang = [...V].map(v => `${v.ten} gấp ${lan(v.tn2010, v.tn2024)} lần`).join("; ");
      return `
      <div class="nx-hoan-chinh">
        <b>📝 Nhận xét mẫu</b>
        <p><b>1. Sự thay đổi 2010 – 2024:</b> Thu nhập bình quân đầu người một tháng của tất cả các vùng đều tăng nhanh (${tang}). ${esc(nhanhNhat.ten)} tăng nhanh nhất (từ ${so(nhanhNhat.tn2010)} lên ${so(nhanhNhat.tn2024)} nghìn đồng); ${esc(c24.ten)} tăng chậm nhất về số lần nhưng vẫn giữ vị trí cao nhất.</p>
        <p><b>2. Sự phân hoá theo vùng:</b> Năm 2010, cao nhất là ${esc(c10.ten)} (${so(c10.tn2010)} nghìn đồng), thấp nhất là ${esc(t10.ten)} (${so(t10.tn2010)} nghìn đồng), chênh lệch khoảng ${lan(t10.tn2010, c10.tn2010)} lần. Năm 2024, cao nhất vẫn là ${esc(c24.ten)} (${so(c24.tn2024)} nghìn đồng), tiếp theo là Đồng bằng sông Hồng; thấp nhất là ${esc(t24.ten)} (${so(t24.tn2024)} nghìn đồng), chênh lệch khoảng ${lan(t24.tn2024, c24.tn2024)} lần.</p>
        <p><b>3. Kết luận:</b> Thu nhập của người dân ở mọi vùng đều được cải thiện; khoảng cách giữa các vùng đã thu hẹp nhưng vẫn còn rõ rệt. Các vùng có công nghiệp, dịch vụ phát triển, thu hút nhiều vốn đầu tư (Đông Nam Bộ, Đồng bằng sông Hồng) có thu nhập cao; các vùng địa hình khó khăn, kinh tế dựa nhiều vào nông – lâm nghiệp, hay chịu thiên tai (Trung du và miền núi phía Bắc, Duyên hải Nam Trung Bộ và Tây Nguyên) có thu nhập thấp hơn.</p>
      </div>`;
    }
    lenDau();
  }

  /* =========================================================
     MÀN 6: GIÁO VIÊN
     ========================================================= */
  function manGiaoVien() {
    const V = ND.vung;
    const xep = [...V].sort((a, b) => b.tn2024 - a.tn2024).map(v => v.id);
    const dong = (n = 2) => `<div class="dong-ke"></div>`.repeat(n);

    // Phiếu học tập (để in)
    const bangPhieu = V.map(v => `<tr><td>${esc(v.ten)}</td><td>${so(v.tn2010)}</td><td>${so(v.tn2024)}</td><td></td><td></td></tr>`).join("");
    const phieu = `
      <section id="phieu-hoc-tap" class="phieu">
        <h2>PHIẾU HỌC TẬP – BÀI 4</h2>
        <p class="phieu-phu">Thực hành: Tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng · Game "Tuổi 18 – Chọn đường mưu sinh"</p>
        <p>Họ và tên: ……………………………………… Lớp: ………… Nhóm: …………</p>

        <h3>Phần 1. Nhân vật của nhóm em</h3>
        <p>Tên nhân vật: ………………… Vùng: ……………………………………………</p>
        <p>Nghề cuối cùng: ………………………………… Thu nhập cuối game: ………… nghìn đồng/tháng</p>
        <p>Một đặc điểm địa lí của vùng ảnh hưởng đến việc làm của nhân vật:</p>${dong(2)}

        <h3>Phần 2. Xử lí bảng số liệu</h3>
        <p class="phieu-phu">Thu nhập bình quân đầu người một tháng (giá hiện hành) phân theo vùng – đơn vị: nghìn đồng (Bảng 4 SGK)</p>
        <table class="bang">
          <thead><tr><th>Vùng</th><th>2010</th><th>2024</th><th>2024 so với 2010<br>(gấp … lần)</th><th>Xếp hạng<br>năm 2024</th></tr></thead>
          <tbody>${bangPhieu}</tbody>
        </table>

        <h3>Phần 3. Nhận xét sự phân hoá thu nhập theo vùng</h3>
        <p>a) Sự thay đổi thu nhập giai đoạn 2010 – 2024:</p>${dong(2)}
        <p>b) Vùng cao nhất, thấp nhất năm 2010 và năm 2024; chênh lệch bao nhiêu lần:</p>${dong(3)}
        <p>c) Kết luận và giải thích ngắn gọn:</p>${dong(3)}

        <h3>Phần 4. Báo cáo vấn đề việc làm ở địa phương (Hà Nội)</h3>
        <p>Thực trạng:</p>${dong(3)}
        <p>Giải pháp:</p>${dong(3)}
        <p>Ý nghĩa:</p>${dong(2)}
      </section>`;

    // Đáp án bảng số liệu
    const bangDapAn = V.map(v => `<tr><td><b style="color:${v.mau}">${esc(v.ten)}</b></td><td>${so(v.tn2010)}</td><td>${so(v.tn2024)}</td><td>+${so(v.tn2024 - v.tn2010)}</td><td>${lan(v.tn2010, v.tn2024)}</td><td>${xep.indexOf(v.id) + 1}</td></tr>`).join("");

    // Đáp án mọi câu hỏi chặn đường, lấy thẳng từ noi-dung.js
    const cauHoi = ND.nhanVat.map(nv => {
      const ds = [...nv.canh, ...L.danhSachCanh(nv, "thoiCuoc", MR).filter(c => c.dungLai == null)].filter(c => c.loai === "cauHoi");
      if (!ds.length) return "";
      return `<h4>${esc(nv.ten)} · ${esc(VUNG[nv.vung].ten)}</h4><ol>${ds.map(c => `
        <li><b>${esc(c.cauHoi)}</b><br>✅ ${"ABCD"[c.dung]}. ${esc(c.dapAn[c.dung])}<br><span class="nho">${esc(c.giaiThich)}</span></li>`).join("")}</ol>`;
    }).join("");

    const soCanh = ND.nhanVat.reduce((t, n) => t + n.canh.length + L.danhSachCanh(n, "thoiCuoc", MR).length, 0);
    const suKien = Object.values(MR.suKien).sort((a, b) => a.nam - b.nam).map(s => {
      const ai = ND.nhanVat.filter(nv => (MR.thoiCuoc[nv.id] || []).some(c => MR.suKien[c.suKien] === s)).map(nv => nv.ten).join(", ");
      return `<tr><td>${s.nam}</td><td><b>${esc(s.tieuDe)}</b><br><span class="nho">${esc(s.tin)}</span></td><td>${esc(ai)}</td><td><a href="${esc(s.nguon.url)}" target="_blank" rel="noopener">${esc(s.nguon.ten)}</a></td></tr>`;
    }).join("");

    $san.innerHTML = `
      <section class="anh-bia" style="margin-bottom:16px">
        <span class="nhan">👩‍🏫 Dành cho giáo viên</span>
        <h1 style="font-size:clamp(28px,6vw,44px)">Góc giáo viên</h1>
        <p>Gợi ý tổ chức tiết học, phiếu học tập in cho cả lớp và đáp án. Game hiện có ${ND.nhanVat.length} nhân vật, ${soCanh} cảnh.</p>
      </section>

      <article class="the">
        <h2>⏱️ Gợi ý tổ chức tiết học (45 phút)</h2>
        <table class="bang">
          <thead><tr><th>Thời gian</th><th>Hoạt động</th></tr></thead>
          <tbody>
            <tr><td>5 phút</td><td><b>Khởi động.</b> Giới thiệu game, chia lớp thành 6 nhóm, mỗi nhóm nhận một nhân vật (một vùng). Phát phiếu học tập.</td></tr>
            <tr><td>15 phút</td><td><b>Nhập vai.</b> Các nhóm chơi đường của nhân vật mình, thảo luận trước mỗi lựa chọn, ghi Phần 1 của phiếu. Nhóm <b>Minh</b> thu thập phiếu điều tra cho báo cáo Hà Nội.</td></tr>
            <tr><td>10 phút</td><td><b>Đại hội 6 vùng</b> (Nhiệm vụ 2). Mỗi nhóm báo cáo nhanh nghề và thu nhập của nhân vật so với bình quân vùng. Cả lớp làm Thử thách 1–2 trên màn chiếu, hoàn thành Phần 2–3 của phiếu.</td></tr>
            <tr><td>10 phút</td><td><b>Nhiệm vụ 1.</b> Nhóm Minh trình bày báo cáo việc làm Hà Nội; các nhóm khác bổ sung giải pháp. Hoàn thiện Phần 4 (có thể giao về nhà).</td></tr>
            <tr><td>5 phút</td><td><b>Tổng kết.</b> Chốt: thu nhập mọi vùng đều tăng, chênh lệch thu hẹp nhưng còn lớn; phân biệt <i>bình quân đầu người</i> với <i>thu nhập cá nhân</i>, <i>tăng thêm</i> với <i>tăng gấp</i>.</td></tr>
          </tbody>
        </table>
        <p class="ghi-chu" style="margin-top:10px">💡 Nếu chỉ có một máy chiếu: cả lớp cùng chơi một nhân vật, giáo viên cho học sinh giơ tay biểu quyết từng lựa chọn.</p>
      </article>

      <article class="the buoc">
        <h2>📰 Chế độ Thời cuộc 2019–2024</h2>
        <p style="margin-top:0">Chế độ mở rộng cho học sinh muốn tìm hiểu thêm lịch sử – xã hội. Mỗi nhân vật trải qua 3 sự kiện có thật dưới đây; thu nhập nhân vật là số mô phỏng. Chế độ <b>Bài học</b> giữ nguyên bối cảnh kinh tế bình thường, bám sát Bài 4.</p>
        <div class="cuon-ngang"><table class="bang">
          <thead><tr><th>Năm</th><th>Sự kiện</th><th>Nhân vật</th><th>Nguồn</th></tr></thead>
          <tbody>${suKien}</tbody>
        </table></div>
      </article>

      <article class="the buoc">
        <h2>🖨️ Phiếu học tập</h2>
        <p style="margin-top:0">Bấm in để in riêng phiếu (khổ A4, không kèm đáp án). Có thể chọn "Lưu dưới dạng PDF" để gửi qua nhóm lớp.</p>
        <div class="hang-nut"><button class="nut" id="in-phieu">🖨️ In phiếu học tập</button><button class="nut phu" id="xem-phieu">👀 Xem trước</button></div>
        <div id="khung-phieu" hidden>${phieu}</div>
      </article>

      <article class="the buoc">
        <h2>🔑 Đáp án</h2>
        <p style="margin-top:0">Đáp án được ẩn để học sinh không nhìn thấy khi màn hình đang chiếu.</p>
        <div class="hang-nut" style="margin-top:0"><button class="nut toi" id="mo-dap-an">🔓 Hiện đáp án</button></div>
        <div id="dap-an" hidden>
          <h3>Phần 2 – Xử lí bảng số liệu</h3>
          <table class="bang">
            <thead><tr><th>Vùng</th><th>2010</th><th>2024</th><th>Tăng thêm</th><th>Gấp (lần)</th><th>Hạng 2024</th></tr></thead>
            <tbody>${bangDapAn}</tbody>
          </table>
          <h3>Phần 3 – Ý chính cần đạt</h3>
          <ul>
            <li>Giai đoạn 2010 – 2024, thu nhập của <b>tất cả</b> các vùng đều tăng; Bắc Trung Bộ tăng nhanh nhất (≈ 5,1 lần), Đông Nam Bộ tăng chậm nhất về số lần (≈ 3,1 lần) nhưng vẫn cao nhất.</li>
            <li>Năm 2010: cao nhất Đông Nam Bộ (2.212), thấp nhất <b>Bắc Trung Bộ</b> (903), chênh ≈ 2,4 lần.</li>
            <li>Năm 2024: cao nhất Đông Nam Bộ (6.868), thứ hai Đồng bằng sông Hồng (6.480); thấp nhất Trung du và miền núi phía Bắc (3.749), chênh ≈ 1,8 lần.</li>
            <li>Kết luận: đời sống được cải thiện ở mọi vùng; chênh lệch thu hẹp nhưng vẫn rõ. Nguyên nhân: khác nhau về trình độ phát triển công nghiệp – dịch vụ, vốn đầu tư, hạ tầng, chất lượng lao động, điều kiện tự nhiên.</li>
          </ul>
          <h3>Câu hỏi chặn đường trong game</h3>
          ${cauHoi}
          <h3>Thử thách Đại hội 6 vùng</h3>
          <p>Xếp hạng 2024: ${xep.map((id, i) => `${i + 1}. ${esc(VUNG[id].ten)}`).join(" · ")}</p>
        </div>
      </article>

      <article class="the buoc">
        <h2>🧹 Máy dùng chung</h2>
        <p style="margin-top:0">Game lưu tiến độ (nhân vật đã chơi, phiếu điều tra) trên trình duyệt của từng máy. Trước khi lớp sau vào phòng máy, bấm nút dưới để xoá.</p>
        <button class="nut phu" id="xoa-het">🗑️ Xoá toàn bộ tiến độ trên máy này</button>
      </article>
    `;

    const $ = id => document.getElementById(id);
    $("mo-dap-an").onclick = () => {
      const an = $("dap-an").hidden;
      $("dap-an").hidden = !an;
      $("mo-dap-an").textContent = an ? "🔒 Ẩn đáp án" : "🔓 Hiện đáp án";
    };
    $("xem-phieu").onclick = () => {
      const an = $("khung-phieu").hidden;
      $("khung-phieu").hidden = !an;
      $("xem-phieu").textContent = an ? "🙈 Ẩn bản xem trước" : "👀 Xem trước";
    };
    $("in-phieu").onclick = () => {
      document.body.classList.add("dang-in-phieu");
      $("khung-phieu").hidden = false;
      setTimeout(() => window.print(), 50);
    };
    window.onafterprint = () => document.body.classList.remove("dang-in-phieu");
    $("xoa-het").onclick = () => {
      if (!confirm("Xoá toàn bộ tiến độ và phiếu điều tra trên máy này?")) return;
      luu = LUU_TRONG();
      ghiLuu(luu);
      thongBao("🧹 Đã xoá tiến độ");
    };
    lenDau();
  }

  /* =========================================================
     ĐIỀU HƯỚNG
     ========================================================= */
  const MAN = { chon: manChon, baocao: manBaoCao, daihoi: manDaiHoi, giaovien: manGiaoVien, album: manAlbum };
  function den(ten) { (MAN[ten] || manChon)(); }
  function ganDieuHuong(goc) {
    goc.querySelectorAll("[data-den]").forEach(b => b.addEventListener("click", () => den(b.dataset.den)));
  }
  apSkin();
  ganDieuHuong(document.querySelector(".menu"));
  document.getElementById("ve-trang-chu").onclick = () => den("chon");

  manChon();
})();
