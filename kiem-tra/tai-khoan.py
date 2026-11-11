"""
KIỂM TRA TÀI KHOẢN (dùng máy chủ giả lập: index.html?gialap=1)
Chạy:  python3 kiem-tra/tai-khoan.py   (cần Playwright)
Đi trọn các tình huống: đăng ký, nhập sai, kiếm skin, tải lại trang,
đăng xuất, đăng nhập ở "máy khác", chơi thử rồi mới tạo tài khoản,
giáo viên xoá tiến độ trên máy dùng chung.
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

GOC = pathlib.Path(__file__).resolve().parent.parent
URL = (GOC / "index.html").as_uri() + "?gialap=1"
KHO = "gamesangtao-maychu-gialap"
loi = []

def can(dk, mo_ta):
    if not dk:
        loi.append(mo_ta)
    return dk

def trang_moi(b, kho=None):
    ctx = b.new_context(viewport={"width": 375, "height": 760})
    pg = ctx.new_page()
    pg.route("**/fonts.*/**", lambda r: r.abort())
    pg.on("pageerror", lambda e: loi.append(f"lỗi JavaScript: {e}"))
    pg.on("dialog", lambda d: d.accept())
    if kho:  # "máy khác": chỉ mang theo dữ liệu máy chủ, không có bản lưu nào trên máy
        pg.goto(URL.replace("?gialap=1", ""))
        pg.evaluate("([k, v]) => localStorage.setItem(k, v)", [KHO, kho])
    pg.goto(URL)
    pg.wait_for_timeout(150)
    return ctx, pg

def cong_dang_mo(pg):
    return pg.evaluate("(() => { const h = document.getElementById('hop-tk'); return !!h && !h.hidden && !!h.innerHTML; })()")

def dang_ky(pg, ten, mk, mk2=None):
    if not pg.query_selector("#tk-mk2"):
        pg.click("[data-che=dangKy]")
    pg.fill("#tk-ten", ten); pg.fill("#tk-mk", mk); pg.fill("#tk-mk2", mk2 or mk)
    pg.click("#tk-gui"); pg.wait_for_timeout(250)

def dang_nhap(pg, ten, mk):
    if pg.query_selector("#tk-mk2"):
        pg.click("[data-che=dangNhap]")
    pg.fill("#tk-ten", ten); pg.fill("#tk-mk", mk)
    pg.click("#tk-gui"); pg.wait_for_timeout(250)

def choi_bi_mat_ut(pg):
    pg.click(".menu [data-den=chon]"); pg.click("[data-che-do=baiHoc]"); pg.click("[data-nv=ut]"); pg.click("#nut-di")
    for _ in range(30):
        nut = pg.query_selector_all(".luoi-chon .lua-chon:not([disabled])")
        if nut:
            next((x for x in nut for u in ["rừng đước", "bán theo đơn"] if u in x.inner_text()), nut[0]).click()
        t = pg.inner_text("#nut-tiep"); pg.click("#nut-tiep")
        if "hồ sơ" in t.lower():
            break

def ten_nut(pg):
    return pg.inner_text("#nut-tk")

with sync_playwright() as p:
    b = p.chromium.launch()

    # 1. Vào lần đầu: phải hiện cổng đăng nhập, không đóng ngang được
    ctx, pg = trang_moi(b)
    can(cong_dang_mo(pg), "Lần đầu vào không hiện cổng đăng nhập")
    can(not pg.query_selector("#hop-tk .hop-dong"), "Cổng bắt buộc vẫn có nút ✕ đóng")
    can(pg.evaluate("document.scrollingElement.scrollWidth - innerWidth") <= 1, "Cổng đăng nhập tràn ngang trên điện thoại")

    # 2. Đăng ký: mật khẩu nhập lại không khớp → báo lỗi
    dang_ky(pg, "ban_a", "123456", "654321")
    can("chưa khớp" in pg.inner_text("#tk-loi"), "Nhập lại mật khẩu sai nhưng không báo lỗi")
    dang_ky(pg, "ban_a", "123456")
    can(not cong_dang_mo(pg), "Đăng ký xong cổng vẫn mở")
    can("ban_a" in ten_nut(pg), f"Đăng ký xong nút tài khoản không hiện tên (đang: {ten_nut(pg)})")

    # 3. Kiếm skin bí mật rồi mặc
    choi_bi_mat_ut(pg)
    can(pg.query_selector(".bao-bi-mat"), "Không ra kết thúc bí mật của Út")
    pg.click(".bao-bi-mat [data-den=album]"); pg.click(".o-skin[data-skin=halloween]")
    pg.wait_for_timeout(1300)  # chờ đồng bộ

    # 4. Tải lại trang: vẫn đăng nhập, vẫn skin
    pg.reload(); pg.wait_for_timeout(300)
    can("ban_a" in ten_nut(pg), "Tải lại trang thì bị đăng xuất")
    can(pg.evaluate("document.body.dataset.skin") == "halloween", "Tải lại trang thì mất skin")
    kho = pg.evaluate(f"localStorage.getItem('{KHO}')")
    can(kho and "dem-rung-duoc" in kho, "Tiến độ chưa được lưu lên máy chủ")

    # 5. Hồ sơ tài khoản hiện huy chương, đăng xuất → skin về mặc định
    pg.click("#nut-tk")
    can(pg.query_selector(".tk-huy-chuong span"), "Hồ sơ tài khoản không hiện huy chương")
    pg.click("#tk-dang-xuat"); pg.wait_for_timeout(250)
    can(pg.evaluate("document.body.dataset.skin") == "mac-dinh", "Đăng xuất rồi vẫn giữ skin của tài khoản")
    can(cong_dang_mo(pg), "Đăng xuất xong không hiện lại cổng đăng nhập")
    ctx.close()

    # 6. "Máy khác": sai mật khẩu, rồi đăng nhập đúng → lấy lại skin, huy chương
    ctx, pg = trang_moi(b, kho)
    dang_nhap(pg, "ban_a", "sai_mat_khau")
    can("Sai tên đăng nhập hoặc mật khẩu" in pg.inner_text("#tk-loi"), "Sai mật khẩu nhưng không báo lỗi đúng")
    dang_nhap(pg, "ban_a", "123456"); pg.wait_for_timeout(250)
    can(pg.evaluate("document.body.dataset.skin") == "halloween", "Đăng nhập ở máy khác không lấy lại được skin")
    pg.click(".menu [data-den=album]")
    can(pg.query_selector(".huy-hieu-lon.bi-mat.co"), "Đăng nhập ở máy khác không thấy huy chương bí mật")
    can(pg.evaluate("document.scrollingElement.scrollWidth - innerWidth") <= 1, "Thanh menu có nút tài khoản bị tràn ngang")

    # 7. Giáo viên xoá tiến độ trên máy dùng chung: đăng xuất, xoá bản lưu máy, KHÔNG xoá tài khoản
    pg.click(".menu [data-den=giaovien]"); pg.click("#xoa-het"); pg.wait_for_timeout(300)
    con = pg.evaluate("Object.keys(localStorage).filter(k => k.startsWith('gamesangtao-v1'))")
    can(not con, f"Xoá tiến độ nhưng còn sót bản lưu: {con}")
    can("Đăng nhập" in ten_nut(pg), "Xoá tiến độ xong vẫn còn đăng nhập trên máy dùng chung")
    kho2 = pg.evaluate(f"localStorage.getItem('{KHO}')")
    can(kho2 and "dem-rung-duoc" in kho2, "Giáo viên xoá tiến độ làm mất luôn huy chương trong tài khoản!")
    dang_nhap(pg, "ban_a", "123456"); pg.wait_for_timeout(250)
    can(pg.evaluate("document.body.dataset.skin") == "halloween", "Sau khi giáo viên xoá máy, đăng nhập lại không còn skin")
    ctx.close()

    # 8. Trùng tên đăng nhập
    ctx, pg = trang_moi(b, kho2)
    dang_ky(pg, "ban_a", "abcdef")
    can("đã có người dùng" in pg.inner_text("#tk-loi"), "Đăng ký trùng tên nhưng không báo lỗi")
    ctx.close()

    # 9. Chơi thử không tài khoản, rồi mới tạo tài khoản → mang theo tiến độ
    ctx, pg = trang_moi(b, kho2)
    pg.click("#tk-khach")
    can(not cong_dang_mo(pg), "Bấm 'Chơi thử không cần tài khoản' nhưng cổng không đóng")
    choi_bi_mat_ut(pg)
    pg.reload(); pg.wait_for_timeout(200)
    can(not cong_dang_mo(pg), "Đã chọn chơi thử, tải lại trang lại bị hỏi đăng nhập")
    pg.click("#nut-tk"); dang_ky(pg, "ban_b", "123456"); pg.wait_for_timeout(1200)
    kho3 = pg.evaluate(f"localStorage.getItem('{KHO}')")
    can(kho3 and kho3.count("dem-rung-duoc") >= 2, "Tạo tài khoản sau khi chơi thử nhưng không mang theo tiến độ")
    ctx.close()
    b.close()

for l in loi:
    print("  ❌", l)
print(f"\n{'❌' if loi else '✅'} Tài khoản: {len(loi)} lỗi")
sys.exit(1 if loi else 0)
