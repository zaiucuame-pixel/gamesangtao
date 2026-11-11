"""
CHƠI THỬ TỰ ĐỘNG TRÊN TRÌNH DUYỆT
Chạy:  python3 kiem-tra/choi-thu.py   (cần Playwright + Chromium)
Bot chơi hết 6 nhân vật × 2 chế độ với nhiều đường ngẫu nhiên, mở mọi màn
phụ, rồi báo lỗi JavaScript, ảnh hỏng, tràn ngang trên điện thoại...
"""
import pathlib, random, sys
from playwright.sync_api import sync_playwright

GOC = pathlib.Path(__file__).resolve().parent.parent
URL = (GOC / "index.html").as_uri()
NV = ["minh", "apao", "lan", "hhen", "tuan", "ut"]
loi = []

def kiem_tran_ngang(pg, ten):
    w = pg.evaluate("document.scrollingElement.scrollWidth - window.innerWidth")
    if w > 1:
        loi.append(f"{ten}: tràn ngang {w}px trên màn hình hẹp")

def kiem_anh(pg, ten):
    hong = pg.evaluate("""[...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map(i => i.getAttribute('src'))""")
    for a in hong:
        loi.append(f"{ten}: ảnh không tải được {a}")

def choi(pg, nv, che_do, rng):
    ten = f"{nv}/{che_do}"
    pg.click(f"[data-che-do={che_do}]")
    pg.click(f"[data-nv={nv}]")
    pg.click("#nut-di")
    for buoc in range(30):
        pg.wait_for_timeout(30)
        kiem_tran_ngang(pg, ten)
        if pg.query_selector("#nut-ghi"):
            pg.click("#nut-ghi")
        else:
            nut = pg.query_selector_all(".luoi-chon .lua-chon:not([disabled])")
            if not nut:
                loi.append(f"{ten}: kẹt ở bước {buoc} – không có nút nào để bấm")
                return
            rng.choice(nut).click()
        if not pg.query_selector(".tam-ly-nghi") and not pg.query_selector(".ket-qua .goc-dia-li"):
            loi.append(f"{ten}: bước {buoc} không hiện suy nghĩ nhân vật hay Góc Địa lí")
        chu = pg.inner_text("#nut-tiep")
        pg.click("#nut-tiep")
        if "hồ sơ" in chu.lower():
            break
    else:
        loi.append(f"{ten}: chơi 30 bước vẫn chưa hết")
        return
    if not pg.query_selector(".ket-thuc"):
        loi.append(f"{ten}: không hiện thẻ kết thúc")
    if che_do == "thoiCuoc" and not pg.query_selector(".dong-thoi-gian"):
        loi.append(f"{ten}: hồ sơ Thời cuộc thiếu dòng thời gian")
    kiem_anh(pg, ten)
    pg.click("#ve-trang-chu")

def choi_bi_mat(pg, nv, che_do, uu_tien, skin, ten):
    """Chơi theo đúng tổ hợp lựa chọn bí mật (ưu tiên các nút chứa chữ trong uu_tien)."""
    pg.click(".menu [data-den=chon]")
    pg.click(f"[data-che-do={che_do}]")
    pg.click(f"[data-nv={nv}]")
    pg.click("#nut-di")
    for _ in range(30):
        if pg.query_selector("#nut-ghi"):
            pg.click("#nut-ghi")
        else:
            nut = pg.query_selector_all(".luoi-chon .lua-chon:not([disabled])")
            chon = next((b for b in nut for u in uu_tien if u in b.inner_text()), nut[0])
            chon.click()
        chu = pg.inner_text("#nut-tiep"); pg.click("#nut-tiep")
        if "hồ sơ" in chu.lower():
            break
    if not pg.query_selector(".bao-bi-mat"):
        loi.append(f"{ten}: đi đúng đường bí mật nhưng không ra kết thúc bí mật")
        return
    pg.click(".bao-bi-mat [data-den=album]")
    if not pg.query_selector(f".o-skin[data-skin={skin}]:not([disabled])"):
        loi.append(f"{ten}: tìm ra bí mật nhưng skin {skin} vẫn khoá")
    else:
        pg.click(f".o-skin[data-skin={skin}]")
        if pg.evaluate("document.body.dataset.skin") != skin:
            loi.append(f"{ten}: bấm skin {skin} nhưng giao diện không đổi")
        kiem_tran_ngang(pg, f"{ten} – Tủ đồ với skin {skin}")

