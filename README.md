# 🧭 Tuổi 18 – Chọn đường mưu sinh

Game nhập vai cho **Địa lí 9 – Bài 4: Thực hành tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng** (Lịch sử và Địa lí 9, Kết nối tri thức).

Người chơi sống thử 6 năm cuộc đời của một bạn 18 tuổi ở một trong 6 vùng kinh tế, mỗi năm chọn một ngã rẽ về việc làm.

- **Nhiệm vụ 1 – Việc làm ở Hà Nội:** đi đường của Minh, thu thập 📋 phiếu điều tra, game tự ghép thành báo cáo (thực trạng – giải pháp – ý nghĩa), in hoặc sao chép được.
- **Nhiệm vụ 2 – Phân hoá thu nhập theo vùng:** màn 🏆 *Đại hội 6 vùng* với biểu đồ 2010–2024, thử thách xếp hạng và hoàn thành bài nhận xét.

Số liệu: Bảng 4 SGK – Thu nhập bình quân đầu người một tháng (giá hiện hành) phân theo vùng, năm 2010 và 2024.

## Hai chế độ chơi

- **📘 Bài học** – kinh tế bình thường, bám sát Bài 4.
- **📰 Thời cuộc 2019–2024** – mỗi nhân vật trải qua 3 sự kiện có thật (dịch COVID-19, giá xăng dầu, phân bón tăng, bão Yagi, hạn mặn…), mỗi sự kiện có ghi nguồn. Thu nhập nhân vật là số mô phỏng.

Mỗi nhân vật có **tâm lý riêng** (hoàn cảnh, ước mơ, nỗi lo) và chỉ số 💭 tâm trạng; lựa chọn dẫn tới nhiều **kết thúc** khác nhau, lưu trong 📔 Album.

## Cấu trúc

```
index.html      trang chính
style.css       giao diện
game.js         logic game
noi-dung.js     nội dung chế độ Bài học + số liệu SGK
mo-rong.js      tâm lý nhân vật, sự kiện có thật, chế độ Thời cuộc, các kết thúc
logic.js        phần tính toán dùng chung (tâm trạng, kết thúc) – game và bộ kiểm tra cùng dùng
kiem-tra/       bộ kiểm tra tự động
hinh/           ảnh nhân vật, ảnh nền
HUONG-DAN-CHATGPT.md   cách thêm nội dung, phối hợp Claude + ChatGPT
```

## Chạy

Mở `index.html` bằng trình duyệt, hoặc bật GitHub Pages: **Settings → Pages → Deploy from a branch → main / (root)**.

## Kiểm tra tự động

Sau mỗi lần sửa nội dung, chạy:

```
bash kiem-tra/chay.sh
```

- `kiem-tra/kiem-tra.js` (chỉ cần Node): số liệu đúng Bảng 4 SGK; sự kiện đúng năm, đúng vùng, đúng con số và nguồn đã kiểm chứng; không "lệch thời gian" (nhắc COVID trước 2020, nhắc năm chưa tới…); chế độ Bài học không lẫn biến cố; không có lựa chọn "hiển nhiên" hơn hẳn mọi mặt; mô phỏng **mọi** đường chơi để chắc chắn chỉ số hợp lý và kết thúc đủ đa dạng.
- `kiem-tra/choi-thu.py` (cần Playwright): bot chơi thử cả 2 chế độ × 6 nhân vật trên khung điện thoại và máy tính, báo lỗi JavaScript, ảnh hỏng, tràn màn hình.

Muốn thêm sự kiện mới: thêm vào `suKien` trong `mo-rong.js` **và** vào danh sách `SU_THAT` trong `kiem-tra/kiem-tra.js` (kèm nguồn đã đọc), nếu không bộ kiểm tra sẽ báo lỗi.
