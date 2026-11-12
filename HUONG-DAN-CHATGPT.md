# Hướng dẫn phối hợp Claude + ChatGPT

Game được chia làm 2 phần tách biệt:

| File | Chứa gì | Ai sửa |
|---|---|---|
| `noi-dung.js` | Toàn bộ nhân vật, tình huống, Góc Địa lí, câu hỏi, số liệu SGK | Ai cũng được (Claude, ChatGPT, bạn) |
| `game.js`, `style.css`, `index.html` | Code chạy game, giao diện | Nên để một bên (Claude) lo, tránh hai AI cùng sửa |
| `hinh/` | Ảnh nhân vật và ảnh nền | ChatGPT vẽ, bạn tải lên |

## 1. Thêm hình

Đặt ảnh vào thư mục `hinh/` với **đúng tên** sau. Chưa có ảnh thì game tự hiện emoji, không bị lỗi.

- Chân dung (khung vuông): `apao.png`, `minh.png`, `lan.png`, `hhen.png`, `tuan.png`, `ut.png`
- Ảnh nền (khung ngang 16:9): `nen-tdmn.png`, `nen-dbsh.png`, `nen-btb.png`, `nen-tn.png`, `nen-dnb.png`, `nen-dbscl.png`

Nên nén ảnh cho nhẹ (dưới 300 KB mỗi ảnh), ví dụ bằng tinypng.com.

## 2. Thêm tình huống

Mỗi nhân vật trong `noi-dung.js` có mảng `canh: [ ... ]`. Thêm cảnh mới vào mảng đó theo một trong 3 mẫu:

```js
// Cảnh lựa chọn
{
  loai: "chon", nam: 4,
  tieuDe: "Tiêu đề ngắn",
  moTa: "2–3 câu tình huống",
  luaChon: [
    { chu: "Lựa chọn 1", ketQua: "Kết quả", hieuUng: { thuNhap: 800, tayNghe: 10, gan: -5 }, nghe: "Tên nghề mới (không bắt buộc)" },
    { chu: "Lựa chọn 2", ketQua: "Kết quả", hieuUng: { thuNhap: 300, tayNghe: 5, gan: 10 } }
  ],
  diaLi: "Góc Địa lí: giải thích bằng kiến thức Địa 9"
}

// Câu hỏi chặn đường
{
  loai: "cauHoi", nam: 4,
  tieuDe: "❓ Câu hỏi chặn đường",
  cauHoi: "Câu hỏi?",
  dapAn: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
  dung: 0,              // vị trí đáp án đúng, đếm từ 0
  giaiThich: "Giải thích",
  thuong: { thuNhap: 300, tayNghe: 5 }
}

// Bản tin (chỉ đọc)
{ loai: "tin", nam: 6, tieuDe: "📰 Bản tin", moTa: "Nội dung tin", diaLi: "Giải thích" }
```

Quy ước:
- `thuNhap`: nghìn đồng/tháng cộng thêm (âm là giảm).
- `tayNghe`, `gan` (gắn bó quê hương): từ -20 đến +20.
- Riêng đường của **Minh**, có thể thêm `phieu: { loai: "thucTrang" | "giaiPhap" | "yNghia", chu: "..." }` vào cảnh, hoặc `phieuThem` vào lựa chọn. Phiếu sẽ tự vào báo cáo việc làm Hà Nội.

## 3. Đoạn prompt mẫu cho ChatGPT

> Đây là định dạng tình huống trong game của mình (dán mẫu ở mục 2). Hãy viết thêm 2 cảnh "chon" cho nhân vật **[tên]** ở vùng **[vùng]**, năm 3 và năm 4, dựa trên đặc điểm địa lí thật của vùng. Không bịa số liệu. Chỉ trả về code JavaScript, không giải thích.

Sau đó gửi kết quả về cho Claude soát lại trước khi ghép vào.

## 4. Lưu ý quan trọng

- Số liệu trong `vung: [...]` lấy từ **Bảng 4 SGK**. Đừng để AI tự đổi số này.
- Mỗi lần nhờ AI sửa, hãy gửi bản **mới nhất** từ GitHub, tránh ghi đè lên phần bên kia vừa làm.

## 5. Ảnh thật trong "Góc Địa lí"

Cảnh nào muốn có ảnh thật thì thêm trường `anh` vào cảnh đó, đặt file ảnh trong `hinh/that/`:

```js
anh: { src: "hinh/that/ten-anh.webp", chu: "Chú thích ảnh", nguon: "Nguồn / tác giả ảnh" }
```

Nên ghi rõ nguồn ảnh. Không dùng ảnh thấy rõ mặt người thật khi chưa được phép.

## 6. Chế độ Thời cuộc và tâm lý nhân vật

Nằm trong `mo-rong.js`. Khi nhờ AI viết thêm:
- Sự kiện phải là **sự kiện có thật**, có năm, có nguồn báo chí/cơ quan nhà nước. Gửi kèm link nguồn để kiểm chứng.
- Tâm lý nhân vật phải xuất phát từ **hoàn cảnh** (xa nhà, thiên tai, áp lực…), không gán tính cách cho cả một vùng hay một dân tộc.
- Mỗi lựa chọn phải "có được có mất". Bộ kiểm tra sẽ báo lỗi nếu một lựa chọn hơn hẳn các lựa chọn khác ở mọi mặt.
- Sau khi ghép nội dung, chạy `bash kiem-tra/chay.sh`.
- **Hai chế độ phải có tình huống khác nhau.** Thời cuộc không được dùng lại (`dungLai`) hay chép tình huống, lựa chọn của Bài học. Bộ kiểm tra (mục 13) sẽ báo lỗi.
- **Sau mỗi tình huống phải có phần bài học (`diaLi`) bám nội dung Bài 4**, tức là phải nói tới việc làm, thất nghiệp, thu nhập, lao động, di cư hoặc phân hoá thu nhập (mục 14). Với câu hỏi, phần bài học là `giaiThich` + `diaLi`.

## 7. Dấu "đi xa" và kết thúc Lao động xa xứ

Lựa chọn nào khiến nhân vật **rời tỉnh / ra nước ngoài đi làm** thì gắn `dat: "diXa"`. Nếu đó là quyết định ở **năm cuối** (nhân vật ở lại nơi xa) thì gắn `dat: ["diXa", "xaQue"]`.

Kết thúc 🧳 *Lao động xa xứ* xảy ra khi nhân vật đi xa ở năm cuối, hoặc đã rời quê đi làm ít nhất 2 lần. Bộ kiểm tra (mục 12) còn đòi hỏi:
- Chọn đi xa ở năm cuối thì không được ra "Người giữ lửa quê hương".
- Nhân vật ở vùng xuất cư (TD&MN Bắc Bộ, Bắc Trung Bộ, ĐB sông Cửu Long) phải gặp được kết thúc xa xứ ở chế độ Bài học.
- Không kết thúc nào chiếm quá 60% số đường của một nhân vật, hay quá 40% của cả một chế độ; kết thúc thường nào cũng phải có ít nhất 1% số đường.
