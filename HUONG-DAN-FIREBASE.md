# Bật tài khoản người chơi bằng Firebase

Game dùng **Firebase** (dịch vụ miễn phí của Google) để lưu tài khoản và huy chương. Làm một lần, khoảng 10 phút.
Giao diện Firebase có thể thay đổi đôi chút theo thời gian, nhưng các bước chính vẫn như dưới đây.

## Bước 1 – Tạo dự án
1. Vào https://console.firebase.google.com và đăng nhập bằng tài khoản Google.
2. Bấm **Tạo dự án** (Create a project), đặt tên, ví dụ `gamesangtao`.
3. Có thể **tắt Google Analytics** (không cần). Bấm tạo.

## Bước 2 – Bật đăng nhập bằng mật khẩu
1. Menu trái: **Build → Authentication → Get started**.
2. Tab **Sign-in method** → chọn **Email/Password** → bật mục đầu tiên (**Email/Password**) → **Save**.
   *(Không cần bật "Email link".)*
3. Tab **Settings → Authorized domains** → **Add domain** → nhập `zaiucuame-pixel.github.io`.

## Bước 3 – Tạo cơ sở dữ liệu
1. Menu trái: **Build → Firestore Database → Create database**.
2. Chọn vị trí gần Việt Nam, ví dụ **asia-southeast1 (Singapore)**.
3. Chọn **Start in production mode**.
4. Sang tab **Rules**, xoá hết, dán toàn bộ nội dung file `firestore.rules` trong repo → **Publish**.

## Bước 4 – Lấy cấu hình web
1. Bấm ⚙️ **Project settings** → kéo xuống **Your apps** → bấm biểu tượng **Web `</>`**.
2. Đặt tên app (vd. `web`), **không** cần tick Firebase Hosting → **Register app**.
3. Firebase hiện một đoạn `const firebaseConfig = { apiKey: ..., authDomain: ..., projectId: ..., ... }`.
4. Gửi đoạn đó cho Claude để ghép vào, **hoặc** tự mở file `firebase-config.js`, thay `null` bằng phần `{ ... }`.

> `apiKey` của Firebase web **không phải mật khẩu**, được phép để công khai trong trang web. Dữ liệu được bảo vệ bằng luật ở Bước 3.

## Sau khi bật
- Lần đầu vào game sẽ hiện cổng **Đăng nhập / Tạo tài khoản**, có lựa chọn "Chơi thử không cần tài khoản".
- Tài khoản chỉ gồm **tên đăng nhập + mật khẩu**, không có email, họ tên. Hướng dẫn học sinh dùng biệt danh.
- **Quên mật khẩu thì không lấy lại được** (vì không có email). Giáo viên có thể vào **Authentication → Users**, tìm tài khoản (có dạng `tendangnhap@nguoichoi.gamesangtao.example`) và xoá để học sinh đăng ký lại.
- Xem dữ liệu: **Firestore Database → nguoiChoi** (mỗi người chơi một hồ sơ).
- Gói miễn phí (Spark) đủ cho vài lớp học dùng hằng ngày.

## Kiểm tra không cần Firebase
Mở `index.html?gialap=1` để dùng "máy chủ giả lập" lưu ngay trong trình duyệt – đây là cách bộ kiểm tra `kiem-tra/tai-khoan.py` chạy.