with sync_playwright() as p:
    b = p.chromium.launch()
    for ten_mh, vp in [("điện thoại", {"width": 375, "height": 760}), ("máy tính", {"width": 1200, "height": 900})]:
        pg = b.new_page(viewport=vp)
        pg.route("**/fonts.*/**", lambda r: r.abort())
        pg.on("pageerror", lambda e, t=ten_mh: loi.append(f"[{t}] lỗi JavaScript: {e}"))
        pg.on("dialog", lambda d: d.accept())
        pg.goto(URL)
        rng = random.Random(18)
        # lúc mới vào: skin phải đang khoá
        pg.click(".menu [data-den=album]")
        if pg.query_selector(".o-skin[data-skin=lua-chin]:not([disabled])"):
            loi.append(f"[{ten_mh}] skin Đồng lúa chín mở sẵn khi chưa chơi")
        pg.click(".menu [data-den=chon]")
        lan = 3 if ten_mh == "điện thoại" else 1
        for che_do in ["baiHoc", "thoiCuoc"]:
            for nv in NV:
                for _ in range(lan):
                    choi(pg, nv, che_do, rng)
        # màn phụ
        for den in ["album", "baocao", "daihoi", "giaovien", "chon"]:
            pg.click(f".menu [data-den={den}]")
            pg.wait_for_timeout(200)
            kiem_tran_ngang(pg, f"[{ten_mh}] màn {den}")
            kiem_anh(pg, f"[{ten_mh}] màn {den}")
        pg.click(".menu [data-den=album]")
        so = pg.eval_on_selector_all(".o-album.mo", "e => e.length")
        if so < 6:
            loi.append(f"[{ten_mh}] album chỉ mở {so} kết thúc sau khi chơi hết – có thể không lưu")
        print(f"  · {ten_mh}: album mở {so} kết thúc")
        # nhiệm vụ 6/6 phải hoàn thành và trao skin
        for nvu, skin in [("Đi đủ 6 vùng", "lua-chin"), ("Nhân chứng thời cuộc", "pho-co")]:
            if not pg.query_selector(f".nhiem-vu.xong:has-text('{nvu}')"):
                loi.append(f"[{ten_mh}] chơi đủ 6/6 nhưng nhiệm vụ '{nvu}' chưa hoàn thành")
            if not pg.query_selector(f".o-skin[data-skin={skin}]:not([disabled])"):
                loi.append(f"[{ten_mh}] nhiệm vụ '{nvu}' xong nhưng skin {skin} vẫn khoá")
        # 3 kết thúc bí mật
        choi_bi_mat(pg, "minh", "thoiCuoc", ["tình nguyện", "Đoàn thanh niên"], "chong-dich", f"[{ten_mh}] bí mật Minh")
        choi_bi_mat(pg, "hhen", "thoiCuoc", ["máy sấy", "nhóm sản xuất"], "giang-sinh", f"[{ten_mh}] bí mật H'Hen")
        choi_bi_mat(pg, "ut", "baiHoc", ["rừng đước", "bán theo đơn"], "halloween", f"[{ten_mh}] bí mật Út")
        pg.click(".menu [data-den=chon]")
        mau = pg.evaluate("getComputedStyle(document.querySelector('main > h2')).color")
        if mau.startswith("rgb(29, 36, 64)"):
            loi.append(f"[{ten_mh}] skin Halloween (tối) nhưng tiêu đề vẫn chữ tối – khó đọc")
        if not pg.query_selector(".nhiem-vu.xong:has-text('Thợ săn bí mật')"):
            loi.append(f"[{ten_mh}] tìm đủ 3 bí mật nhưng nhiệm vụ Thợ săn bí mật chưa xong")
        pg.click(".menu [data-den=album]")
        pg.click(".o-skin[data-skin=pho-co]")
        pg.reload()
        if pg.evaluate("document.body.dataset.skin") != "pho-co":
            loi.append(f"[{ten_mh}] đổi skin xong tải lại trang thì mất")
        for den in ["chon", "album", "giaovien"]:
            pg.click(f".menu [data-den={den}]")
            kiem_tran_ngang(pg, f"[{ten_mh}] skin Phố cổ – màn {den}")
        pg.click(".menu [data-den=chon]")
        mau = pg.evaluate("getComputedStyle(document.querySelector('main > h2')).color")
        if mau.startswith("rgb(29, 36, 64)"):
            loi.append(f"[{ten_mh}] skin tối nhưng tiêu đề vẫn chữ tối – khó đọc")
        pg.close()
    b.close()

for l in loi:
    print("  ❌", l)
print(f"\n{'❌' if loi else '✅'} Chơi thử: {len(loi)} lỗi")
sys.exit(1 if loi else 0)
