/* =========================================================
   BỘ KIỂM TRA NỘI DUNG & LOGIC – "Tuổi 18 – Chọn đường mưu sinh"
   Chạy:  node kiem-tra/kiem-tra.js
   Không cần cài thêm gì. Lỗi (❌) làm bộ kiểm tra thất bại,
   cảnh báo (⚠️) chỉ để người làm xem lại.
   ========================================================= */
"use strict";
const fs = require("fs");
const path = require("path");
const GOC = path.join(__dirname, "..");

/* ---------- nạp nội dung giống như trình duyệt ---------- */
global.window = {};
for (const f of ["noi-dung.js", "mo-rong.js"]) {
  const p = path.join(GOC, f);
  if (!fs.existsSync(p)) { console.log(`❌ Thiếu file ${f}`); process.exit(1); }
  eval(fs.readFileSync(p, "utf8"));
}
const L = require(path.join(GOC, "logic.js"));
const ND = window.NOI_DUNG, MR = window.MO_RONG;

let soLoi = 0, soCanhBao = 0;
const loi = m => { soLoi++; console.log("  ❌ " + m); };
const canhBao = m => { soCanhBao++; console.log("  ⚠️  " + m); };
const nhom = t => console.log("\n▶ " + t);

/* =========================================================
   SỰ THẬT ĐÃ KIỂM CHỨNG (nguồn gốc độc lập với nội dung game)
   Mỗi sự kiện trong game phải khớp năm, vùng và nguồn ở đây.
   ========================================================= */
const SU_THAT = {
  "covid-du-lich-ha-giang-2021": { nam: 2021, vung: ["TDMN"],
    url: "https://en.vietstock.vn/2021/07/ha-giang-tourism-businesses-seeking-measures-to-survive-974-449460.htm",
    phaiCo: ["642", "38"] },                       // 642.000 khách, 38%
  "goi-ho-tro-26000-ty-2021": { nam: 2021, vung: ["DBSH", "DNB", "TDMN", "BTB", "NTBTN", "DBSCL"],
    url: "https://vneconomy.vn/26-000-ty-dong-giup-dan-chong-dich-covid-19.htm",
    phaiCo: ["26.000", "68"] },
  "ba-tai-cho-binh-duong-2021": { nam: 2021, vung: ["DNB"],
    url: "https://vnexpress.net/bi-hai-chuyen-3-tai-cho-4362844.html",
    phaiCo: ["3 tại chỗ", "3.700"] },
  "lao-dong-hoi-huong-2021": { nam: 2021, vung: ["BTB", "DBSCL", "NTBTN", "TDMN"],
    url: "https://viettimes.vn/con-bao-13-trieu-lao-dong-hoi-huong-som-khien-dong-co-thieu-nhien-lieu-post151458.html",
    phaiCo: ["1,3 triệu"] },
  "phan-bon-tang-gia-2021": { nam: 2021, vung: ["NTBTN", "DBSCL", "TDMN"],
    url: "https://vnexpress.net/bo-ruong-vi-gia-phan-4403734.html",
    phaiCo: ["80%"] },
  "xang-dau-ky-luc-2022": { nam: 2022, vung: ["TDMN", "DBSH", "BTB", "NTBTN", "DNB", "DBSCL"],
    url: "https://lsvn.vn/gia-xang-tang-len-gan-33000-dong-mot-lit1655811816-a120277.html",
    phaiCo: ["32.873"] },
  "cat-giam-lao-dong-2022": { nam: 2022, vung: ["DNB"],
    url: "https://vnexpress.net/lan-song-cat-giam-lao-dong-4535087.html",
    phaiCo: ["631.300"] },
  "mat-viec-nua-dau-2023": { nam: 2023, vung: ["DNB"],
    url: "https://www.rfa.org/vietnamese/news/vietnamnews/over-500000-lost-job-or-not-having-enough-working-hrs-in-first-6-months-of-2023-06152023081536.html",
    phaiCo: ["71.590"] },
  "xuat-khau-lao-dong-nghe-an-2024": { nam: 2024, vung: ["BTB"],
    url: "https://vneconomy.vn/hai-nam-nghe-an-xuat-khau-hon-46-000-lao-dong.htm",
    phaiCo: ["46.157"] },
  "xam-nhap-man-2020": { nam: 2020, vung: ["DBSCL"],
    url: "https://tuoitre.vn/xam-man-cao-hon-2016-nhung-giam-bot-thiet-hai-nho-chu-dong-2020062013335609.htm",
    phaiCo: ["2016"] },
  "han-han-ca-mau-2024": { nam: 2024, vung: ["DBSCL"],
    url: "https://voh.com.vn/xa-hoi/ca-mau-cong-bo-tinh-huong-khan-cap-han-han-cap-2-523456.html",
    phaiCo: ["khẩn cấp"] },
  "han-han-dak-lak-2024": { nam: 2024, vung: ["NTBTN"],
    url: "https://nhandan.vn/han-tren-dien-rong-cuoi-mua-kho-o-dak-lak-post809195.html",
    phaiCo: ["5.100"] },
  "ca-phe-ky-luc-2024": { nam: 2024, vung: ["NTBTN"],
    url: "https://tuoitre.vn/gia-ca-phe-cao-chua-tung-thay-khi-vao-chinh-vu-nong-dan-thanh-dai-gia-2024112610524167.htm",
    phaiCo: ["120.000"] },
  "bao-yagi-2024": { nam: 2024, vung: ["TDMN", "DBSH"],
    url: "https://vtcnews.vn/344-nguoi-chet-va-mat-tich-thiet-hai-kinh-te-hon-81-000-ty-dong-do-bao-yagi-ar898721.html",
    phaiCo: ["344", "81.503"] }
};

