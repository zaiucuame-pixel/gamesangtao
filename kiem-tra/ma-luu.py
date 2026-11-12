"""
KIỂM TRA MÃ LƯU GAME (khi chưa bật tài khoản Firebase)
Chạy:  python3 kiem-tra/ma-luu.py   (cần Playwright)
Lấy mã ở máy A → nhập ở máy B, nhập mã sai, mở link #ma=… "đủ đồ".
"""
import pathlib, re, sys
from playwright.sync_api import sync_playwright

GOC = pathlib.Path(__file__).resolve().parent.parent
URL = (GOC / "index.html").as_uri()
MA_DU = re.search(r"GS1-[0-9A-Z-]+", (GOC / "README.md").read_text(encoding="utf-8")).group(0)
loi = []

def can(dk, mo_ta):
    if not dk:
        loi.append(mo_ta)
    return dk

def trang_moi(b, url=URL):
    ctx = b.new_context(viewport={"width": 375, "height": 760})
    pg = ctx.new_page()
    pg.route("**/fonts.*/**", lambda r: r.abort())
    pg.on("pageerror", lambda e: loi.append(f"lỗi JavaScript: {e}"))
    pg.goto(url); pg.wait_for_timeout(150)
    return ctx, pg

def choi_bi_mat_ut(pg):
    pg.click(".menu [data-den=chon]"); pg.click("[data-che-do=baiHoc]"); pg.click("[data-nv=ut]"); pg.click("#nut-di")
    for _ in range(30):
        nut = pg.query_selector_all(".luoi-chon .lua-chon:not([disabled])")
        if nut:
            next((x for x in nut for u in ["rừng đước", "bán theo đơn"] if u in x.inner_text()), nut[0]).click()
        t = pg.inner_text("#nut-tiep"); pg.click("#nut-tiep")
        if "hồ sơ" in t.lower():
            break

tran = lambda pg: pg.evaluate("document.scrollingElement.scrollWidth - innerWidth") > 1

with sync_playwright() as p:
    b = p.chromium.launch()

    # 1. Máy A: không có cổng đăng nhập, nút menu là "Mã lưu"; chơi ra skin bí mật rồi lấy mã
    ctx, pg = trang_moi(b)
    can(not pg.evaluate("!!document.querySelector('#hop-tk:not([hidden])')"), "Chưa bật tài khoản mà vẫn hiện cổng đăng nhập")
    can("Mã lưu" in pg.inner_text("#nut-tk"), f"Nút menu phải là 'Mã lưu' (đang: {pg.inner_text('#nut-tk')})")
    choi_bi_mat_ut(pg)
    pg.click(".bao-bi-mat [data-den=album]"); pg.click(".o-skin[data-skin=halloween]")
    ma = pg.inner_text("#ma-hien").strip()
    can(re.fullmatch(r"GS1(-[0-9A-Z]{1,4})+", ma), f"Mã lưu sai dạng: {ma}")
    can(not tran(pg), "Album có ô mã lưu bị tràn ngang trên điện thoại")
    ctx.close()

    # 2. Máy B: nhập sai → báo lỗi; nhập đúng (chữ thường, có khoảng trắng) → có lại skin + huy chương
    ctx, pg = trang_moi(b)
    pg.click("#nut-tk")
    can(not tran(pg), "Hộp mã lưu tràn ngang trên điện thoại")
    pg.fill("#ma-nhap", ma[:-3] + ("ZZZ" if not ma.endswith("ZZZ") else "000")); pg.click("#ma-form button")
    can(pg.inner_text("#ma-loi").strip(), "Nhập mã sai nhưng không báo lỗi")
    pg.fill("#ma-nhap", "  " + ma.lower().replace("-", " ") + " "); pg.click("#ma-form button"); pg.wait_for_timeout(150)
    can(pg.evaluate("document.body.dataset.skin") == "halloween", "Nhập mã xong không mặc lại skin Halloween")
    pg.click(".menu [data-den=album]")
    can(pg.query_selector(".huy-hieu-lon.bi-mat.co"), "Nhập mã xong không thấy huy chương bí mật")
    pg.reload(); pg.wait_for_timeout(150)
    can(pg.evaluate("document.body.dataset.skin") == "halloween", "Nhập mã rồi tải lại trang thì mất skin")
    ctx.close()

    # 3. Link "đủ đồ": mở hết album, mọi skin, xoá mã khỏi thanh địa chỉ
    ctx, pg = trang_moi(b, URL + "#ma=" + MA_DU)
    can("#ma=" not in pg.url, "Nhập mã từ link xong nhưng mã vẫn nằm trên thanh địa chỉ")
    pg.click(".menu [data-den=album]")
    m = re.search(r"(\d+)/(\d+)", pg.inner_text(".anh-bia"))
    can(m and m.group(1) == m.group(2), f"Mã đủ đồ không mở hết album ({m.group(0) if m else '?'})")
    can(not pg.query_selector(".o-skin[disabled]"), "Mã đủ đồ còn skin bị khoá")
    can(len(pg.query_selector_all(".huy-hieu-lon.co")) == len(pg.query_selector_all(".huy-hieu-lon")), "Mã đủ đồ còn huy hiệu chưa có")
    can(pg.query_selector("#khung-vang:not([disabled])"), "Mã đủ đồ chưa mở khung vàng")
    pg.click(".menu [data-den=baocao]")
    can("chưa có phiếu" not in pg.inner_text("#san-khau"), "Mã đủ đồ chưa có phiếu điều tra cho báo cáo")
    ctx.close()

    # 4. Link mã hỏng: báo lỗi, không làm hỏng trang
    ctx, pg = trang_moi(b, URL + "#ma=GS1-ABCD")
    can("Mã" in pg.inner_text("#thong-bao"), "Link có mã hỏng nhưng không báo")
    ctx.close()
    b.close()

for l in loi:
    print("  ❌", l)
print(f"\n{'❌' if loi else '✅'} Mã lưu: {len(loi)} lỗi")
sys.exit(1 if loi else 0)
