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

with sync_playwright() as p:
    b = p.chromium.launch()
    for ten_mh, vp in [("điện thoại", {"width": 375, "height": 760}), ("máy tính", {"width": 1200, "height": 900})]:
        pg = b.new_page(viewport=vp)
        pg.route("**/fonts.*/**", lambda r: r.abort())
        pg.on("pageerror", lambda e, t=ten_mh: loi.append(f"[{t}] lỗi JavaScript: {e}"))
        pg.on("dialog", lambda d: d.accept())
        pg.goto(URL)
        rng = random.Random(18)
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
        pg.close()
    b.close()

for l in loi:
    print("  ❌", l)
print(f"\n{'❌' if loi else '✅'} Chơi thử: {len(loi)} lỗi")
sys.exit(1 if loi else 0)