/* Từ khoá chỉ được phép xuất hiện từ năm nào trở đi (chống "lệch thời gian") */
const TU_KHOA_THOI_GIAN = [
  { re: /covid|đại dịch|giãn cách/i, tu: 2020 },
  { re: /làn sóng (dịch )?thứ tư|delta|3 tại chỗ|26\.000 tỷ/i, tu: 2021 },
  { re: /yagi|bão số 3/i, tu: 2024 }
];
/* Chế độ Bài học = kinh tế bình thường: không được nhắc tới các biến cố này */
const CAM_TRONG_BAI_HOC = /covid|đại dịch|giãn cách|yagi|bão số 3|3 tại chỗ|lạm phát/i;
/* Câu chữ thừa, dấu vết bản nháp */
const CAU_THUA = /trong (tình huống|lời mời|đợt tuyển) này|lorem|todo|undefined|null|\[tên\]|\.\.\.\./i;

const SGK = { TDMN: [907, 3749], DBSH: [1561, 6480], BTB: [903, 4630], NTBTN: [1127, 4360], DNB: [2212, 6868], DBSCL: [1243, 4770] };
const KHOA_HIEU_UNG = ["thuNhap", "tayNghe", "gan", "tamTrang"];
const TRUONG_TRUYEN = ["moTa", "ketQua", "chu", "tin", "suyNghi", "tieuDe", "cauHoi"];

/* =========================================================
   1. SỐ LIỆU SGK
   ========================================================= */
nhom("1. Số liệu Bảng 4 SGK");
for (const [id, [a, b]] of Object.entries(SGK)) {
  const v = ND.vung.find(x => x.id === id);
  if (!v) { loi(`Thiếu vùng ${id}`); continue; }
  if (v.tn2010 !== a || v.tn2024 !== b) loi(`${v.ten}: ${v.tn2010}/${v.tn2024}, SGK là ${a}/${b}`);
}
if (ND.vung.length !== 6) loi(`Có ${ND.vung.length} vùng, phải là 6`);

/* =========================================================
   2. CẤU TRÚC TỪNG CẢNH (cả 2 chế độ)
   ========================================================= */
