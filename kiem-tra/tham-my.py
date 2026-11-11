"""
KIỂM TRA THẨM MỸ CÁC SKIN
Chạy:  python3 kiem-tra/tham-my.py  [--anh THU_MUC]   (cần Playwright)
- Đo độ tương phản chữ/nền (chuẩn WCAG: chữ thường ≥ 4.5, chữ lớn ≥ 3)
  của các thành phần chính trên mọi skin, mọi màn hình.
- Với nền dải màu (gradient), lấy điểm màu KÉM nhất để đo.
- --anh: chụp ảnh từng skin để so sánh bằng mắt.
"""
import json, pathlib, sys
from playwright.sync_api import sync_playwright

GOC = pathlib.Path(__file__).resolve().parent.parent
URL = (GOC / "index.html").as_uri()
SKIN = ["mac-dinh", "lua-chin", "pho-co", "bien", "hoa-ban", "chong-dich", "giang-sinh", "halloween"]
THU_MUC_ANH = sys.argv[sys.argv.index("--anh") + 1] if "--anh" in sys.argv else None

# Trạng thái đã mở khoá mọi thứ để vào được mọi màn
LUU = {
    "daChoi": {f"{n}:{c}": {} for n in ["minh", "apao", "lan", "hhen", "tuan", "ut"] for c in ["baiHoc", "thoiCuoc"]},
    "phieu": [{"loai": "thucTrang", "chu": "Phiếu mẫu"}],
    "album": {"thoiCuoc:minh:nguoi-hung": True, "thoiCuoc:hhen:qua-mua-dong": True, "baiHoc:ut:dem-rung-duoc": True,
              "baiHoc:minh:tay-nghe": True},
    "huyHieu": {k: True for k in ["du-6-vung", "thoi-cuoc", "uoc-mo", "suu-tam", "thong-thai"]},
    "uocMo": {"ut": True}, "thongThai": 3, "cheDo": "thoiCuoc", "skin": "mac-dinh", "khung": ""
}

DO_TUONG_PHAN = r"""
(selectors) => {
  const parse = s => [
    ...(s.match(/rgba?\([^)]+\)/g) || []).map(c => c.match(/[\d.]+/g).map(Number)),
    ...(s.match(/color\(srgb[^)]+\)/g) || []).map(c => { const v = c.match(/[\d.]+/g).map(Number); return [v[0] * 255, v[1] * 255, v[2] * 255, v[3] ?? 1]; })
  ];
  const lum = ([r, g, b]) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const tp = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  const tron = (fg, bg) => { const a = fg[3] ?? 1; return [0, 1, 2].map(i => fg[i] * a + bg[i] * (1 - a)); };
  function nen(el) {           // danh sách màu nền có thể nằm sau chữ
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.backgroundImage.includes("url(")) return null;            // nền ảnh: bỏ qua
      const g = parse(cs.backgroundImage).filter(c => (c[3] ?? 1) > .5);
      if (g.length) return g;
      const c = parse(cs.backgroundColor)[0];
      if (c && (c[3] ?? 1) > .5) return [c];
    }
    return [[255, 255, 255]];
  }
  const out = [];
  for (const sel of selectors) {
    const el = [...document.querySelectorAll(sel)].find(e => e.offsetParent && e.textContent.trim());
    if (!el) continue;
    const cs = getComputedStyle(el);
    const ds = nen(el); if (!ds) continue;
    const fg = parse(cs.color)[0];
    const co = parseFloat(cs.fontSize), dam = +cs.fontWeight >= 700;
    const lon = co >= 24 || (co >= 18.66 && dam);
    const min = Math.min(...ds.map(b => tp(tron(fg, b), b)));
    out.push({ sel, tp: +min.toFixed(2), can: lon ? 3 : 4.5, chu: el.textContent.trim().slice(0, 28) });
  }
  return out;
}
"""

MAN = {
    "trang chủ": (None, ["main > h2", ".chan-trang", ".anh-bia h1", ".anh-bia p", ".anh-bia .nhan", ".logo b", ".logo small",
                         ".menu button", ".che-do b", ".che-do span", ".the-nv .vung", ".the-nv h3", ".huy-hieu",
                         ".bang-nv-gon summary small", ".nhiem-vu b", ".nv-so"]),
    "màn chơi": ("choi", [".hud .ten", ".hud .vung", ".hud .nhan", ".hud .so", ".canh-than .mo-ta", ".lua-chon",
                          ".tin-thoi-su b", ".tin-thoi-su small", ".nut", ".chip", ".tam-ly-nghi", ".goc-dia-li"]),
    "hồ sơ": ("hoso", [".ho-so h2", ".nghe", ".ket-thuc h3", ".ket-thuc p", ".uoc-mo", ".chi-so-cuoi span",
                      ".dong-thoi-gian b", ".nam-tg", ".nut", ".nut.phu", ".bao-bi-mat"]),
    "album": ("album", [".anh-bia h1", ".o-skin b", ".o-skin small", ".huy-hieu-lon b", ".album-cd", ".o-album small"]),
}

def vao(pg, man):
    pg.click(".menu [data-den=chon]")
    if man == "album":
        pg.click(".menu [data-den=album]")
    elif man in ("choi", "hoso"):
        pg.click("[data-che-do=thoiCuoc]"); pg.click("[data-nv=minh]"); pg.click("#nut-di")
        pg.click(".lua-chon >> nth=0"); pg.click("#nut-tiep")          # 2019
        pg.click(".lua-chon >> text=tình nguyện")                       # 2021 – biến cố
        if man == "hoso":
            for _ in range(10):
                t = pg.inner_text("#nut-tiep"); pg.click("#nut-tiep")
                if "hồ sơ" in t.lower(): break
                nut = pg.query_selector_all(".luoi-chon .lua-chon:not([disabled])")
                pick = next((b for b in nut if "Đoàn thanh niên" in b.inner_text()), nut[0] if nut else None)
                if pick: pick.click()
    pg.wait_for_timeout(250)

loi, bang = [], {}
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    pg.route("**/fonts.*/**", lambda r: r.abort())
    pg.goto(URL)
    for skin in SKIN:
        LUU["skin"] = skin
        pg.evaluate("s => localStorage.setItem('gamesangtao-v1', s)", json.dumps(LUU))
        pg.reload()
        if pg.evaluate("document.body.dataset.skin") != skin:
            loi.append(f"{skin}: không áp dụng được skin"); continue
        for ten, (man, sels) in MAN.items():
            vao(pg, man)
            pg.evaluate("document.getElementById('thong-bao').classList.remove('hien')")
            for r in pg.evaluate(DO_TUONG_PHAN, sels):
                bang.setdefault((skin, ten), []).append(r)
                if r["tp"] < r["can"]:
                    loi.append(f"{skin:10} | {ten:9} | {r['sel']:28} tương phản {r['tp']:>5} < {r['can']}  («{r['chu']}»)")
            if THU_MUC_ANH:
                pg.screenshot(path=f"{THU_MUC_ANH}/{skin}-{ten.replace(' ', '_')}.png")
    b.close()

for skin in SKIN:
    ds = [r["tp"] for k, v in bang.items() if k[0] == skin for r in v]
    if ds:
        print(f"  · {skin:11} {len(ds):3} chỗ đo · thấp nhất {min(ds):5}")
for l in loi:
    print("  ❌", l)
print(f"\n{'❌' if loi else '✅'} Thẩm mỹ skin: {len(loi)} chỗ chữ khó đọc")
sys.exit(1 if loi else 0)
