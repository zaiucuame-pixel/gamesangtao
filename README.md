# 🧭 Tuổi 18 – Chọn đường mưu sinh

Game nhập vai cho **Địa lí 9 – Bài 4: Thực hành tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng** (Lịch sử và Địa lí 9, Kết nối tri thức).

Người chơi sống thử 6 năm cuộc đời của một bạn 18 tuổi ở một trong 6 vùng kinh tế, mỗi năm chọn một ngã rẽ về việc làm.

- **Nhiệm vụ 1 – Việc làm ở Hà Nội:** đi đường của Minh, thu thập 📋 phiếu điều tra, game tự ghép thành báo cáo (thực trạng – giải pháp – ý nghĩa), in hoặc sao chép được.
- **Nhiệm vụ 2 – Phân hoá thu nhập theo vùng:** màn 🏆 *Đại hội 6 vùng* với biểu đồ 2010–2024, thử thách xếp hạng và hoàn thành bài nhận xét.

Số liệu: Bảng 4 SGK – Thu nhập bình quân đầu người một tháng (giá hiện hành) phân theo vùng, năm 2010 và 2024.

## Hai chế độ chơi

- **📘 Bài học** – kinh tế bình thường, bám sát Bài 4.
- **📰 Thời cuộc 2019–2024** – mỗi nhân vật trải qua 3 sự kiện có thật (dịch COVID-19, giá xăng dầu, phân bón tăng, bão Yagi, hạn mặn…), mỗi sự kiện có ghi nguồn. Thu nhập nhân vật là số mô phỏng.

Mỗi nhân vật có **tâm lý riêng** (hoàn cảnh, ước mơ, nỗi lo) và chỉ số 💭 tâm trạng; lựa chọn dẫn tới nhiều **kết thúc** khác nhau, lưu trong 📔 Album. Hoàn thành **🎯 nhiệm vụ** (vd. 6/6 câu chuyện) để nhận huy hiệu và **skin giao diện** (Đồng lúa chín, Phố cổ về đêm, Biển miền Trung, Hoa ban Tây Bắc, khung chân dung vàng). Có 3 **🔮 kết thúc bí mật** chỉ mở khi đi đúng tổ hợp lựa chọn đặc biệt, thưởng skin 💙 Tuyến đầu chống dịch, 🎄 Giáng sinh, 🎃 Halloween.

## Mã lưu game

Không cần tài khoản: vào **📔 Album → 💾 Mã lưu game** (hoặc nút **💾 Mã lưu** trên thanh menu) để lấy một mã ngắn chứa huy chương, skin, album. Sang máy khác, dán mã vào ô *Nhập mã* là lấy lại đủ. Nhập mã không bao giờ làm mất đồ đang có (chỉ gộp thêm).

**Mã giới thiệu "đủ đồ"** (mở hết kết thúc, huy hiệu, skin – dùng để trình diễn game):

```
GS1-28SX-ZZZZ-ZZZZ-ZZZZ-ZZZZ-ZZZW-1PG1-V60
```

Hoặc mở thẳng link: https://zaiucuame-pixel.github.io/gamesangtao/#ma=GS1-28SX-ZZZZ-ZZZZ-ZZZZ-ZZZZ-ZZZW-1PG1-V60

> Mã gắn với danh sách kết thúc/phiếu/skin hiện tại. Nếu thêm kết thúc mới, bộ kiểm tra sẽ báo mã trên hết hạn – tạo lại mã và cập nhật README.
Mỗi skin có một **✨ năng lực đặc biệt** (ghi trong Tủ đồ), có tác dụng khi mặc skin đó lúc bắt đầu câu chuyện: 🌾 Mùa bội thu (+3 🎓 mỗi câu đúng), 🏮 Đèn lồng soi đường (loại 1 đáp án sai), 🌊 Sóng vỗ về (tâm trạng bớt giảm 3), 🌸 Hương ban quê nhà (+10 🏡 lúc đầu), 💙 Lá chắn tuyến đầu (sai được chọn lại, không tính Thông thái), 🎄 Hộp quà may mắn (câu đúng đầu tiên thưởng ×2), 🎃 Mắt cú đêm (nhìn trước tác động của lựa chọn).

## Tài khoản

Người chơi đăng ký bằng **tên đăng nhập + mật khẩu** (không cần email). Huy chương, skin, album được lưu trên tài khoản qua **Firebase**, đăng nhập ở máy nào cũng còn. Cách bật: xem `HUONG-DAN-FIREBASE.md`. Khi chưa cấu hình Firebase, game vẫn chạy và lưu tiến độ trên trình duyệt.

## Cấu trúc

```
index.html      trang chính
style.css       giao diện
game.js         logic game
noi-dung.js     nội dung chế độ Bài học + số liệu SGK
mo-rong.js      tâm lý nhân vật, sự kiện có thật, chế độ Thời cuộc, các kết thúc
logic.js        phần tính toán dùng chung (tâm trạng, kết thúc) – game và bộ kiểm tra cùng dùng
ma-luu.js       mã lưu game (chép tiến độ sang máy khác, không cần tài khoản)
tai-khoan.js    đăng ký/đăng nhập, đồng bộ tiến độ (Firebase hoặc máy chủ giả lập)
firebase-config.js  cấu hình Firebase (để null = chưa bật tài khoản)
firestore.rules luật bảo mật Firestore
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
- `kiem-tra/tham-my.py` (cần Playwright): đo độ tương phản chữ/nền theo chuẩn WCAG trên cả 8 skin, mọi màn hình; `--anh THU_MUC` để chụp ảnh so sánh.
- `kiem-tra/tai-khoan.py` (cần Playwright): đăng ký, nhập sai, kiếm skin, tải lại, đăng xuất, đăng nhập ở máy khác, chơi thử rồi mới tạo tài khoản, giáo viên xoá máy dùng chung – chạy trên máy chủ giả lập.
- `kiem-tra/ma-luu.py` (cần Playwright): lấy mã ở máy này, nhập ở máy khác, nhập sai, mở link mã "đủ đồ".
- `kiem-tra/choi-thu.py` (cần Playwright): bot chơi thử cả 2 chế độ × 6 nhân vật trên khung điện thoại và máy tính, báo lỗi JavaScript, ảnh hỏng, tràn màn hình.

Muốn thêm sự kiện mới: thêm vào `suKien` trong `mo-rong.js` **và** vào danh sách `SU_THAT` trong `kiem-tra/kiem-tra.js` (kèm nguồn đã đọc), nếu không bộ kiểm tra sẽ báo lỗi.