nhom("2. Cấu trúc cảnh, lựa chọn, câu hỏi");
function kiemCanh(c, ten) {
  if (!["chon", "cauHoi", "tin", "bienCo"].includes(c.loai)) return loi(`${ten}: loại cảnh lạ "${c.loai}"`);
  if (!c.tieuDe) loi(`${ten}: thiếu tiêu đề`);
  if (c.loai === "chon" || c.loai === "bienCo") {
    if (!Array.isArray(c.luaChon) || c.luaChon.length < 2 || c.luaChon.length > 3) loi(`${ten}: cần 2–3 lựa chọn`);
    (c.luaChon || []).forEach((l, i) => {
      if (!l.chu || !l.ketQua) loi(`${ten} – lựa chọn ${i + 1}: thiếu chữ hoặc kết quả`);
      const hu = l.hieuUng || {};
      for (const k of Object.keys(hu)) if (!KHOA_HIEU_UNG.includes(k)) loi(`${ten} – lựa chọn ${i + 1}: hiệu ứng lạ "${k}"`);
      if (hu.thuNhap != null && (hu.thuNhap < -3000 || hu.thuNhap > 10000)) loi(`${ten} – lựa chọn ${i + 1}: thu nhập ${hu.thuNhap} vô lý`);
      for (const k of ["tayNghe", "gan", "tamTrang"]) if (hu[k] != null && Math.abs(hu[k]) > 20) loi(`${ten} – lựa chọn ${i + 1}: ${k} ${hu[k]} vượt ±20`);
    });
  }
  if (c.loai === "cauHoi") {
    if (!Array.isArray(c.dapAn) || c.dapAn.length !== 4) loi(`${ten}: câu hỏi cần đúng 4 đáp án`);
    if (!(c.dung >= 0 && c.dung < (c.dapAn || []).length)) loi(`${ten}: chỉ số đáp án đúng sai`);
    if (!c.giaiThich) loi(`${ten}: thiếu giải thích`);
    if (new Set(c.dapAn).size !== (c.dapAn || []).length) loi(`${ten}: có đáp án trùng nhau`);
  }
  if (c.loai === "bienCo" && !c.suKien) loi(`${ten}: biến cố chưa gắn sự kiện`);
}
const CHE_DO = ["baiHoc", "thoiCuoc"];
for (const nv of ND.nhanVat) for (const cd of CHE_DO) {
  const ds = L.danhSachCanh(nv, cd, MR);
  if (!ds.length) { loi(`${nv.ten} (${cd}): không có cảnh nào`); continue; }
  ds.forEach((c, i) => kiemCanh(c, `${nv.ten} [${cd} #${i + 1}]`));
}

/* =========================================================
   3. TÂM LÝ NHÂN VẬT
   ========================================================= */
nhom("3. Tâm lý nhân vật");
for (const nv of ND.nhanVat) {
  const t = MR.tamLy[nv.id];
  if (!t) { loi(`${nv.ten}: chưa có tâm lý`); continue; }
  for (const k of ["hoanCanh", "uocMo", "noiLo", "coiTrong", "suyNghi"]) if (!t[k]) loi(`${nv.ten}: thiếu ${k}`);
  const tong = Object.values(t.coiTrong || {}).reduce((a, b) => a + b, 0);
  if (Math.abs(tong - 1) > 0.01) loi(`${nv.ten}: trọng số "coi trọng" cộng lại phải bằng 1 (đang ${tong})`);
  for (const k of ["vui", "buon", "binhThuong"]) if (!(t.suyNghi?.[k]?.length >= 2)) loi(`${nv.ten}: cần ≥2 câu suy nghĩ "${k}"`);
  if (!t.uocMo?.dieuKien) loi(`${nv.ten}: ước mơ chưa có điều kiện thành hiện thực`);
}
// tâm lý gắn hoàn cảnh, không gán cho cả vùng/dân tộc
const RAP_KHUON = /người (mông|ê đê|miền núi|miền tây|miền trung|nghệ an|bình dương)\w* (thường|vốn|hay|luôn)/i;
for (const [id, t] of Object.entries(MR.tamLy)) if (RAP_KHUON.test(JSON.stringify(t))) loi(`${id}: tâm lý có câu khái quát hoá cả một vùng/dân tộc`);

/* =========================================================
   4. CHẾ ĐỘ THỜI CUỘC: SỰ THẬT & THỜI GIAN
   ========================================================= */
