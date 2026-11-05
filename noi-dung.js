/* =========================================================
   NỘI DUNG GAME "TUỔI 18 – CHỌN ĐƯỜNG MƯU SINH"
   Địa lí 9 – Bài 4 (Kết nối tri thức)
   ---------------------------------------------------------
   File này CHỈ chứa nội dung. Muốn thêm/sửa tình huống thì
   sửa ở đây, không cần đụng vào game.js.
   Xem HUONG-DAN-CHATGPT.md để biết định dạng.
   ========================================================= */

/* Tình huống của 5 nhân vật phụ: kết hợp bản của Claude (cảnh đặc trưng vùng)
   và bản của ChatGPT (câu hỏi chặn đường, cảnh năm 4–5). */
window.NOI_DUNG = {
  "nguonSoLieu": "Bảng 4 SGK Lịch sử và Địa lí 9 (Kết nối tri thức) – Tính toán từ Kết quả khảo sát mức sống dân cư Việt Nam năm 2010 và năm 2024",
  "vung": [
    {
      "id": "TDMN",
      "ten": "Trung du và miền núi phía Bắc",
      "ngan": "TD&MN phía Bắc",
      "mau": "#2e9e6b",
      "tn2010": 907,
      "tn2024": 3749
    },
    {
      "id": "DBSH",
      "ten": "Đồng bằng sông Hồng",
      "ngan": "ĐB sông Hồng",
      "mau": "#e8463c",
      "tn2010": 1561,
      "tn2024": 6480
    },
    {
      "id": "BTB",
      "ten": "Bắc Trung Bộ",
      "ngan": "Bắc Trung Bộ",
      "mau": "#f08a24",
      "tn2010": 903,
      "tn2024": 4630
    },
    {
      "id": "NTBTN",
      "ten": "Duyên hải Nam Trung Bộ và Tây Nguyên",
      "ngan": "DH NTB & T.Nguyên",
      "mau": "#a0612f",
      "tn2010": 1127,
      "tn2024": 4360
    },
    {
      "id": "DNB",
      "ten": "Đông Nam Bộ",
      "ngan": "Đông Nam Bộ",
      "mau": "#2f6fde",
      "tn2010": 2212,
      "tn2024": 6868
    },
    {
      "id": "DBSCL",
      "ten": "Đồng bằng sông Cửu Long",
      "ngan": "ĐB sông Cửu Long",
      "mau": "#12a3a8",
      "tn2010": 1243,
      "tn2024": 4770
    }
  ],
  "nhanVat": [
    {
      "id": "minh",
      "ten": "Minh",
      "emoji": "🧑‍💻",
      "anh": "hinh/minh.webp",
      "nen": "hinh/nen-dbsh.webp",
      "vung": "DBSH",
      "que": "Hà Nội",
      "chinh": true,
      "gioiThieu": "Minh vừa thi xong lớp 12 ở Hà Nội – thủ đô, trung tâm kinh tế lớn nhất vùng Đồng bằng sông Hồng. Việc làm nhiều, nhưng người tìm việc cũng rất đông. Đi đường của Minh, bạn sẽ nhặt các 📋 phiếu điều tra để viết báo cáo việc làm ở Hà Nội.",
      "batDau": {
        "thuNhap": 0,
        "tayNghe": 20,
        "gan": 70
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Ngã ba sau lớp 12",
          "moTa": "Bạn bè Minh gần như ai cũng nộp hồ sơ đại học. Nhưng chú hàng xóm làm ở khu công nghệ cao Hòa Lạc bảo: \"Công ty chú tuyển mãi không đủ thợ kĩ thuật giỏi!\". Minh chọn gì?",
          "phieu": {
            "loai": "thucTrang",
            "chu": "Nhiều thanh niên Hà Nội chọn học đại học, trong khi doanh nghiệp lại thiếu thợ kĩ thuật có tay nghề: cung và cầu lao động chưa khớp nhau."
          },
          "luaChon": [
            {
              "chu": "🎓 Thi đại học ngành Công nghệ thông tin",
              "ketQua": "Minh đỗ đại học. 4 năm tới chưa có lương, nhưng nền tảng kiến thức rất vững.",
              "hieuUng": {
                "thuNhap": 0,
                "tayNghe": 15,
                "gan": 0
              },
              "nghe": "Sinh viên Công nghệ thông tin"
            },
            {
              "chu": "🔧 Học cao đẳng nghề Cơ điện tử 2 năm",
              "ketQua": "Vừa học vừa thực tập ở nhà máy, Minh có phụ cấp đầu tiên.",
              "hieuUng": {
                "thuNhap": 2500,
                "tayNghe": 20,
                "gan": 0
              },
              "nghe": "Học viên nghề Cơ điện tử"
            },
            {
              "chu": "🛵 Đi làm giao hàng ngay để có tiền",
              "ketQua": "Có thu nhập ngay, nhưng ngày nào cũng chạy 10 tiếng, không học thêm được gì.",
              "hieuUng": {
                "thuNhap": 7000,
                "tayNghe": 0,
                "gan": 0
              },
              "nghe": "Nhân viên giao hàng"
            }
          ],
          "diaLi": "Đồng bằng sông Hồng có lực lượng lao động đông và trình độ cao vào loại nhất cả nước. Tuy vậy, cơ cấu đào tạo còn lệch: thừa người học đại học ở một số ngành, nhưng thiếu công nhân kĩ thuật lành nghề."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Ngày hội việc làm",
          "moTa": "Minh theo bạn đến một ngày hội việc làm do trung tâm dịch vụ việc làm của thành phố tổ chức. Hàng chục doanh nghiệp đặt bàn tuyển người, có cả gian tư vấn đi làm việc ở nước ngoài.",
          "phieu": {
            "loai": "giaiPhap",
            "chu": "Tổ chức sàn giao dịch, ngày hội việc làm (trực tiếp và trực tuyến) để kết nối người lao động với doanh nghiệp."
          },
          "luaChon": [
            {
              "chu": "💼 Nộp hồ sơ làm thêm bán thời gian",
              "ketQua": "Minh được nhận làm thêm cuối tuần ở một cửa hàng điện máy. Tiền ít nhưng học được cách giao tiếp với khách.",
              "hieuUng": {
                "thuNhap": 1500,
                "tayNghe": 5,
                "gan": 0
              }
            },
            {
              "chu": "🗣️ Ngồi nghe tư vấn hướng nghiệp",
              "ketQua": "Chuyên viên chỉ cho Minh những nghề đang thiếu người: lập trình, kĩ thuật điện, logistics. Minh ghi chép kín một trang.",
              "hieuUng": {
                "thuNhap": 0,
                "tayNghe": 10,
                "gan": 0
              }
            }
          ],
          "diaLi": "Kết nối cung – cầu lao động là một giải pháp quan trọng: người lao động biết chỗ nào cần người, doanh nghiệp tìm được đúng người, nhờ đó giảm thất nghiệp."
        },
        {
          "loai": "chon",
          "nam": 3,
          "tieuDe": "Anh Hùng thất nghiệp",
          "moTa": "Anh Hùng, hàng xóm của Minh, tốt nghiệp đại học đã một năm mà vẫn chưa có việc đúng ngành. Anh than: \"Nhà tuyển dụng hỏi kinh nghiệm, hỏi tiếng Anh, anh đều không có.\" Minh rút ra bài học gì?",
          "phieu": {
            "loai": "thucTrang",
            "chu": "Một bộ phận người tốt nghiệp vẫn khó tìm việc đúng chuyên môn vì thiếu kĩ năng thực tế, ngoại ngữ và kĩ năng số."
          },
          "luaChon": [
            {
              "chu": "🌐 Học thêm tiếng Anh và kĩ năng số buổi tối",
              "ketQua": "Mệt nhưng đáng: Minh được giao thêm việc có lương cao hơn.",
              "hieuUng": {
                "thuNhap": 1000,
                "tayNghe": 15,
                "gan": 0
              },
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Đào tạo theo nhu cầu thị trường: ưu tiên công nghệ thông tin, ngoại ngữ, kĩ năng số, kĩ năng mềm."
              }
            },
            {
              "chu": "🤝 Rủ anh Hùng cùng đi thực tập không lương",
              "ketQua": "Hai anh em có thêm kinh nghiệm thực tế, anh Hùng sau đó được nhận làm chính thức.",
              "hieuUng": {
                "thuNhap": 0,
                "tayNghe": 10,
                "gan": 5
              },
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Tăng liên kết giữa nhà trường và doanh nghiệp: thực tập, đào tạo tại doanh nghiệp."
              }
            }
          ],
          "diaLi": "Thất nghiệp ở thành thị thường cao hơn nông thôn, còn thiếu việc làm lại phổ biến ở nông thôn. Ở các đô thị lớn như Hà Nội, thất nghiệp thường gặp nhiều ở thanh niên mới ra trường."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Vì sao Hà Nội thu hút rất nhiều lao động từ các tỉnh khác đến làm việc?",
          "dapAn": [
            "Là trung tâm kinh tế, chính trị lớn, nhiều việc làm trong công nghiệp và dịch vụ, thu nhập cao hơn",
            "Vì Hà Nội có nhiều đất nông nghiệp trống để canh tác",
            "Vì ở Hà Nội không ai cần học nghề",
            "Vì Hà Nội có dân số ít, thiếu người ở"
          ],
          "dung": 0,
          "giaiThich": "Hà Nội là trung tâm chính trị, kinh tế, văn hoá của cả nước, tập trung nhiều khu công nghiệp, khu công nghệ cao và dịch vụ, nên có nhiều việc làm và thu nhập cao. Điều này hút lao động nhập cư, nhưng cũng tạo sức ép về việc làm và nhà ở.",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Chị Thảo ở phòng trọ bên",
          "moTa": "Chị Thảo từ quê lên Hà Nội đã 2 năm, làm phụ bếp theo ngày, không hợp đồng, không bảo hiểm. Chị muốn có việc ổn định hơn nhưng không biết bắt đầu từ đâu.",
          "phieu": {
            "loai": "thucTrang",
            "chu": "Lao động từ các tỉnh đổ về Hà Nội rất đông, tạo sức ép về việc làm và nhà ở; nhiều người làm việc phi chính thức, không hợp đồng, không bảo hiểm."
          },
          "luaChon": [
            {
              "chu": "📝 Chỉ chị đăng kí lớp học nghề ngắn hạn được hỗ trợ học phí",
              "ketQua": "Sau 3 tháng, chị Thảo có chứng chỉ nấu ăn và được một nhà hàng kí hợp đồng.",
              "hieuUng": {
                "thuNhap": 0,
                "tayNghe": 5,
                "gan": 10
              },
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Hỗ trợ học nghề ngắn hạn cho lao động phổ thông, lao động nhập cư, lao động nông thôn."
              }
            },
            {
              "chu": "📱 Hướng dẫn chị tìm việc trên cổng thông tin việc làm",
              "ketQua": "Chị Thảo tìm được việc ở bếp ăn của một khu công nghiệp, có bảo hiểm xã hội.",
              "hieuUng": {
                "thuNhap": 0,
                "tayNghe": 5,
                "gan": 5
              },
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Vận hành tốt cổng thông tin việc làm, ứng dụng công nghệ số để thu thập và phân tích dữ liệu thị trường lao động."
              }
            }
          ],
          "diaLi": "Lao động di cư giúp các đô thị có thêm nguồn nhân lực, nhưng nếu thiếu kĩ năng thì họ dễ làm việc bấp bênh. Nâng cao chất lượng lao động là chìa khoá để có việc làm bền vững."
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Ba lời mời",
          "moTa": "Đến năm thứ 5, Minh đã có tay nghề. Ba cơ hội xuất hiện cùng lúc. Chọn con đường nào?",
          "luaChon": [
            {
              "chu": "🏭 Làm kĩ sư/kĩ thuật viên ở doanh nghiệp vốn nước ngoài, khu công nghệ cao Hòa Lạc",
              "ketQua": "Lương cao, môi trường chuyên nghiệp, nhưng đi lại xa và áp lực công việc lớn.",
              "hieuUng": {
                "thuNhap": 6000,
                "tayNghe": 15,
                "gan": -5
              },
              "nghe": "Kĩ thuật viên công nghệ cao",
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Thu hút đầu tư vào công nghiệp công nghệ cao, chuyển lao động phổ thông sang lao động có kĩ năng."
              }
            },
            {
              "chu": "🏡 Về ngoại thành mở xưởng sửa chữa điện tử, nhận thanh niên trong xã học việc",
              "ketQua": "Thu nhập vừa phải, nhưng Minh tạo được việc làm cho 5 bạn trẻ ở quê.",
              "hieuUng": {
                "thuNhap": 3500,
                "tayNghe": 10,
                "gan": 20
              },
              "nghe": "Chủ xưởng sửa chữa điện tử",
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Hỗ trợ doanh nghiệp nhỏ và khởi nghiệp (vay vốn ưu đãi) để tự tạo việc làm tại chỗ, nhất là ở ngoại thành."
              }
            },
            {
              "chu": "✈️ Đi làm việc ở Nhật Bản theo hợp đồng 3 năm",
              "ketQua": "Thu nhập rất cao để gửi về gia đình, nhưng xa nhà, phải học tiếng Nhật vất vả.",
              "hieuUng": {
                "thuNhap": 9000,
                "tayNghe": 10,
                "gan": -20
              },
              "nghe": "Lao động theo hợp đồng ở Nhật Bản",
              "phieuThem": {
                "loai": "giaiPhap",
                "chu": "Mở rộng chương trình đưa người lao động đi làm việc ở nước ngoài theo hợp đồng."
              }
            }
          ],
          "diaLi": "Mỗi hướng đi giải quyết việc làm theo một cách: phát triển công nghiệp công nghệ cao, tự tạo việc làm tại chỗ, hoặc xuất khẩu lao động. Một địa phương thường phải kết hợp nhiều giải pháp."
        },
        {
          "loai": "tin",
          "nam": 6,
          "tieuDe": "📰 Bản tin thành phố",
          "moTa": "Minh đọc được tin: theo kế hoạch năm 2026, Hà Nội đặt mục tiêu giải quyết việc làm mới cho 171.000 lao động, giảm tỉ lệ thất nghiệp thành thị xuống dưới 3% và đạt 75,8% lao động qua đào tạo. (Nguồn: VnEconomy)",
          "phieu": {
            "loai": "yNghia",
            "chu": "Giải quyết tốt việc làm giúp giảm thất nghiệp, tăng thu nhập, nâng cao đời sống, bảo đảm an sinh xã hội và trật tự an toàn xã hội, thúc đẩy kinh tế Hà Nội phát triển bền vững."
          },
          "diaLi": "Việc làm là vấn đề kinh tế – xã hội lớn. Khi người lao động có việc làm ổn định, thu nhập tăng, tệ nạn xã hội giảm và nguồn lao động được sử dụng hiệu quả."
        }
      ]
    },
    {
      "id": "apao",
      "ten": "A Páo",
      "emoji": "🧑‍🌾",
      "anh": "hinh/apao.webp",
      "nen": "hinh/nen-tdmn.webp",
      "vung": "TDMN",
      "que": "Vùng cao Đồng Văn (Hà Giang cũ, nay thuộc Tuyên Quang)",
      "gioiThieu": "A Páo là người Mông, vừa học xong lớp 12 ở trường phổ thông dân tộc nội trú. Quê em có cao nguyên đá hùng vĩ, nhưng đường sá khó đi và ít nhà máy.",
      "batDau": {
        "thuNhap": 2500,
        "tayNghe": 20,
        "gan": 80
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Đồi chè hay khu công nghiệp?",
          "moTa": "Hợp tác xã chè shan tuyết trong bản đang cần người trẻ. Nhưng anh họ của A Páo rủ xuống khu công nghiệp ở đồng bằng làm công nhân, lương mỗi tháng gấp mấy lần làm nương.",
          "luaChon": [
            {
              "chu": "🍃 Ở lại làm với hợp tác xã chè và dược liệu",
              "ketQua": "Thu nhập tăng chậm, nhưng A Páo được ở gần gia đình và học cách chế biến chè đặc sản.",
              "hieuUng": {
                "thuNhap": 500,
                "tayNghe": 10,
                "gan": 15
              },
              "nghe": "Thành viên hợp tác xã chè"
            },
            {
              "chu": "🏭 Xuống khu công nghiệp làm công nhân",
              "ketQua": "Lương cao hơn hẳn, nhưng phải ở trọ xa nhà, ca làm dài.",
              "hieuUng": {
                "thuNhap": 3500,
                "tayNghe": 5,
                "gan": -20
              },
              "nghe": "Công nhân lắp ráp điện tử"
            },
            {
              "chu": "🏔️ Học làm hướng dẫn viên du lịch cộng đồng",
              "ketQua": "A Páo dẫn khách đi bản, giới thiệu văn hoá Mông. Mùa du lịch đông khách thì thu nhập khá.",
              "hieuUng": {
                "thuNhap": 1500,
                "tayNghe": 15,
                "gan": 10
              },
              "nghe": "Hướng dẫn viên du lịch cộng đồng"
            }
          ],
          "diaLi": "Trung du và miền núi phía Bắc có địa hình núi cao hiểm trở, giao thông khó khăn, ít khu công nghiệp, kinh tế còn dựa nhiều vào nông – lâm nghiệp. Vì vậy đây là vùng có thu nhập bình quân thấp nhất (3.749 nghìn đồng/người/tháng năm 2024). Thế mạnh của vùng: cây chè, dược liệu, chăn nuôi gia súc lớn, thuỷ điện, khoáng sản và du lịch."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Mưa lớn, đường sạt lở",
          "moTa": "Mùa mưa năm nay, một đoạn đường lên bản bị sạt lở suốt một tuần. Hàng hoá không xuống được chợ huyện, khách du lịch huỷ tour.",
          "luaChon": [
            {
              "chu": "📱 Cùng Đoàn thanh niên bán hàng qua mạng, gửi khi đường thông",
              "ketQua": "Khách ở thành phố đặt mua chè, mật ong. Thu nhập không bị hụt nhiều.",
              "hieuUng": {
                "thuNhap": 600,
                "tayNghe": 10,
                "gan": 5
              }
            },
            {
              "chu": "⏳ Chờ thương lái lên mua như mọi năm",
              "ketQua": "Thương lái ép giá vì đường xấu. Thu nhập năm nay giảm.",
              "hieuUng": {
                "thuNhap": -300,
                "tayNghe": 0,
                "gan": 5
              }
            }
          ],
          "diaLi": "Mùa mưa ở miền núi hay xảy ra lũ quét, sạt lở đất. Giao thông khó khăn làm nông sản khó tiêu thụ, dễ bị ép giá. Đầu tư hạ tầng giao thông và thương mại điện tử giúp người dân vùng cao tăng thu nhập."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "Bình quân vùng có phải lương của Páo?",
          "moTa": "Đọc bảng thu nhập bình quân đầu người theo vùng, một người bạn nói: 'Cứ sống ở cùng một vùng thì ai cũng kiếm được bằng mức ghi trong bảng.' Páo sẽ giải thích thế nào?",
          "cauHoi": "Cách hiểu nào đúng về thu nhập bình quân đầu người của một vùng?",
          "dapAn": [
            "Đó là mức lương mà mọi người lao động trong vùng đều nhận.",
            "Đó là mức thu nhập tối thiểu của từng hộ gia đình.",
            "Đó là chỉ tiêu bình quân; thu nhập thực tế của từng người có thể khác nhau.",
            "Đó chỉ là thu nhập của những người làm du lịch."
          ],
          "dung": 2,
          "giaiThich": "Thu nhập bình quân đầu người không phải tiền lương của từng người lao động. Chỉ tiêu này tính bình quân trên dân số, bao gồm cả người chưa hoặc không đi làm.",
          "thuong": {
            "thuNhap": 0,
            "tayNghe": 10
          },
          "diaLi": "Khi nhận xét phân hóa thu nhập, cần phân biệt chỉ tiêu bình quân của vùng với thu nhập của một cá nhân."
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Đưa sản phẩm địa phương đến khách hàng",
          "moTa": "Một nhóm hộ ở quê muốn giới thiệu sản phẩm do họ làm ra tới nhiều khách hàng hơn. Họ mời Páo hỗ trợ chụp ảnh, đăng thông tin và trả lời khách. Páo có thể tham gia, nhưng phải bớt thời gian dành cho công việc đang mang lại tiền công.",
          "luaChon": [
            {
              "chu": "Bớt giờ làm để học bán hàng trực tuyến",
              "ketQua": "Páo học thêm cách giới thiệu sản phẩm và phối hợp với các hộ. Thu nhập trước mắt giảm do bớt giờ làm; việc bán hàng còn phụ thuộc vận chuyển và lượng đơn.",
              "hieuUng": {
                "thuNhap": -200,
                "tayNghe": 15,
                "gan": 10
              }
            },
            {
              "chu": "Giữ giờ làm, chỉ hỗ trợ vào ngày nghỉ",
              "ketQua": "Páo giữ được nguồn tiền công và vẫn giúp nhóm hộ một phần. Tuy nhiên, Páo có ít thời gian nghỉ ngơi và việc học kỹ năng mới diễn ra chậm hơn.",
              "hieuUng": {
                "thuNhap": 200,
                "tayNghe": 5,
                "gan": 4
              }
            }
          ],
          "diaLi": "Kết nối thị trường có thể tạo thêm việc làm cho địa phương. Hiệu quả còn phụ thuộc kỹ năng, chất lượng sản phẩm, giao thông và dịch vụ vận chuyển."
        },
        {
          "loai": "cauHoi",
          "nam": 4,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Vì sao Trung du và miền núi phía Bắc có thu nhập bình quân đầu người thấp nhất cả nước năm 2024?",
          "dapAn": [
            "Địa hình hiểm trở, giao thông khó, ít công nghiệp – dịch vụ, kinh tế chủ yếu là nông – lâm nghiệp",
            "Vì vùng có dân số đông nhất cả nước",
            "Vì vùng hoàn toàn không có tài nguyên thiên nhiên",
            "Vì khí hậu nóng quanh năm, không trồng được cây gì"
          ],
          "dung": 0,
          "giaiThich": "Vùng giàu tài nguyên (khoáng sản, thuỷ điện, đất trồng chè, dược liệu) nhưng địa hình chia cắt, giao thông khó, công nghiệp và dịch vụ kém phát triển, trình độ lao động còn thấp nên thu nhập chưa cao.",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Một năm dành cho điều gì?",
          "moTa": "Páo muốn ổn định cuộc sống. Một cơ sở dịch vụ ở quê sẵn sàng nhận Páo và đào tạo thêm. Một nơi khác ngoài tỉnh đưa ra cơ hội làm việc có thu nhập cao hơn, nhưng yêu cầu làm xa nhà.",
          "luaChon": [
            {
              "chu": "Chọn công việc ở quê, xây dựng quan hệ lâu dài",
              "ketQua": "Páo có thêm kinh nghiệm phục vụ khách hàng địa phương và được ở gần người thân. Mức tăng thu nhập nhỏ hơn, cơ hội còn phụ thuộc sức mua và lượng khách.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 9,
                "gan": 15
              },
              "nghe": "Nhân viên dịch vụ tại quê nhà"
            },
            {
              "chu": "Đi làm ngoài tỉnh để tích lũy thêm",
              "ketQua": "Páo tăng thu nhập và tiếp xúc với cách tổ chức công việc mới. Đổi lại, Páo tiếp tục xa nhà và phải dành một phần tiền cho sinh hoạt, đi lại.",
              "hieuUng": {
                "thuNhap": 800,
                "tayNghe": 12,
                "gan": -10
              },
              "nghe": "Nhân viên dịch vụ ngoài tỉnh"
            }
          ],
          "diaLi": "Làm việc tại quê nhà hay di chuyển đến nơi khác đều có lợi ích và đánh đổi. Thu nhập phụ thuộc cả cơ hội của địa phương lẫn kỹ năng và công việc cụ thể."
        }
      ]
    },
    {
      "id": "lan",
      "ten": "Lan",
      "emoji": "👩‍🔧",
      "anh": "hinh/lan.webp",
      "nen": "hinh/nen-btb.webp",
      "vung": "BTB",
      "que": "Nghệ An",
      "gioiThieu": "Lan lớn lên ở một làng ven biển Nghệ An. Quê Lan nắng gió, hay có bão, nhưng mấy năm gần đây các khu kinh tế ven biển mọc lên, mở ra nhiều cơ hội mới.",
      "batDau": {
        "thuNhap": 3000,
        "tayNghe": 20,
        "gan": 70
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Khu kinh tế tuyển người",
          "moTa": "Một khu kinh tế ven biển trong vùng đang tuyển hàng nghìn lao động. Cùng lúc đó, cô bạn thân rủ Lan học tiếng Nhật để đi làm việc ở nước ngoài.",
          "luaChon": [
            {
              "chu": "🏗️ Vào làm nhà máy ở khu kinh tế ven biển",
              "ketQua": "Lan được đào tạo vận hành máy, có lương ổn định và bảo hiểm.",
              "hieuUng": {
                "thuNhap": 2500,
                "tayNghe": 15,
                "gan": 0
              },
              "nghe": "Công nhân kĩ thuật khu kinh tế"
            },
            {
              "chu": "✈️ Học tiếng Nhật, đi làm việc ở nước ngoài theo hợp đồng",
              "ketQua": "Một năm học vất vả, sau đó Lan sang Nhật làm việc, gửi tiền về xây nhà cho bố mẹ.",
              "hieuUng": {
                "thuNhap": 6000,
                "tayNghe": 10,
                "gan": -20
              },
              "nghe": "Lao động theo hợp đồng ở Nhật Bản"
            },
            {
              "chu": "🍲 Ở lại cùng mẹ mở quán đặc sản xứ Nghệ",
              "ketQua": "Quán đông khách vào mùa du lịch biển, vắng vào mùa mưa bão.",
              "hieuUng": {
                "thuNhap": 1200,
                "tayNghe": 10,
                "gan": 15
              },
              "nghe": "Chủ quán đặc sản xứ Nghệ"
            }
          ],
          "diaLi": "Bắc Trung Bộ có nhiều khu kinh tế ven biển đang thu hút đầu tư (như Nghi Sơn, Vũng Áng), tạo thêm nhiều việc làm. Vùng cũng có nhiều lao động đi làm việc ở nước ngoài. Nhờ đó, thu nhập của vùng tăng nhanh nhất cả nước: từ 903 lên 4.630 nghìn đồng (gấp khoảng 5,1 lần, 2010–2024)."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Bão và gió Lào",
          "moTa": "Mùa hè năm nay gió Lào khô nóng kéo dài, cuối năm lại có bão lớn đổ bộ. Mái nhà nhà Lan bị tốc, vụ lúa của bố mẹ mất trắng.",
          "luaChon": [
            {
              "chu": "🛡️ Dùng tiền tiết kiệm gia cố nhà, mua bảo hiểm cho năm sau",
              "ketQua": "Tốn một khoản, nhưng năm sau gia đình yên tâm hơn trước mùa bão.",
              "hieuUng": {
                "thuNhap": -500,
                "tayNghe": 5,
                "gan": 10
              }
            },
            {
              "chu": "🔁 Khuyên bố mẹ chuyển sang giống lúa ngắn ngày, né mùa bão",
              "ketQua": "Thu hoạch sớm trước bão, thu nhập gia đình ổn định hơn.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 10,
                "gan": 5
              }
            }
          ],
          "diaLi": "Bắc Trung Bộ là vùng chịu nhiều thiên tai: bão, lũ, hạn hán và gió phơn Tây Nam (gió Lào) khô nóng. Thiên tai làm giảm thu nhập, vì vậy người dân cần chủ động phòng chống thiên tai và thích ứng với biến đổi khí hậu."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "Có việc nhưng chưa đủ việc",
          "moTa": "Một người bạn của Lan làm dịch vụ du lịch. Ngoài mùa đông khách, bạn chỉ được bố trí ít buổi làm dù vẫn muốn và có thể làm thêm.",
          "cauHoi": "Tình huống này thể hiện rõ nhất vấn đề nào?",
          "dapAn": [
            "Thiếu việc làm do lượng công việc thay đổi theo mùa.",
            "Không còn nhu cầu làm việc.",
            "Mọi người trong vùng đều thất nghiệp.",
            "Người lao động không cần học thêm kỹ năng."
          ],
          "dung": 0,
          "giaiThich": "Người bạn vẫn có việc nhưng thời gian làm việc chưa đáp ứng nhu cầu. Tính mùa vụ có thể khiến lao động dịch vụ thiếu việc vào một số thời điểm.",
          "thuong": {
            "thuNhap": 0,
            "tayNghe": 10
          },
          "diaLi": "Giải quyết việc làm không chỉ là tạo việc cho người thất nghiệp mà còn cần giảm tình trạng thiếu việc làm."
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Nhận thêm việc hay dành giờ học?",
          "moTa": "Lan có thể nhận thêm một công việc được trả công vào buổi tối. Cũng trong khung giờ ấy, một lớp kỹ năng sử dụng máy tính và quản lý đơn hàng khai giảng. Lan chưa thể sắp xếp để theo cả hai.",
          "luaChon": [
            {
              "chu": "Nhận việc buổi tối để tăng tiền dành dụm",
              "ketQua": "Lan tăng thu nhập ngay trong năm này. Đổi lại, Lan ít thời gian nghỉ và bỏ lỡ đợt học kỹ năng mới.",
              "hieuUng": {
                "thuNhap": 600,
                "tayNghe": 3,
                "gan": 0
              }
            },
            {
              "chu": "Giảm giờ kiếm tiền để tham gia lớp học",
              "ketQua": "Lan tiến bộ về kỹ năng xử lý thông tin và đơn hàng. Thu nhập trước mắt giảm; kỹ năng mới cũng chưa bảo đảm Lan lập tức tìm được việc tốt hơn.",
              "hieuUng": {
                "thuNhap": -200,
                "tayNghe": 16,
                "gan": 0
              }
            }
          ],
          "diaLi": "Nâng cao chất lượng lao động là một hướng giải quyết việc làm. Việc học cần thời gian và phải phù hợp với nhu cầu tuyển dụng."
        },
        {
          "loai": "cauHoi",
          "nam": 4,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Theo Bảng 4 SGK, vùng nào có thu nhập bình quân đầu người tăng NHANH NHẤT giai đoạn 2010–2024?",
          "dapAn": [
            "Bắc Trung Bộ",
            "Đông Nam Bộ",
            "Đồng bằng sông Hồng",
            "Trung du và miền núi phía Bắc"
          ],
          "dung": 0,
          "giaiThich": "Bắc Trung Bộ tăng từ 903 lên 4.630 nghìn đồng, gấp khoảng 5,1 lần – nhanh nhất cả nước. (Cách tính: 4.630 ÷ 903 ≈ 5,1.) Năm 2010 đây còn là vùng thấp nhất!",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Góp sức cho một cơ sở ở quê",
          "moTa": "Một cơ sở chế biến thực phẩm ở quê Lan đang tuyển người và có hướng dẫn công việc. Lan có thể về tham gia, hoặc tiếp tục tìm việc tại đô thị nơi có nhiều đơn vị tuyển dụng hơn.",
          "luaChon": [
            {
              "chu": "Làm tại cơ sở ở quê",
              "ketQua": "Lan gần gia đình và góp sức vào hoạt động sản xuất địa phương. Thu nhập tăng vừa phải; cơ hội phát triển phụ thuộc đơn hàng và khả năng mở rộng của cơ sở.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 9,
                "gan": 15
              },
              "nghe": "Nhân viên cơ sở chế biến thực phẩm"
            },
            {
              "chu": "Tìm cơ hội ở đô thị",
              "ketQua": "Lan tìm được việc có thu nhập cao hơn và nhiều nhiệm vụ mới. Lan phải thích nghi với cạnh tranh tuyển dụng và cuộc sống xa quê.",
              "hieuUng": {
                "thuNhap": 800,
                "tayNghe": 12,
                "gan": -9
              },
              "nghe": "Nhân viên doanh nghiệp tại đô thị"
            }
          ],
          "diaLi": "Phát triển sản xuất và dịch vụ tại địa phương giúp tạo việc làm. Đô thị thường tập trung nhiều hoạt động kinh tế nhưng người tìm việc vẫn phải đáp ứng yêu cầu tuyển dụng."
        }
      ]
    },
    {
      "id": "hhen",
      "ten": "H'Hen",
      "emoji": "👩‍🌾",
      "anh": "hinh/hhen.webp",
      "nen": "hinh/nen-tn.webp",
      "vung": "NTBTN",
      "que": "Đắk Lắk",
      "gioiThieu": "H'Hen là người Ê Đê, nhà có vườn cà phê trên đất đỏ badan. Từ buôn của H'Hen đi xuống biển Nam Trung Bộ cũng không quá xa.",
      "batDau": {
        "thuNhap": 2800,
        "tayNghe": 20,
        "gan": 75
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Vườn cà phê của gia đình",
          "moTa": "Vườn cà phê của gia đình đã già cỗi. Bố muốn H'Hen ở nhà phụ giúp, còn chị họ rủ xuống thành phố biển làm lễ tân khách sạn.",
          "luaChon": [
            {
              "chu": "☕ Ở nhà, học kĩ thuật tưới tiết kiệm, làm cà phê đặc sản",
              "ketQua": "Năng suất tăng, cà phê sạch bán được giá cao hơn.",
              "hieuUng": {
                "thuNhap": 1200,
                "tayNghe": 15,
                "gan": 10
              },
              "nghe": "Nông dân cà phê đặc sản"
            },
            {
              "chu": "🏖️ Xuống thành phố biển làm lễ tân khách sạn",
              "ketQua": "H'Hen học tiếng Anh giao tiếp, mùa du lịch có thêm tiền thưởng.",
              "hieuUng": {
                "thuNhap": 2000,
                "tayNghe": 10,
                "gan": -10
              },
              "nghe": "Lễ tân khách sạn biển"
            },
            {
              "chu": "🌱 Trồng xen sầu riêng, hồ tiêu trong vườn cà phê",
              "ketQua": "Vài năm đầu chưa có thu, nhưng sau này nhiều nguồn thu hơn, đỡ rủi ro.",
              "hieuUng": {
                "thuNhap": 600,
                "tayNghe": 10,
                "gan": 15
              },
              "nghe": "Chủ vườn cây công nghiệp"
            }
          ],
          "diaLi": "Tây Nguyên có đất badan màu mỡ, là vùng chuyên canh cà phê lớn nhất nước ta; Duyên hải Nam Trung Bộ mạnh về du lịch biển, khai thác và nuôi trồng thuỷ sản. Thu nhập ở đây phụ thuộc nhiều vào giá nông sản và thời tiết, nên vùng có thu nhập thấp thứ hai (4.360 nghìn đồng năm 2024)."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Mùa khô thiếu nước",
          "moTa": "Mùa khô năm nay kéo dài, giếng cạn, hồ chứa thiếu nước. Cùng lúc, giá cà phê thế giới lại giảm.",
          "luaChon": [
            {
              "chu": "💧 Góp vốn cùng các hộ làm hệ thống tưới nhỏ giọt",
              "ketQua": "Vườn vẫn đủ nước, cây không bị chết.",
              "hieuUng": {
                "thuNhap": 300,
                "tayNghe": 10,
                "gan": 5
              }
            },
            {
              "chu": "🤷 Tưới như cũ, chờ mưa",
              "ketQua": "Một phần vườn bị khô héo, thu nhập giảm mạnh.",
              "hieuUng": {
                "thuNhap": -800,
                "tayNghe": 0,
                "gan": 0
              }
            }
          ],
          "diaLi": "Tây Nguyên có mùa khô kéo dài, thường thiếu nước tưới. Xây dựng thuỷ lợi, tưới tiết kiệm và đa dạng cây trồng giúp giảm rủi ro thu nhập."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "Nông sản bán được, ai có thêm việc?",
          "moTa": "H'Hen quan sát thấy một sản phẩm nông nghiệp phải qua nhiều công đoạn trước khi tới tay người mua: thu hoạch, sơ chế, đóng gói, vận chuyển và bán hàng.",
          "cauHoi": "Hướng nào có thể giúp địa phương mở rộng việc làm ngoài khâu trồng trọt?",
          "dapAn": [
            "Chỉ tập trung bán nguyên liệu, bỏ các hoạt động dịch vụ.",
            "Cho rằng mọi người đều phải làm cùng một nghề.",
            "Ngừng đào tạo vì kinh nghiệm hiện có luôn đủ.",
            "Phát triển chế biến, vận chuyển, tiêu thụ gắn với đào tạo lao động."
          ],
          "dung": 3,
          "giaiThich": "Phát triển các hoạt động sau thu hoạch và dịch vụ liên quan có thể tạo thêm nhiều loại công việc. Người lao động cần kỹ năng phù hợp với từng khâu.",
          "thuong": {
            "thuNhap": 0,
            "tayNghe": 10
          },
          "diaLi": "Đa dạng hóa hoạt động kinh tế góp phần tạo việc làm và giảm sự phụ thuộc vào lao động nông nghiệp mùa vụ."
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Làm gần nhà hay thử sức ở thành phố?",
          "moTa": "H'Hen thấy hai thông báo tuyển người mới: một điểm thu mua nông sản gần nhà và một cửa hàng tại Buôn Ma Thuột. Cửa hàng có lịch làm đều hơn, nhưng đi lại xa và thường phải làm vào cuối tuần.",
          "luaChon": [
            {
              "chu": "Làm tại điểm thu mua gần nhà",
              "ketQua": "H'Hen hiểu thêm cách giao dịch nông sản và dễ sắp xếp việc gia đình. Lượng việc vẫn biến động theo mùa thu hoạch.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 8,
                "gan": 10
              },
              "nghe": "Nhân viên điểm thu mua nông sản"
            },
            {
              "chu": "Ứng tuyển cửa hàng tại Buôn Ma Thuột",
              "ketQua": "H'Hen được nhận, rèn kỹ năng bán hàng và có thu nhập đều hơn. Đổi lại, thời gian đi lại tăng và ít có mặt trong sinh hoạt ở quê.",
              "hieuUng": {
                "thuNhap": 700,
                "tayNghe": 12,
                "gan": -6
              },
              "nghe": "Nhân viên bán hàng"
            }
          ],
          "diaLi": "Hoạt động thương mại và dịch vụ ở đô thị tạo thêm lựa chọn việc làm cho lao động trong vùng."
        },
        {
          "loai": "cauHoi",
          "nam": 4,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Vì sao thu nhập của nhiều hộ trồng cà phê ở Tây Nguyên hay lên xuống thất thường?",
          "dapAn": [
            "Vì phụ thuộc vào giá nông sản trên thị trường và thời tiết (mùa khô, hạn hán)",
            "Vì Tây Nguyên không có đất trồng trọt",
            "Vì cà phê là cây lương thực",
            "Vì vùng có quá nhiều khu công nghiệp"
          ],
          "dung": 0,
          "giaiThich": "Cà phê là cây công nghiệp xuất khẩu, giá phụ thuộc thị trường thế giới. Mùa khô kéo dài, hạn hán cũng làm giảm năng suất. Vì vậy thu nhập của người trồng cà phê kém ổn định.",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Đồng hành với nhóm sản xuất",
          "moTa": "Một nhóm sản xuất ở quê H'Hen muốn quản lý đơn hàng và giới thiệu sản phẩm tốt hơn. Nhóm mời H'Hen học rồi đảm nhận một phần công việc. H'Hen cũng có thể chọn một vị trí làm thuê đã thỏa thuận rõ tiền công.",
          "luaChon": [
            {
              "chu": "Tham gia nhóm sản xuất ở quê",
              "ketQua": "H'Hen học thêm cách phối hợp sản xuất và bán hàng, gắn bó hơn với địa phương. Trong năm đầu, thu nhập tăng ít vì nhóm còn phải tìm khách.",
              "hieuUng": {
                "thuNhap": 300,
                "tayNghe": 15,
                "gan": 14
              },
              "nghe": "Nhân viên hỗ trợ kinh doanh nông sản"
            },
            {
              "chu": "Ưu tiên công việc có tiền công ổn định",
              "ketQua": "H'Hen dễ lập kế hoạch chi tiêu hơn và tiếp tục tích lũy kinh nghiệm. Tuy nhiên, lịch làm cố định khiến H'Hen ít thời gian tham gia nhóm ở quê.",
              "hieuUng": {
                "thuNhap": 600,
                "tayNghe": 8,
                "gan": -4
              },
              "nghe": "Nhân viên làm công hưởng lương"
            }
          ],
          "diaLi": "Liên kết sản xuất với thị trường có thể tạo thêm việc làm tại chỗ. Hiệu quả còn phụ thuộc khả năng tổ chức, chất lượng sản phẩm và sức mua."
        }
      ]
    },
    {
      "id": "tuan",
      "ten": "Tuấn",
      "emoji": "👷",
      "anh": "hinh/tuan.webp",
      "nen": "hinh/nen-dnb.webp",
      "vung": "DNB",
      "que": "Thủ Dầu Một (Bình Dương cũ, nay thuộc TP. Hồ Chí Minh)",
      "gioiThieu": "Tuấn sống giữa vùng có nhiều khu công nghiệp nhất cả nước. Xung quanh nhà là nhà máy, dãy trọ của công nhân từ khắp nơi đến.",
      "batDau": {
        "thuNhap": 3500,
        "tayNghe": 20,
        "gan": 50
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Ba khu công nghiệp gọi tên",
          "moTa": "Cổng nhà máy nào cũng treo băng rôn \"Tuyển gấp\". Tuấn có thể đi làm ngay, hoặc học thêm một nghề kĩ thuật.",
          "luaChon": [
            {
              "chu": "🏭 Vào làm công nhân dây chuyền ngay",
              "ketQua": "Có lương ngay, tăng ca nhiều thì thu nhập khá.",
              "hieuUng": {
                "thuNhap": 4000,
                "tayNghe": 5,
                "gan": 0
              },
              "nghe": "Công nhân dây chuyền"
            },
            {
              "chu": "🔧 Học cao đẳng Cơ điện tử 2 năm rồi mới đi làm",
              "ketQua": "Hai năm chỉ có tiền làm thêm, nhưng ra trường có tay nghề vững.",
              "hieuUng": {
                "thuNhap": 1500,
                "tayNghe": 25,
                "gan": 0
              },
              "nghe": "Kĩ thuật viên cơ điện tử"
            },
            {
              "chu": "🛵 Chạy giao hàng tự do",
              "ketQua": "Thu nhập khá, giờ giấc tự do, nhưng không có bảo hiểm.",
              "hieuUng": {
                "thuNhap": 4500,
                "tayNghe": 0,
                "gan": 0
              },
              "nghe": "Tài xế giao hàng"
            }
          ],
          "diaLi": "Đông Nam Bộ có nhiều khu công nghiệp nhất cả nước, thu hút nhiều vốn đầu tư nước ngoài; công nghiệp và dịch vụ phát triển mạnh. Vì vậy đây là vùng có thu nhập bình quân cao nhất (6.868 nghìn đồng/người/tháng năm 2024) và thu hút lao động từ khắp các vùng."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Robot vào nhà máy",
          "moTa": "Nhà máy đầu tư dây chuyền tự động hoá. Một nửa công nhân phổ thông sắp phải chuyển việc.",
          "luaChon": [
            {
              "chu": "🤖 Đăng kí khoá học vận hành máy tự động",
              "ketQua": "Tuấn trở thành người vận hành robot, lương tăng.",
              "hieuUng": {
                "thuNhap": 2000,
                "tayNghe": 15,
                "gan": 0
              }
            },
            {
              "chu": "📦 Chuyển sang việc bốc xếp kho, không cần học thêm",
              "ketQua": "Vẫn có việc, nhưng lương giảm và công việc nặng nhọc.",
              "hieuUng": {
                "thuNhap": -1000,
                "tayNghe": 0,
                "gan": 0
              }
            }
          ],
          "diaLi": "Khi doanh nghiệp đổi mới công nghệ, nhu cầu lao động tay nghề cao tăng, còn lao động phổ thông dễ mất việc. Nâng cao chất lượng nguồn lao động là xu hướng tất yếu."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "Vùng thu nhập cao, ai cũng lương cao?",
          "moTa": "Một người bạn nhận xét: 'Đông Nam Bộ có thu nhập bình quân cao thì người nào đến đó cũng chắc chắn tìm được việc lương cao.' Tuấn thấy nhận xét này còn thiếu điều kiện.",
          "cauHoi": "Cách giải thích nào phù hợp nhất?",
          "dapAn": [
            "Chỉ cần chuyển nơi ở là thu nhập tự động tăng.",
            "Vùng có nhiều cơ hội, nhưng việc làm và thu nhập cá nhân còn phụ thuộc kỹ năng, ngành nghề và nhu cầu tuyển dụng.",
            "Mọi doanh nghiệp trong vùng trả lương giống nhau.",
            "Thu nhập bình quân vùng chính là mức lương khởi điểm."
          ],
          "dung": 1,
          "giaiThich": "Chỉ tiêu bình quân phản ánh đặc điểm chung của vùng, không bảo đảm kết quả cho từng cá nhân. Người lao động vẫn cần đáp ứng yêu cầu công việc.",
          "thuong": {
            "thuNhap": 0,
            "tayNghe": 10
          },
          "diaLi": "Sự tập trung công nghiệp và dịch vụ góp phần tạo cơ hội việc làm, nhưng trong cùng một vùng vẫn có chênh lệch thu nhập."
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Hai hướng đi trong khu vực công nghiệp",
          "moTa": "Tuấn thấy hai vị trí nhận người mới và có đào tạo: hỗ trợ vận hành thiết bị tại xưởng hoặc xử lý hàng tại kho. Vị trí ở kho trả công ban đầu cao hơn; vị trí tại xưởng cần học kỹ thuật nhiều hơn.",
          "luaChon": [
            {
              "chu": "Học việc hỗ trợ vận hành thiết bị",
              "ketQua": "Tuấn học được nhiều thao tác kỹ thuật và quy trình an toàn. Thu nhập tăng ít hơn trong thời gian học việc, yêu cầu tập trung cũng cao hơn.",
              "hieuUng": {
                "thuNhap": 300,
                "tayNghe": 17,
                "gan": 3
              },
              "nghe": "Học việc vận hành thiết bị"
            },
            {
              "chu": "Nhận việc xử lý hàng tại kho",
              "ketQua": "Tuấn có mức tăng thu nhập lớn hơn trước mắt và học cách quản lý hàng. Đổi lại, công việc theo ca và có những đợt cao điểm bận rộn.",
              "hieuUng": {
                "thuNhap": 700,
                "tayNghe": 9,
                "gan": 3
              },
              "nghe": "Nhân viên kho"
            }
          ],
          "diaLi": "Hoạt động sản xuất gắn với nhu cầu kho bãi, vận chuyển và phân phối, tạo nhiều nhóm việc làm có yêu cầu kỹ năng khác nhau."
        },
        {
          "loai": "cauHoi",
          "nam": 4,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Năm 2024, Đông Nam Bộ có thu nhập cao nhất, nhưng giai đoạn 2010–2024 lại tăng chậm nhất (khoảng 3,1 lần). Vì sao?",
          "dapAn": [
            "Vì năm 2010 vùng đã có mức thu nhập cao nhất, xuất phát điểm cao nên tốc độ tăng (số lần) thấp hơn",
            "Vì kinh tế của vùng bị suy thoái",
            "Vì dân số của vùng giảm mạnh",
            "Vì vùng không còn khu công nghiệp nào"
          ],
          "dung": 0,
          "giaiThich": "Đông Nam Bộ tăng thêm 4.656 nghìn đồng – nhiều thứ hai về số tuyệt đối. Nhưng vì xuất phát cao (2.212 nghìn đồng năm 2010) nên tính theo số lần (6.868 ÷ 2.212 ≈ 3,1) lại thấp nhất. Khi nhận xét bảng số liệu, nhớ phân biệt tăng thêm bao nhiêu và tăng gấp bao nhiêu lần!",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Thu nhập hay thời gian cho gia đình?",
          "moTa": "Sau khi tìm hiểu điều kiện tuyển dụng, Tuấn có hai cơ hội phù hợp: một việc gần nhà với lịch làm dễ sắp xếp, một việc xa hơn trả công cao hơn nhưng yêu cầu luân phiên ca. Tuấn phải tính cả thời gian đi lại.",
          "luaChon": [
            {
              "chu": "Chọn việc gần nhà",
              "ketQua": "Tuấn có thêm thời gian cho người thân và sinh hoạt tại địa phương. Mức tăng thu nhập thấp hơn, phạm vi trải nghiệm công việc cũng hẹp hơn.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 7,
                "gan": 12
              },
              "nghe": "Nhân viên cơ sở gần nhà"
            },
            {
              "chu": "Chọn việc xa hơn, luân phiên ca",
              "ketQua": "Tuấn tăng thu nhập và làm quen với môi trường mới. Đổi lại, lịch sinh hoạt thay đổi, đi lại mất thời gian và ít tham gia hoạt động cùng gia đình.",
              "hieuUng": {
                "thuNhap": 800,
                "tayNghe": 11,
                "gan": -8
              },
              "nghe": "Nhân viên làm việc theo ca"
            }
          ],
          "diaLi": "Đánh giá một cơ hội việc làm cần cân nhắc thu nhập, kỹ năng, thời gian di chuyển và điều kiện sinh hoạt."
        }
      ]
    },
    {
      "id": "ut",
      "ten": "Út",
      "emoji": "🚣‍♀️",
      "anh": "hinh/ut.webp",
      "nen": "hinh/nen-dbscl.webp",
      "vung": "DBSCL",
      "que": "Cà Mau",
      "gioiThieu": "Út lớn lên bên sông rạch, rừng đước và những cánh đồng lúa – tôm của Cà Mau, mũi đất cực Nam của Tổ quốc.",
      "batDau": {
        "thuNhap": 2800,
        "tayNghe": 20,
        "gan": 75
      },
      "canh": [
        {
          "loai": "chon",
          "nam": 1,
          "tieuDe": "Ruộng lúa bị nhiễm mặn",
          "moTa": "Mùa khô năm nay nước mặn lấn sâu, ruộng lúa nhà Út bị cháy lá. Nhiều bạn cùng xóm đã khăn gói lên Đông Nam Bộ làm công nhân.",
          "luaChon": [
            {
              "chu": "🦐 Ở lại, chuyển sang mô hình tôm – lúa",
              "ketQua": "Mùa khô nuôi tôm, mùa mưa trồng lúa. Thu nhập ổn định hơn trước.",
              "hieuUng": {
                "thuNhap": 1200,
                "tayNghe": 15,
                "gan": 10
              },
              "nghe": "Nông dân tôm – lúa"
            },
            {
              "chu": "🚌 Lên Đông Nam Bộ làm công nhân",
              "ketQua": "Lương cao hơn ở quê, nhưng phải ở trọ, xa gia đình.",
              "hieuUng": {
                "thuNhap": 3500,
                "tayNghe": 5,
                "gan": -20
              },
              "nghe": "Công nhân khu công nghiệp"
            },
            {
              "chu": "🌳 Làm du lịch sinh thái rừng đước",
              "ketQua": "Út chèo xuồng đưa khách tham quan rừng ngập mặn, kể chuyện về đất mũi.",
              "hieuUng": {
                "thuNhap": 1500,
                "tayNghe": 10,
                "gan": 15
              },
              "nghe": "Hướng dẫn viên du lịch sinh thái"
            }
          ],
          "diaLi": "Đồng bằng sông Cửu Long là vùng sản xuất lúa và thuỷ sản lớn nhất nước ta, nhưng đang chịu tác động mạnh của biến đổi khí hậu và xâm nhập mặn. Nông nghiệp thu nhập chưa cao nên nhiều lao động trẻ di cư lên Đông Nam Bộ."
        },
        {
          "loai": "chon",
          "nam": 2,
          "tieuDe": "Thương lái ép giá",
          "moTa": "Vụ tôm được mùa nhưng thương lái ép giá rất thấp.",
          "luaChon": [
            {
              "chu": "🤝 Vào hợp tác xã, cùng bán cho nhà máy chế biến xuất khẩu",
              "ketQua": "Giá ổn định theo hợp đồng, có kĩ sư hướng dẫn nuôi đạt chuẩn.",
              "hieuUng": {
                "thuNhap": 800,
                "tayNghe": 10,
                "gan": 5
              }
            },
            {
              "chu": "💸 Bán vội cho thương lái",
              "ketQua": "Có tiền ngay nhưng lãi rất ít.",
              "hieuUng": {
                "thuNhap": -200,
                "tayNghe": 0,
                "gan": 0
              }
            }
          ],
          "diaLi": "Liên kết sản xuất (nông dân – hợp tác xã – doanh nghiệp) giúp nông sản có đầu ra ổn định, tăng giá trị và thu nhập cho người dân."
        },
        {
          "loai": "cauHoi",
          "nam": 3,
          "tieuDe": "Nhiều nông sản có đồng nghĩa thu nhập cao?",
          "moTa": "Út nghe nhận xét: 'Một vùng sản xuất nhiều nông sản, thủy sản thì chắc chắn thu nhập bình quân sẽ cao nhất.' Út nhớ rằng thu nhập còn liên quan đến cách sản xuất và tiêu thụ.",
          "cauHoi": "Vì sao chưa thể kết luận thu nhập bình quân chỉ từ lượng nông sản, thủy sản?",
          "dapAn": [
            "Vì nông nghiệp không tạo ra thu nhập.",
            "Vì mọi vùng có cơ cấu kinh tế giống hệt nhau.",
            "Vì thu nhập còn chịu ảnh hưởng của năng suất, giá trị sản phẩm, cơ cấu ngành và chất lượng việc làm.",
            "Vì người làm dịch vụ không được tính vào dân số."
          ],
          "dung": 2,
          "giaiThich": "Sản lượng chỉ phản ánh một mặt của sản xuất. Thu nhập còn liên quan đến năng suất lao động, chi phí, giá trị gia tăng và nhiều hoạt động kinh tế khác.",
          "thuong": {
            "thuNhap": 0,
            "tayNghe": 10
          },
          "diaLi": "Phân hóa thu nhập theo vùng có nhiều nguyên nhân; không thể giải thích chỉ bằng sản lượng của một nhóm sản phẩm."
        },
        {
          "loai": "chon",
          "nam": 4,
          "tieuDe": "Đi xa để tích lũy?",
          "moTa": "Út tìm được thông báo tuyển dụng đã xác minh tại một cơ sở sản xuất ngoài tỉnh. Ở quê, một cơ sở thu mua và bảo quản thủy sản cũng đang nhận người. Công việc ngoài tỉnh trả công cao hơn.",
          "luaChon": [
            {
              "chu": "Đi làm ngoài tỉnh",
              "ketQua": "Út tăng thu nhập và học cách làm việc trong môi trường mới. Đổi lại, Út phải thuê chỗ ở, xa gia đình và sắp xếp chi phí về quê.",
              "hieuUng": {
                "thuNhap": 800,
                "tayNghe": 10,
                "gan": -12
              },
              "nghe": "Nhân viên cơ sở sản xuất ngoài tỉnh"
            },
            {
              "chu": "Làm tại cơ sở thu mua, bảo quản ở quê",
              "ketQua": "Út học thêm về chất lượng nguyên liệu và được gần người thân. Mức tăng thu nhập thấp hơn; lượng việc phụ thuộc nguồn hàng và đơn đặt mua.",
              "hieuUng": {
                "thuNhap": 400,
                "tayNghe": 11,
                "gan": 12
              },
              "nghe": "Nhân viên thu mua và bảo quản thủy sản"
            }
          ],
          "diaLi": "Chênh lệch cơ hội việc làm góp phần thúc đẩy di cư lao động. Phát triển chế biến và dịch vụ hỗ trợ sản xuất có thể tạo thêm việc làm tại chỗ."
        },
        {
          "loai": "cauHoi",
          "nam": 4,
          "tieuDe": "❓ Câu hỏi chặn đường",
          "cauHoi": "Vì sao nhiều lao động trẻ ở Đồng bằng sông Cửu Long di cư lên Đông Nam Bộ?",
          "dapAn": [
            "Vì Đông Nam Bộ có nhiều khu công nghiệp, nhiều việc làm và thu nhập cao hơn, lại ở gần",
            "Vì Đồng bằng sông Cửu Long không còn đất ở",
            "Vì Đông Nam Bộ có nhiều ruộng lúa hơn",
            "Vì ở quê không có trường học"
          ],
          "dung": 0,
          "giaiThich": "Năm 2024, thu nhập bình quân ở Đông Nam Bộ là 6.868 nghìn đồng, cao hơn nhiều so với 4.770 nghìn đồng ở Đồng bằng sông Cửu Long. Hai vùng lại liền kề nhau, đi lại thuận tiện.",
          "thuong": {
            "thuNhap": 300,
            "tayNghe": 5
          }
        },
        {
          "loai": "chon",
          "nam": 5,
          "tieuDe": "Bắt đầu một công việc tự chủ",
          "moTa": "Một người quen rủ Út cùng bán sản phẩm thủy sản có nguồn gốc rõ ràng theo đơn đặt trước. Út có thể thử với quy mô nhỏ, hoặc ưu tiên một công việc làm thuê có lịch trả công rõ ràng.",
          "luaChon": [
            {
              "chu": "Thử bán theo đơn đặt trước với quy mô nhỏ",
              "ketQua": "Út học cách tìm khách, tính chi phí và phối hợp giao hàng. Trong năm thử nghiệm, thu nhập giảm vì phải dành thời gian xây dựng khách hàng; việc bảo quản vẫn là yêu cầu quan trọng.",
              "hieuUng": {
                "thuNhap": -200,
                "tayNghe": 16,
                "gan": 10
              },
              "nghe": "Kinh doanh thủy sản quy mô nhỏ"
            },
            {
              "chu": "Tiếp tục làm công để tích lũy",
              "ketQua": "Út dễ dự tính thu nhập và chưa phải tự gánh chi phí kinh doanh. Đổi lại, Út ít chủ động về lịch làm và chậm thực hiện ý tưởng riêng.",
              "hieuUng": {
                "thuNhap": 500,
                "tayNghe": 7,
                "gan": 3
              },
              "nghe": "Nhân viên làm công hưởng lương"
            }
          ],
          "diaLi": "Tự tạo việc làm và làm công hưởng lương đều là hướng mưu sinh. Kinh doanh cần thị trường, kỹ năng, vốn và khả năng tổ chức bảo quản, vận chuyển sản phẩm."
        }
      ]
    }
  ]
};