nhom("4. Chế độ Thời cuộc – đúng năm, đúng vùng, có nguồn");
for (const [id, s] of Object.entries(MR.suKien)) {
  const g = SU_THAT[id];
  if (!g) { loi(`Sự kiện "${id}" chưa có trong danh sách đã kiểm chứng`); continue; }
  if (s.nam !== g.nam) loi(`Sự kiện ${id}: ghi năm ${s.nam}, thực tế ${g.nam}`);
  if (!s.nguon || s.nguon.url !== g.url) loi(`Sự kiện ${id}: nguồn không khớp nguồn đã kiểm chứng`);
  if (!s.nguon?.ten) loi(`Sự kiện ${id}: thiếu tên nguồn`);
  for (const x of g.phaiCo) if (!s.tin.includes(x)) loi(`Sự kiện ${id}: tin phải nêu đúng con số/chi tiết "${x}"`);
}
for (const nv of ND.nhanVat) {
  const ds = L.danhSachCanh(nv, "thoiCuoc", MR);
  const bc = ds.filter(c => c.loai === "bienCo");
  if (bc.length !== 3) loi(`${nv.ten}: cần đúng 3 năm biến cố (đang ${bc.length})`);
  const namBc = bc.map(c => c.nam);
  if (new Set(namBc).size !== namBc.length) loi(`${nv.ten}: 3 biến cố phải ở 3 năm khác nhau (${namBc.join(", ")})`);
  if (ds[0]?.nam !== 2019) loi(`${nv.ten}: Thời cuộc phải bắt đầu năm 2019`);
  if (ds[ds.length - 1]?.nam !== 2024) loi(`${nv.ten}: Thời cuộc phải kết thúc năm 2024`);
  ds.forEach((c, i) => {
    if (!(c.nam >= 2019 && c.nam <= 2024)) loi(`${nv.ten} #${i + 1}: năm ${c.nam} ngoài 2019–2024`);
    if (i && c.nam < ds[i - 1].nam) loi(`${nv.ten} #${i + 1}: năm đi lùi (${ds[i - 1].nam} → ${c.nam})`);
  });
  for (const c of bc) {
    const s = MR.suKien[c.suKien], g = SU_THAT[c.suKien];
    if (!s) { loi(`${nv.ten}: biến cố gắn sự kiện không tồn tại "${c.suKien}"`); continue; }
    if (c.nam !== s.nam) loi(`${nv.ten}: cảnh năm ${c.nam} nhưng sự kiện "${c.suKien}" năm ${s.nam}`);
    if (g && !g.vung.includes(nv.vung)) loi(`${nv.ten}: sự kiện "${c.suKien}" không xảy ra/không phù hợp với vùng ${nv.vung}`);
    const coKho = c.luaChon.some(l => (l.hieuUng.thuNhap || 0) < 0 || (l.hieuUng.tamTrang || 0) < 0);
    if (!s.tichCuc && !coKho) loi(`${nv.ten} – ${c.tieuDe}: biến cố tiêu cực nhưng không lựa chọn nào bị thiệt`);
  }
}

nhom("5. Chống lệch thời gian");
function chuoiTruyen(c) {
  const out = [];
  for (const k of TRUONG_TRUYEN) if (typeof c[k] === "string") out.push(c[k]);
  (c.luaChon || []).forEach(l => { out.push(l.chu, l.ketQua); if (l.suyNghi) out.push(l.suyNghi); });
  if (c.suKien && MR.suKien[c.suKien]) out.push(MR.suKien[c.suKien].tin);
  if (c.moTaTheo) out.push(...Object.values(c.moTaTheo));
  return out.filter(Boolean);
}
for (const nv of ND.nhanVat) {
  for (const c of L.danhSachCanh(nv, "thoiCuoc", MR)) for (const s of chuoiTruyen(c)) {
    for (const m of s.matchAll(/\b(20[12]\d)\b/g)) if (+m[1] > c.nam) loi(`${nv.ten} năm ${c.nam}: nhắc tới năm ${m[1]} chưa xảy ra – "${s.slice(0, 60)}…"`);
    for (const t of TU_KHOA_THOI_GIAN) if (t.re.test(s) && c.nam < t.tu) loi(`${nv.ten} năm ${c.nam}: nhắc "${s.match(t.re)[0]}" trước năm ${t.tu}`);
  }
  for (const c of nv.canh) for (const s of chuoiTruyen(c)) if (CAM_TRONG_BAI_HOC.test(s)) loi(`${nv.ten} (Bài học): nhắc biến cố "${s.match(CAM_TRONG_BAI_HOC)[0]}" – chế độ này là kinh tế bình thường`);
}

/* =========================================================
   6. VĂN BẢN
   ========================================================= */
nhom("6. Câu chữ");
function duyetChuoi(o, ten, fn) {
  if (typeof o === "string") return fn(o, ten);
  if (Array.isArray(o)) return o.forEach((x, i) => duyetChuoi(x, `${ten}[${i}]`, fn));
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) duyetChuoi(v, `${ten}.${k}`, fn);
}
duyetChuoi({ ND, MR }, "", (s, ten) => {
  if (CAU_THUA.test(s)) loi(`${ten}: còn câu thừa/bản nháp "${s.match(CAU_THUA)[0]}"`);
  if (s !== s.trim()) canhBao(`${ten}: thừa khoảng trắng đầu/cuối`);
  if (/ {2,}/.test(s)) canhBao(`${ten}: hai dấu cách liền nhau`);
});

/* =========================================================
   7. ẢNH
   ========================================================= */
nhom("7. Ảnh có tồn tại");
const anh = new Set();
for (const nv of ND.nhanVat) { anh.add(nv.anh); anh.add(nv.nen); nv.canh.forEach(c => c.anh && anh.add(c.anh.src)); }
for (const ds of Object.values(MR.thoiCuoc)) ds.forEach(c => c.anh && anh.add(c.anh.src));
for (const a of anh) if (a && !fs.existsSync(path.join(GOC, a))) loi(`Thiếu ảnh ${a}`);

/* =========================================================
   8. LỰA CHỌN HIỂN NHIÊN (một lựa chọn hơn hẳn mọi mặt)
   ========================================================= */
nhom("8. Không có lựa chọn 'hiển nhiên'");
for (const nv of ND.nhanVat) for (const cd of CHE_DO) for (const c of L.danhSachCanh(nv, cd, MR)) {
  if (!c.luaChon) continue;
  const vec = c.luaChon.map(l => {
    const h = l.hieuUng || {};
    return [h.thuNhap || 0, h.tayNghe || 0, h.gan || 0, L.tamTrangDoi(nv, h, MR)];
  });
  vec.forEach((a, i) => vec.forEach((b, j) => {
    if (i === j) return;
    const hon = a.every((x, k) => x >= b[k]) && a.some((x, k) => x > b[k]);
    if (hon) loi(`${nv.ten} (${cd}) – "${c.tieuDe}": "${c.luaChon[i].chu}" hơn hẳn "${c.luaChon[j].chu}" ở mọi mặt`);
  }));
}

/* =========================================================
   9. MÔ PHỎNG MỌI ĐƯỜNG CHƠI
   ========================================================= */
nhom("9. Mô phỏng mọi đường chơi");
const ketThucDat = new Set();
const tiLeKt = {};
for (const nv of ND.nhanVat) {
  const v = ND.vung.find(x => x.id === nv.vung);
  for (const cd of CHE_DO) {
    const ds = L.danhSachCanh(nv, cd, MR);
    const kt = new Map(); let soDuong = 0, min = Infinity, max = -Infinity;
    const phieu = new Set();
    (function di(i, tt, ph) {
      if (i === ds.length) {
        soDuong++;
        for (const k of ["thuNhap", "tayNghe", "gan", "tamTrang"]) if (!Number.isFinite(tt[k])) loi(`${nv.ten} (${cd}): chỉ số ${k} không phải số`);
        for (const k of ["tayNghe", "gan", "tamTrang"]) if (tt[k] < 0 || tt[k] > 100) loi(`${nv.ten} (${cd}): ${k}=${tt[k]} ngoài 0–100`);
        min = Math.min(min, tt.thuNhap); max = Math.max(max, tt.thuNhap);
        const k = L.ketThuc(tt, nv, v, cd, MR);
        if (!k) loi(`${nv.ten} (${cd}): không tìm được kết thúc`);
        else { kt.set(k.id, (kt.get(k.id) || 0) + 1); ketThucDat.add(k.id); }
        ph.forEach(p => phieu.add(p));
        return;
      }
      const c = ds[i];
      const them = x => (x ? [x.loai] : []);
      if (c.loai === "chon" || c.loai === "bienCo") c.luaChon.forEach(l => {
        const t2 = { ...tt }; L.apDung(t2, nv, l.hieuUng, MR, l.dat);
        di(i + 1, t2, [...ph, ...them(c.phieu), ...them(l.phieuThem)]);
      });
      else if (c.loai === "cauHoi") {
        const t2 = { ...tt }; L.apDung(t2, nv, c.thuong, MR); di(i + 1, t2, [...ph, ...them(c.phieu)]);
        di(i + 1, { ...tt }, [...ph, ...them(c.phieu)]);
      } else di(i + 1, tt, [...ph, ...them(c.phieu)]);
    })(0, L.trangThaiDau(nv, MR), []);

    tiLeKt[nv.id + ":" + cd] = { kt, soDuong };
    const ds_kt = [...kt.entries()].map(([k, n]) => `${k} ${Math.round(n / soDuong * 100)}%`).join(", ");
    console.log(`  · ${nv.ten.padEnd(6)} ${cd.padEnd(8)} ${String(soDuong).padStart(4)} đường | thu nhập cuối ${min}–${max} | ${ds_kt}`);
    if (min < 0) loi(`${nv.ten} (${cd}): thu nhập âm`);
    if (max > 4 * v.tn2024) loi(`${nv.ten} (${cd}): thu nhập cao nhất ${max} > 4 lần bình quân vùng – vô lý`);
    if (max < v.tn2024) canhBao(`${nv.ten} (${cd}): không đường nào vượt được bình quân vùng (${v.tn2024})`);
    if (kt.size < 3) loi(`${nv.ten} (${cd}): chỉ có ${kt.size} kết thúc – chơi lại sẽ nhàm`);
    for (const [k, n] of kt) if (n / soDuong > 0.7) canhBao(`${nv.ten} (${cd}): kết thúc "${k}" chiếm ${Math.round(n / soDuong * 100)}% số đường`);
    if (nv.chinh) for (const lp of ["thucTrang", "giaiPhap", "yNghia"]) if (!phieu.has(lp)) loi(`Minh (${cd}): không thu được phiếu "${lp}" cho báo cáo`);
  }
}
for (const k of MR.ketThuc) if (!ketThucDat.has(k.id)) loi(`Kết thúc "${k.tieuDe}" không đường nào đạt được`);

/* =========================================================
   10. KẾT THÚC BÍ MẬT
   ========================================================= */
nhom("10. Kết thúc bí mật");
for (const k of MR.ketThuc.filter(x => x.biMat)) {
  const dk = k.dieuKien || {};
  if (!k.skin || !k.goiY) loi(`Bí mật "${k.tieuDe}": thiếu skin thưởng hoặc gợi ý`);
  if (!dk.nv || !dk.cheDo || !(dk.co || []).length) { loi(`Bí mật "${k.tieuDe}": phải gắn với 1 nhân vật, 1 chế độ và dấu lựa chọn`); continue; }
  const nv = ND.nhanVat.find(n => n.id === dk.nv);
  if (!nv) { loi(`Bí mật "${k.tieuDe}": không có nhân vật ${dk.nv}`); continue; }
  const coDau = new Set(L.danhSachCanh(nv, dk.cheDo, MR).flatMap(c => (c.luaChon || []).map(l => l.dat).filter(Boolean)));
  for (const f of dk.co) if (!coDau.has(f)) loi(`Bí mật "${k.tieuDe}": dấu "${f}" không có lựa chọn nào của ${nv.ten} (${dk.cheDo}) gắn – sai chính tả?`);
  const t = tiLeKt[dk.nv + ":" + dk.cheDo], n = t.kt.get(k.id) || 0, pt = Math.round(n / t.soDuong * 100);
  console.log(`  · ${k.icon} ${k.tieuDe}: ${pt}% số đường chơi của ${nv.ten} (${dk.cheDo})`);
  if (!n) loi(`Bí mật "${k.tieuDe}": không đường nào đạt được`);
  if (pt > 20) loi(`Bí mật "${k.tieuDe}": chiếm ${pt}% – quá dễ, không còn là bất ngờ`);
  if (k !== MR.ketThuc[MR.ketThuc.indexOf(k)] || MR.ketThuc.findIndex(x => !x.biMat) < MR.ketThuc.indexOf(k)) loi(`Bí mật "${k.tieuDe}": phải đặt trước các kết thúc thường`);
}
const skinBiMat = MR.ketThuc.filter(x => x.biMat).map(x => x.skin);
if (new Set(skinBiMat).size !== skinBiMat.length) loi("Hai kết thúc bí mật trùng skin thưởng");

/* ---------- tổng kết ---------- */
console.log(`\n${soLoi ? "❌" : "✅"} ${soLoi} lỗi, ${soCanhBao} cảnh báo`);
process.exit(soLoi ? 1 : 0);
