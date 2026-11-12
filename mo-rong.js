/* =========================================================
   NỘI DUNG MỞ RỘNG
   - tamLy:    tâm lý từng nhân vật (xuất phát từ HOÀN CẢNH, không
               gán tính cách cho cả một vùng hay dân tộc)
   - suKien:   sự kiện có thật 2020–2024, mỗi sự kiện có nguồn.
               Mọi sự kiện phải khớp danh sách đã kiểm chứng trong
               kiem-tra/kiem-tra.js (năm, vùng, con số, nguồn).
   - thoiCuoc: chế độ "Thời cuộc 2019–2024"
   - ketThuc:  các kết thúc, xét theo thứ tự từ trên xuống
   Thu nhập trong game là SỐ MÔ PHỎNG, không phải số liệu thống kê.
   ========================================================= */
window.MO_RONG = {

  /* ======================= TÂM LÝ NHÂN VẬT ======================= */
  tamLy: {
    minh: {
      hoanCanh: "Lớn lên ở Hà Nội, bố mẹ kì vọng nhiều, bạn bè xung quanh ai cũng chạy đua vào đại học.",
      uocMo: { chu: "Trở thành người làm công nghệ giỏi", dieuKien: { tayNgheTu: 70 } },
      noiLo: "Áp lực so sánh với bạn bè; phân vân vì có quá nhiều lựa chọn.",
      coiTrong: { thuNhap: 0.3, tayNghe: 0.5, gan: 0.2 },
      suyNghi: {
        vui: ["Mỗi ngày học thêm được một thứ, thấy mình lớn lên thật.", "Hoá ra con đường riêng của mình cũng không tệ chút nào."],
        buon: ["Nhìn bạn bè khoe thành tích mà chột dạ…", "Chọn gì cũng thấy tiếc điều còn lại."],
        binhThuong: ["Chưa biết đúng hay sai, nhưng đây là lựa chọn của mình.", "Cứ đi từng bước, rồi sẽ rõ."]
      }
    },
    apao: {
      hoanCanh: "Nhà ở bản vùng cao, xa thị trấn; từ nhỏ đến giờ A Páo chưa từng sống xa gia đình.",
      uocMo: { chu: "Đưa chè và đặc sản quê mình đến với nhiều người hơn", dieuKien: { ganTu: 70, tayNgheTu: 50 } },
      noiLo: "Lần đầu xa nhà, sợ bị lạc lõng giữa nơi đông người.",
      coiTrong: { thuNhap: 0.2, tayNghe: 0.2, gan: 0.6 },
      suyNghi: {
        vui: ["Ở gần bố mẹ, chiều nào cũng thấy khói bếp của bản mình.", "Mình làm được! Tối nay kể cho cả nhà nghe."],
        buon: ["Nhớ nhà quá… không biết giờ này mẹ đã lùa trâu về chưa.", "Chỗ này đông người mà sao mình thấy lạc lõng thế."],
        binhThuong: ["Cứ từ từ, đi chậm mà chắc.", "Núi cao thì cũng phải leo từng bước."]
      }
    },
    lan: {
      hoanCanh: "Chị cả trong nhà; quê ven biển hay có bão, bố mẹ làm nông vất vả.",
      uocMo: { chu: "Xây lại ngôi nhà vững chãi cho bố mẹ trước mùa bão", dieuKien: { tnTu: 1.0 } },
      noiLo: "Bố mẹ ở nhà một mình mỗi khi bão về.",
      coiTrong: { thuNhap: 0.6, tayNghe: 0.1, gan: 0.3 },
      suyNghi: {
        vui: ["Tháng này gửi về cho mẹ được nhiều hơn rồi!", "Thêm một viên gạch cho ngôi nhà mới."],
        buon: ["Bão sắp vào, không biết mái nhà có chịu nổi không…", "Mình là chị cả, mình không được gục."],
        binhThuong: ["Tiết kiệm từng đồng, rồi sẽ đủ.", "Chậm một chút cũng được, miễn là chắc."]
      }
    },
    hhen: {
      hoanCanh: "Cả nhà sống nhờ vườn cà phê trên đất đỏ badan; năm được giá thì vui, mất giá thì lo.",
      uocMo: { chu: "Làm cà phê đặc sản mang tên buôn mình", dieuKien: { tayNgheTu: 60, ganTu: 60 } },
      noiLo: "Giá cà phê và thời tiết lên xuống thất thường.",
      coiTrong: { thuNhap: 0.4, tayNghe: 0.2, gan: 0.4 },
      suyNghi: {
        vui: ["Mùa này cà phê chín đỏ, cả buôn vui như hội.", "Mình đang làm điều bố mẹ chưa từng thử."],
        buon: ["Trời không mưa, giá lại xuống… lo quá.", "Làm cả năm mà lời chẳng được bao nhiêu."],
        binhThuong: ["Đất đỏ này nuôi mình lớn, mình phải giữ nó.", "Được mùa thì đừng vội vui, mất mùa thì đừng nản."]
      }
    },
    tuan: {
      hoanCanh: "Lớn lên giữa các khu công nghiệp; tìm được việc làm công nhân không mấy khó.",
      uocMo: { chu: "Thành kĩ thuật viên giỏi, không sợ bị máy móc thay thế", dieuKien: { tayNgheTu: 65 } },
      noiLo: "Dễ an phận vì có việc ngay; sợ một ngày robot làm thay mình.",
      coiTrong: { thuNhap: 0.4, tayNghe: 0.4, gan: 0.2 },
      suyNghi: {
        vui: ["Hôm nay sửa được cái máy mà cả tổ bó tay!", "Có nghề trong tay, đi đâu cũng không sợ."],
        buon: ["Tăng ca mãi, về đến phòng trọ chỉ muốn ngủ.", "Nếu mai nhà máy cắt giảm, mình sẽ làm gì?"],
        binhThuong: ["Việc thì có, nhưng mình muốn hơn thế.", "Cứ làm, cứ học, rồi sẽ khác."]
      }
    },
    ut: {
      hoanCanh: "Bạn bè cùng xóm lần lượt lên thành phố làm công nhân, xóm nhỏ vắng dần người trẻ.",
      uocMo: { chu: "Làm giàu từ tôm – rừng ngay trên quê mình", dieuKien: { ganTu: 70, tnTu: 0.8 } },
      noiLo: "Xóm vắng người trẻ; nước mặn mỗi năm một vào sâu hơn.",
      coiTrong: { thuNhap: 0.3, tayNghe: 0.1, gan: 0.6 },
      suyNghi: {
        vui: ["Chiều nay chèo xuồng qua rừng đước, thấy quê mình đẹp quá.", "Ở lại quê mà vẫn làm ăn được, vui ghê!"],
        buon: ["Lương cao thật… nhưng tối nào cũng nhớ tiếng xuồng máy ngoài sông.", "Xóm mình giờ chỉ còn ông bà với con nít."],
        binhThuong: ["Sống chung với nước mặn thì phải học cách thích nghi.", "Đi hay ở, mình đều phải tự lo."]
      }
    }
  },

  /* ======================= SỰ KIỆN CÓ THẬT ======================= */
  suKien: {
    "covid-du-lich-ha-giang-2021": {
      nam: 2021, tieuDe: "Du lịch Hà Giang chững lại vì COVID-19",
      tin: "Làn sóng COVID-19 thứ tư (từ cuối tháng 4/2021) khiến nhiều tour và phòng homestay ở Hà Giang bị huỷ. 6 tháng đầu năm 2021, tỉnh chỉ đón khoảng 642.000 lượt khách, bằng 38% so với bình thường.",
      nguon: { ten: "Vietstock, 2/7/2021", url: "https://en.vietstock.vn/2021/07/ha-giang-tourism-businesses-seeking-measures-to-survive-974-449460.htm" }
    },
    "goi-ho-tro-26000-ty-2021": {
      nam: 2021, tieuDe: "Gói hỗ trợ 26.000 tỷ đồng",
      tin: "Tháng 7/2021, Chính phủ triển khai gói hỗ trợ khoảng 26.000 tỷ đồng theo Nghị quyết 68 cho người lao động và người sử dụng lao động gặp khó khăn do COVID-19: hỗ trợ người ngừng việc, mất việc, tạm hoãn hợp đồng, hướng dẫn viên du lịch, hộ kinh doanh…",
      nguon: { ten: "VnEconomy, 12/7/2021", url: "https://vneconomy.vn/26-000-ty-dong-giup-dan-chong-dich-covid-19.htm" }
    },
    "ba-tai-cho-binh-duong-2021": {
      nam: 2021, tieuDe: "Công nhân làm việc \"3 tại chỗ\"",
      tin: "Năm 2021, trong làn sóng dịch thứ tư, nhiều nhà máy áp dụng phương án \"3 tại chỗ\": công nhân ăn, ngủ, làm việc ngay tại nhà máy. Riêng Bình Dương có hơn 3.700 doanh nghiệp đăng kí, với gần 390.000 lao động.",
      nguon: { ten: "VnExpress, 30/9/2021", url: "https://vnexpress.net/bi-hai-chuyen-3-tai-cho-4362844.html" }
    },
    "lao-dong-hoi-huong-2021": {
      nam: 2021, tieuDe: "Làn sóng lao động về quê",
      tin: "Trong và sau làn sóng COVID-19 thứ tư năm 2021, ít nhất 1,3 triệu lao động đã rời nơi làm việc để về quê (ước tính của Tổng cục Thống kê). Ở TP.HCM, Long An, Bình Dương, Đồng Nai, hơn 2 triệu lao động từ tỉnh khác có nguyện vọng về quê.",
      nguon: { ten: "VietTimes, 22/10/2021", url: "https://viettimes.vn/con-bao-13-trieu-lao-dong-hoi-huong-som-khien-dong-co-thieu-nhien-lieu-post151458.html" }
    },
    "phan-bon-tang-gia-2021": {
      nam: 2021, tieuDe: "Giá phân bón tăng vọt",
      tin: "Cuối năm 2021, giá phân bón tăng mạnh, có lúc tăng tới 80% so với trước. Nhiều nông dân lo lỗ vốn, có người tính bỏ ruộng đi làm thuê.",
      nguon: { ten: "VnExpress, 16/12/2021", url: "https://vnexpress.net/bo-ruong-vi-gia-phan-4403734.html" }
    },
    "xang-dau-ky-luc-2022": {
      nam: 2022, tieuDe: "Giá xăng cao kỷ lục",
      tin: "Ngày 21/6/2022, giá xăng RON95 lên tới 32.873 đồng/lít – mức cao kỷ lục. Chi phí đi lại, vận chuyển hàng hoá tăng theo.",
      nguon: { ten: "Luật sư Việt Nam (LSVN), 21/6/2022", url: "https://lsvn.vn/gia-xang-tang-len-gan-33000-dong-mot-lit1655811816-a120277.html" }
    },
    "mat-viec-nua-dau-2023": {
      nam: 2023, tieuDe: "Làn sóng mất việc ở các khu công nghiệp",
      tin: "Đơn hàng xuất khẩu giảm mạnh. 6 tháng đầu năm 2023, hơn 500.000 lao động bị ảnh hưởng việc làm, khoảng 54% trong số đó bị mất việc. Riêng Bình Dương có 71.590 lao động bị ảnh hưởng (theo Bộ Lao động – Thương binh và Xã hội).",
      nguon: { ten: "RFA tiếng Việt, 15/6/2023", url: "https://www.rfa.org/vietnamese/news/vietnamnews/over-500000-lost-job-or-not-having-enough-working-hrs-in-first-6-months-of-2023-06152023081536.html" }
    },
    "xuat-khau-lao-dong-nghe-an-2024": {
      nam: 2024, tieuDe: "Xuất khẩu lao động ở Nghệ An",
      tin: "Giai đoạn 2023–2024, Nghệ An đưa 46.157 người đi làm việc ở nước ngoài theo hợp đồng. Mỗi năm, người lao động gửi tiền về quê khoảng 600–650 triệu USD.",
      nguon: { ten: "VnEconomy", url: "https://vneconomy.vn/hai-nam-nghe-an-xuat-khau-hon-46-000-lao-dong.htm" }
    },
    "xam-nhap-man-2020": {
      nam: 2020, tieuDe: "Hạn mặn lịch sử",
      tin: "Mùa khô 2019–2020, xâm nhập mặn ở Đồng bằng sông Cửu Long đến sớm, kéo dài và lan rộng hơn cả đợt hạn mặn năm 2016: 10/13 tỉnh trong vùng bị ảnh hưởng.",
      nguon: { ten: "Tuổi Trẻ, 20/6/2020", url: "https://tuoitre.vn/xam-man-cao-hon-2016-nhung-giam-bot-thiet-hai-nho-chu-dong-2020062013335609.htm" }
    },
    "han-han-ca-mau-2024": {
      nam: 2024, tieuDe: "Cà Mau khẩn cấp vì hạn hán",
      tin: "Ngày 15/4/2024, Cà Mau công bố tình huống khẩn cấp về hạn hán, sụt lún, sạt lở do hạn ở hai huyện U Minh và Trần Văn Thời; kênh rạch cạn nước, nhiều nơi thiếu nước ngọt.",
      nguon: { ten: "VOH, 15/4/2024", url: "https://voh.com.vn/xa-hoi/ca-mau-cong-bo-tinh-huong-khan-cap-han-han-cap-2-523456.html" }
    },
    "ca-phe-ky-luc-2024": {
      nam: 2024, tieuDe: "Giá cà phê cao chưa từng thấy", tichCuc: true,
      tin: "Cuối tháng 11/2024, cà phê nhân ở Tây Nguyên có giá tới 120.000 đồng/kg, cao gấp khoảng 2,5 lần năm 2023.",
      nguon: { ten: "Tuổi Trẻ, 26/11/2024", url: "https://tuoitre.vn/gia-ca-phe-cao-chua-tung-thay-khi-vao-chinh-vu-nong-dan-thanh-dai-gia-2024112610524167.htm" }
    },
    "bao-yagi-2024": {
      nam: 2024, tieuDe: "Bão Yagi",
      tin: "Tháng 9/2024, bão Yagi (bão số 3) cùng mưa lũ sau bão làm 344 người chết và mất tích, thiệt hại ước hơn 81.503 tỷ đồng. Vùng núi phía Bắc chịu nhiều lũ quét, sạt lở; ở Hà Nội, nước sông Hồng dâng làm ngập nhiều khu vực ngoài đê.",
      nguon: { ten: "VTC News, 28/9/2024", url: "https://vtcnews.vn/344-nguoi-chet-va-mat-tich-thiet-hai-kinh-te-hon-81-000-ty-dong-do-bao-yagi-ar898721.html" }
    }
  },

  /* ======================= CHẾ ĐỘ THỜI CUỘC 2019–2024 ======================= */
  thoiCuoc: {

    /* ---------------- MINH – HÀ NỘI ---------------- */
    minh: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Hà Nội, mùa hè 2019",
        moTa: "Minh vừa thi xong tốt nghiệp THPT. Hà Nội có rất nhiều trường và rất nhiều chỗ tuyển người, nhưng bạn nào cũng đang chen chân vào cùng một vài ngành “hot”. Minh tính thế nào?",
        phieu: { loai: "thucTrang", chu: "Hà Nội có nhiều việc làm trong dịch vụ và công nghiệp, nhưng nhiều thanh niên cùng chọn một số ngành nên cạnh tranh việc làm rất cao." },
        luaChon: [
          { chu: "🎓 Vào đại học ngành Kĩ thuật máy tính, ở kí túc xá", ketQua: "Bốn năm học dài, chưa có lương, nhưng Minh được học bài bản và có nhiều bạn cùng chí hướng.", hieuUng: { thuNhap: 0, tayNghe: 18, gan: 0, tamTrang: 4 }, nghe: "Sinh viên Kĩ thuật máy tính" },
          { chu: "🛍️ Làm nhân viên bán hàng ở trung tâm thương mại, tối học thêm tin học", ketQua: "Có lương ngay từ tháng đầu, nhưng đứng quầy cả ngày rồi tối mới học nên Minh hay mệt.", hieuUng: { thuNhap: 5000, tayNghe: 6, gan: 0, tamTrang: -4 }, nghe: "Nhân viên bán hàng" },
          { chu: "🛠️ Học nghề sửa điện lạnh ngắn hạn, làm ở cửa hàng của bác", ketQua: "Vừa học vừa làm, có tiền công, lại được bác chỉ nghề tận tay.", hieuUng: { thuNhap: 3000, tayNghe: 12, gan: 5, tamTrang: -2 }, nghe: "Thợ sửa điện lạnh" }
        ],
        diaLi: "Hà Nội tập trung nhiều cơ sở đào tạo và việc làm trong công nghiệp, dịch vụ nên thu hút đông lao động trẻ. Chọn học tiếp hay đi làm sớm đều ảnh hưởng tới tay nghề và thu nhập về sau."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "goi-ho-tro-26000-ty-2021",
        tieuDe: "Thành phố tạm lặng",
        moTa: "Làn sóng dịch thứ tư ập đến. Cửa hàng nơi Minh làm thêm phải tạm đóng, việc học chuyển hết sang trực tuyến. Bố Minh – lái xe du lịch – cũng nghỉ việc nhiều tháng.",
        phieu: { loai: "thucTrang", chu: "Dịch COVID-19 năm 2021 khiến nhiều lao động ở Hà Nội ngừng việc, mất việc, nhất là trong dịch vụ, du lịch, vận tải." },
        luaChon: [
          { chu: "📝 Giúp bố làm hồ sơ xin hỗ trợ, rồi tự học lập trình trực tuyến", ketQua: "Gia đình nhận được một phần hỗ trợ; Minh dùng thời gian ở nhà để học thêm.", hieuUng: { thuNhap: -500, tayNghe: 15, gan: 5, tamTrang: 2 },
            phieuThem: { loai: "giaiPhap", chu: "Hỗ trợ trực tiếp người lao động ngừng việc, mất việc (gói 26.000 tỷ đồng theo Nghị quyết 68 năm 2021) để họ vượt qua khó khăn." } },
          { chu: "🛵 Chạy giao hàng thiết yếu cho các khu dân cư", ketQua: "Đơn hàng nhiều nên thu nhập khá, nhưng Minh mệt rã rời và luôn lo bị lây bệnh.", hieuUng: { thuNhap: 2500, tayNghe: 2, gan: 0, tamTrang: -8 }, nghe: "Nhân viên giao hàng" },
          { chu: "🙋 Làm tình nguyện viên ở điểm tiêm, phát quà cho người khó khăn", ketQua: "Không có lương, nhưng Minh thấy mình có ích và hiểu hơn cuộc sống của nhiều người.", hieuUng: { thuNhap: -500, tayNghe: 6, gan: 10, tamTrang: 8 }, dat: "tinhNguyen" }
        ],
        diaLi: "Dịch bệnh làm nhu cầu lao động trong dịch vụ giảm mạnh. Các gói hỗ trợ của Nhà nước giúp người lao động đảm bảo cuộc sống; kĩ năng số giúp thích ứng với việc học, việc làm trực tuyến."
      },
      {
        loai: "bienCo", nam: 2022, suKien: "xang-dau-ky-luc-2022",
        tieuDe: "Đổ xăng mà xót ruột",
        moTa: "Minh nhận chạy giao hàng buổi tối để có thêm tiền. Giá xăng tăng liên tục, mỗi đơn hàng tốn thêm tiền xăng mà tiền công gần như giữ nguyên.",
        phieu: { loai: "thucTrang", chu: "Giá cả (xăng dầu) tăng làm giảm thu nhập thực tế của lao động tự do như người giao hàng, xe ôm công nghệ." },
        luaChon: [
          { chu: "⛽ Chạy nhiều giờ hơn để bù tiền xăng", ketQua: "Thu nhập nhích lên một chút, nhưng Minh gần như không còn thời gian nghỉ.", hieuUng: { thuNhap: 300, tayNghe: 0, gan: 0, tamTrang: -8 } },
          { chu: "🚌 Chuyển sang làm trợ giảng tin học buổi tối, đi xe buýt", ketQua: "Lương thấp hơn nhưng ổn định, lại được ôn kiến thức chuyên môn.", hieuUng: { thuNhap: -300, tayNghe: 10, gan: 0, tamTrang: 3 } },
          { chu: "💻 Nhận làm web tự do qua mạng", ketQua: "Không tốn tiền xăng, nhưng có tháng nhiều việc, có tháng chẳng có ai thuê.", hieuUng: { thuNhap: 200, tayNghe: 8, gan: 0, tamTrang: -4 } }
        ],
        diaLi: "Khi giá cả tăng (lạm phát), cùng một khoản tiền mua được ít hàng hoá hơn. Người làm nghề tự do, thu nhập không cố định chịu ảnh hưởng rõ nhất."
      },
      {
        loai: "cauHoi", nam: 2023,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Giá xăng, giá thực phẩm tăng nhưng tiền công giữ nguyên. Vì sao đời sống người lao động lại khó khăn hơn?",
        dapAn: [
          "Vì thu nhập thực tế giảm: cùng số tiền đó mua được ít hàng hoá, dịch vụ hơn",
          "Vì tiền công đã bị Nhà nước cắt giảm",
          "Vì giá cả tăng thì số người đi làm cũng giảm",
          "Vì khi giá cả tăng, tiền tiết kiệm tự động mất hết"
        ],
        dung: 0,
        giaiThich: "Thu nhập thực tế phản ánh lượng hàng hoá, dịch vụ mua được. Khi giá cả tăng nhanh hơn tiền công, thu nhập thực tế giảm dù số tiền nhận được không đổi.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2024, suKien: "bao-yagi-2024",
        tieuDe: "Sau cơn bão Yagi",
        moTa: "Bão Yagi quật đổ hàng nghìn cây xanh ở Hà Nội, rồi nước sông Hồng dâng cao làm ngập nhiều khu dân cư ngoài đê.",
        phieu: { loai: "yNghia", chu: "Có việc làm ổn định, có bảo hiểm giúp người lao động và gia đình đứng vững khi thiên tai, dịch bệnh xảy ra." },
        luaChon: [
          { chu: "🦺 Cùng Đoàn thanh niên giúp bà con vùng ngập chuyển đồ", ketQua: "Mấy ngày liền không làm được gì cho mình, nhưng Minh thấy ấm lòng.", hieuUng: { thuNhap: -300, tayNghe: 3, gan: 12, tamTrang: 6 }, dat: "giupBaCon" },
          { chu: "🔧 Nhận sửa điện, sửa máy bơm cho các nhà bị ngập", ketQua: "Việc rất nhiều, Minh làm xuyên đêm; vừa có thu nhập vừa giúp được hàng xóm.", hieuUng: { thuNhap: 800, tayNghe: 10, gan: 6, tamTrang: -4 } },
          { chu: "🏠 Ở yên trong nhà, tiếp tục công việc trực tuyến", ketQua: "An toàn, công việc không bị gián đoạn, nhưng Minh thấy mình hơi đứng ngoài chuyện của mọi người.", hieuUng: { thuNhap: 200, tayNghe: 2, gan: -5, tamTrang: 6 } }
        ],
        diaLi: "Đồng bằng sông Hồng đông dân, mưa bão lớn dễ gây ngập úng ở đô thị và vùng ven sông. Thiên tai làm gián đoạn sản xuất, nhưng cũng tạo nhu cầu việc làm trong sửa chữa, tái thiết."
      },
      {
        loai: "chon", nam: 2024,
        tieuDe: "Cuối năm 2024: chọn chỗ đứng",
        moTa: "Đi qua dịch bệnh, giá xăng tăng và cơn bão Yagi, Minh nhận ra mình cần một công việc vững vàng. Cuối năm 2024, có ba hướng đi đang chờ Minh.",
        phieu: { loai: "giaiPhap", chu: "Phát triển dịch vụ kĩ thuật và tự tạo việc làm ở ngoại thành giúp giảm sức ép việc làm cho nội thành Hà Nội." },
        luaChon: [
          { chu: "🏢 Làm kĩ thuật viên công nghệ thông tin cho một công ty vận tải, kho bãi ở Long Biên", ketQua: "Lương khá và ổn định, nhưng công ty cần người trực cả cuối tuần.", hieuUng: { thuNhap: 5500, tayNghe: 12, gan: -3, tamTrang: -2 }, nghe: "Kĩ thuật viên CNTT" },
          { chu: "🧑‍🏫 Mở lớp dạy tin học, sửa máy tính cho người dân ở xã ngoại thành quê mẹ", ketQua: "Thu nhập không cao, nhưng Minh có việc làm tự chủ và giúp nhiều người dùng được dịch vụ công trực tuyến.", hieuUng: { thuNhap: 3000, tayNghe: 8, gan: 18, tamTrang: 4 }, nghe: "Chủ lớp tin học" },
          { chu: "✈️ Thi tuyển sang Nhật làm kĩ sư phần mềm theo hợp đồng", ketQua: "Thu nhập cao gấp nhiều lần, nhưng Minh phải xa gia đình và học tiếng Nhật từ đầu.", hieuUng: { thuNhap: 8500, tayNghe: 10, gan: -20, tamTrang: -4 }, nghe: "Kĩ sư phần mềm ở Nhật", dat: ["diXa", "xaQue"] }
        ],
        diaLi: "Sau những năm biến động, người lao động có kĩ năng số và chuyên môn kĩ thuật dễ tìm được việc làm ổn định, thu nhập cao hơn. Tự tạo việc làm ở ngoại thành giúp giảm sức ép việc làm lên nội thành Hà Nội."
      }
    ],

    /* ---------------- A PÁO – TRUNG DU VÀ MIỀN NÚI PHÍA BẮC ---------------- */
    apao: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Đồng Văn, cuối năm 2019",
        moTa: "Khách du lịch lên cao nguyên đá mỗi năm một đông. Bạn bè cùng lớp của A Páo, người ở lại bản, người theo nhau về xuôi làm công nhân. Páo chọn gì?",
        luaChon: [
          { chu: "🧺 Vào hợp tác xã học làm chè shan tuyết, mật ong bạc hà", ketQua: "Thu nhập ít, nhưng Páo học được nghề và được ở gần bố mẹ.", hieuUng: { thuNhap: 600, tayNghe: 12, gan: 14 }, nghe: "Xã viên hợp tác xã" },
          { chu: "🏍️ Phụ việc ở homestay, chở khách đi các cung đèo", ketQua: "Mùa khách đông có thu nhập khá, Páo còn tập nói tiếng Anh với khách nước ngoài.", hieuUng: { thuNhap: 2000, tayNghe: 8, gan: 5, tamTrang: 2 }, nghe: "Nhân viên homestay" },
          { chu: "🚌 Theo bạn về Bắc Ninh làm công nhân lắp ráp điện tử", ketQua: "Lương cao hơn ở bản nhiều, nhưng Páo phải ở trọ, làm theo ca và rất nhớ nhà.", hieuUng: { thuNhap: 3800, tayNghe: 4, gan: -18, tamTrang: -4 }, nghe: "Công nhân lắp ráp điện tử", dat: "diXa" }
        ],
        diaLi: "Ở Trung du và miền núi phía Bắc, việc làm phi nông nghiệp còn ít nên nhiều thanh niên di cư về các khu công nghiệp ở đồng bằng. Du lịch cộng đồng và đặc sản địa phương mở thêm việc làm tại chỗ, góp phần tăng thu nhập."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "covid-du-lich-ha-giang-2021",
        tieuDe: "Bản vắng khách",
        moTa: "Khách du lịch lên Hà Giang thưa hẳn; nhiều homestay trong xã đóng cửa. Những việc A Páo nhận được gần như dừng lại.",
        luaChon: [
          { chu: "📱 Cùng bạn bè bán chè, mật ong qua mạng", ketQua: "Đơn hàng lúc nhiều lúc ít, nhưng gia đình có thêm khoản thu; Páo học được cách chụp ảnh, trả lời khách.", hieuUng: { thuNhap: -300, tayNghe: 12, gan: 8 } },
          { chu: "🏗️ Xuống xuôi làm phụ hồ ở công trình", ketQua: "Có tiền công đều hơn, nhưng việc nặng, ở lán tạm và lo lắng vì dịch.", hieuUng: { thuNhap: 500, tayNghe: 3, gan: -12, tamTrang: -5 }, nghe: "Thợ phụ công trình", dat: "diXa" },
          { chu: "🌱 Ở nhà phụ bố mẹ làm nương, chờ hết dịch", ketQua: "Thu nhập giảm mạnh, nhưng cả nhà ở bên nhau an toàn.", hieuUng: { thuNhap: -800, tayNghe: 2, gan: 12, tamTrang: 4 } }
        ],
        diaLi: "Du lịch là ngành dịch vụ chịu ảnh hưởng nặng khi có dịch bệnh. Đa dạng nguồn thu (nông sản đặc sản, bán hàng trực tuyến) giúp người dân vùng cao bớt phụ thuộc vào một ngành. Khi du lịch ngừng, nhiều lao động vùng núi mất việc làm, thu nhập giảm mạnh."
      },
      {
        loai: "bienCo", nam: 2022, suKien: "xang-dau-ky-luc-2022",
        tieuDe: "Đường xa, xăng đắt",
        moTa: "Giá xăng tăng liên tục. Chở một chuyến chè từ bản xuống chợ huyện giờ tốn hơn hẳn trước, thương lái cũng ép giá vì \"đường xa, xăng đắt\".",
        luaChon: [
          { chu: "🤝 Góp chung với các hộ thuê một chuyến xe chở hàng", ketQua: "Chia nhau tiền xe nên đỡ tốn, nhưng phải chờ đủ hàng mới đi, có lúc chè để lâu kém tươi.", hieuUng: { thuNhap: 200, tayNghe: 4, gan: 8, tamTrang: -8 } },
          { chu: "🛵 Vẫn tự chở bằng xe máy như cũ", ketQua: "Không phải chờ ai, nhưng tiền xăng ăn gần hết phần lãi.", hieuUng: { thuNhap: -400, tayNghe: 0, gan: 3, tamTrang: 2 } },
          { chu: "🏭 Xin làm ở cơ sở chế biến chè của huyện", ketQua: "Lương tháng ổn định, không phụ thuộc giá xăng; nhưng phải ở trọ dưới huyện cả tuần.", hieuUng: { thuNhap: 900, tayNghe: 10, gan: -10, tamTrang: -3 }, nghe: "Công nhân chế biến chè" }
        ],
        diaLi: "Giá xăng dầu tăng làm chi phí vận chuyển tăng, ảnh hưởng nặng tới vùng núi vì quãng đường xa, đường đèo dốc. Liên kết sản xuất và chế biến tại chỗ giúp giảm chi phí. Chi phí tăng làm thu nhập thực tế của người làm nông vùng núi giảm; chế biến tại chỗ còn tạo thêm việc làm."
      },
      {
        loai: "cauHoi", nam: 2023,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Vì sao khi giá xăng dầu tăng, người bán nông sản ở vùng núi thường chịu thiệt nhiều hơn ở đồng bằng?",
        dapAn: [
          "Vì hàng phải chở quãng đường xa, đường đèo dốc nên chi phí vận chuyển chiếm phần lớn",
          "Vì ở vùng núi xăng dầu được bán với giá gấp đôi",
          "Vì nông sản vùng núi không ai mua",
          "Vì vùng núi không có chợ"
        ],
        dung: 0,
        giaiThich: "Địa hình hiểm trở, xa thị trường làm chi phí vận chuyển ở vùng núi cao. Khi giá nhiên liệu tăng, phần lãi của người bán bị thu hẹp nhiều hơn.",
        diaLi: "Vì vậy thu nhập của người dân vùng núi cao thường thấp; làm đường giao thông, chế biến tại chỗ giúp mở thêm việc làm.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2024, suKien: "bao-yagi-2024",
        tieuDe: "Sạt lở sau bão",
        moTa: "Mưa lũ sau bão Yagi gây sạt lở khắp vùng núi phía Bắc. Đường lên bản bị đất đá vùi lấp, nương chè nhà A Páo bị sạt mất một góc.",
        luaChon: [
          { chu: "🦺 Tham gia đội thanh niên dọn đường, giúp bà con", ketQua: "Mấy tuần không kiếm được đồng nào, nhưng cả bản cùng nhau đứng dậy.", hieuUng: { thuNhap: -500, tayNghe: 4, gan: 15, tamTrang: 6 } },
          { chu: "🧳 Xuống xuôi làm thêm để có tiền sửa nhà", ketQua: "Có tiền gửi về sửa nhà, trồng lại chè; nhưng Páo vắng mặt đúng lúc cả nhà cần.", hieuUng: { thuNhap: 800, tayNghe: 4, gan: -12, tamTrang: -6 }, dat: "diXa" },
          { chu: "📚 Học lớp trồng cây giữ đất, phòng chống thiên tai của xã", ketQua: "Páo hiểu vì sao đồi trọc dễ sạt lở và cùng cả bản trồng lại rừng đầu nguồn.", hieuUng: { thuNhap: -200, tayNghe: 12, gan: 6, tamTrang: 2 } }
        ],
        diaLi: "Vùng núi có địa hình dốc, mưa lớn dễ gây lũ quét, sạt lở. Trồng và bảo vệ rừng đầu nguồn, di dời dân khỏi vùng nguy hiểm là giải pháp lâu dài. Thiên tai làm nhiều người mất việc làm tạm thời, thu nhập giảm – một lí do khiến thu nhập ở vùng núi thấp nhất cả nước."
      },
      {
        loai: "chon", nam: 2024,
        tieuDe: "Sửa lại nhà sau mùa mưa bão",
        moTa: "Cuối năm 2024, con đường vào bản đã thông, nhà cửa đang được sửa lại. Gia đình cần tiền, còn hợp tác xã thì cần người trẻ ở lại.",
        luaChon: [
          { chu: "🏡 Ở lại bản, cùng hợp tác xã nhận đơn hàng nông sản qua mạng", ketQua: "Thu nhập tăng chậm, nhưng Páo giúp cả bản bán được hàng mà không phải đi xa.", hieuUng: { thuNhap: 500, tayNghe: 10, gan: 15, tamTrang: 3 } },
          { chu: "🧳 Xuống xuôi làm ở khu công nghiệp, gửi tiền về sửa nhà", ketQua: "Mỗi tháng gửi về được một khoản, nhưng Páo lại phải xa bản thêm nhiều năm.", hieuUng: { thuNhap: 1500, tayNghe: 5, gan: -15, tamTrang: -4 }, dat: ["diXa", "xaQue"] }
        ],
        diaLi: "Phát triển kinh tế tại chỗ (nông sản đặc sản, du lịch, bán hàng trực tuyến) giúp tạo việc làm, giữ lao động trẻ ở lại vùng núi. Nếu thiếu việc làm tại chỗ, lao động sẽ tiếp tục di cư về đồng bằng, đô thị để có thu nhập cao hơn."
      }
    ],

    /* ---------------- LAN – BẮC TRUNG BỘ ---------------- */
    lan: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Nghệ An, mùa hè 2019",
        moTa: "Lan vừa tốt nghiệp lớp 12. Nhà máy trong khu kinh tế gần nhà đang tuyển công nhân, trường trung cấp ở Vinh cũng đang tuyển sinh, còn bố thì cần người phụ ao tôm.",
        luaChon: [
          { chu: "🏭 Vào làm công nhân may trong khu kinh tế, đi xe đưa đón", ketQua: "Có lương đều đặn ngay, nhưng việc lặp đi lặp lại, ít cơ hội học thêm.", hieuUng: { thuNhap: 2800, tayNghe: 8, gan: 6, tamTrang: -2 }, nghe: "Công nhân may" },
          { chu: "📚 Học trung cấp điện công nghiệp ở Vinh, cuối tuần phụ quán của mẹ", ketQua: "Hai năm chưa có lương, nhưng có nghề vững để xin vào nhà máy sau này.", hieuUng: { thuNhap: 600, tayNghe: 16, gan: 8, tamTrang: 2 }, nghe: "Học viên điện công nghiệp" },
          { chu: "🦐 Ở nhà cùng bố nuôi tôm trên cát, nhận thêm việc thời vụ", ketQua: "Gần gia đình, có thêm chút thu nhập, nhưng nghề nuôi tôm nhiều rủi ro.", hieuUng: { thuNhap: 1500, tayNghe: 6, gan: 14, tamTrang: -3 }, nghe: "Lao động nuôi trồng thủy sản" }
        ],
        diaLi: "Bắc Trung Bộ có nhiều lao động trẻ nhưng việc làm công nghiệp còn ít, nên nhiều người di cư vào phía Nam hoặc đi làm việc ở nước ngoài. Các khu kinh tế ven biển và đào tạo nghề đang tạo thêm việc làm, giúp tăng thu nhập ngay tại quê."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "lao-dong-hoi-huong-2021",
        tieuDe: "Em trai về quê",
        moTa: "Cuối năm, em trai Lan cùng nhiều người trong xã chạy xe máy từ phía Nam về quê sau nhiều tháng giãn cách. Em mất việc, trong túi chỉ còn ít tiền.",
        luaChon: [
          { chu: "🔧 Bảo em học nghề hàn ở quê, Lan đóng học phí giúp", ketQua: "Lan phải thắt lưng buộc bụng, nhưng em có nghề và ở gần nhà.", hieuUng: { thuNhap: -600, tayNghe: 4, gan: 10, tamTrang: 4 } },
          { chu: "💼 Nhờ người quen xin cho em vào làm cùng khu kinh tế", ketQua: "Hai chị em cùng đi làm, đỡ đần được bố mẹ; Lan phải chịu trách nhiệm thêm cho em.", hieuUng: { thuNhap: 300, tayNghe: 6, gan: 6, tamTrang: -4 } },
          { chu: "🚌 Khuyên em sớm quay lại phía Nam khi nhà máy mở cửa", ketQua: "Em đi làm lại nhanh, gửi tiền về đều; nhưng nhà lại vắng người mỗi mùa bão.", hieuUng: { thuNhap: 500, tayNghe: 0, gan: -8, tamTrang: -6 } }
        ],
        diaLi: "Dòng lao động hồi hương năm 2021 rất lớn, tạo sức ép việc làm ở các tỉnh quê. Đào tạo nghề và thu hút đầu tư vào khu kinh tế giúp giữ chân lao động ở địa phương."
      },
      {
        loai: "bienCo", nam: 2022, suKien: "xang-dau-ky-luc-2022",
        tieuDe: "Đường đi làm đắt đỏ",
        moTa: "Lan đi làm ở khu kinh tế cách nhà gần 30 km bằng xe máy. Giá xăng tăng vọt, tiền xăng mỗi tháng chiếm một phần không nhỏ trong lương.",
        luaChon: [
          { chu: "🛏️ Thuê phòng trọ gần khu kinh tế", ketQua: "Đỡ mệt vì không phải chạy xa, nhưng mất tiền trọ và chỉ cuối tuần mới về nhà.", hieuUng: { thuNhap: -300, tayNghe: 0, gan: -8, tamTrang: 2 } },
          { chu: "🚌 Đi xe đưa đón của công ty, dậy sớm hơn 1 tiếng", ketQua: "Tiết kiệm được tiền xăng nhưng ngày nào cũng thiếu ngủ.", hieuUng: { thuNhap: 200, tayNghe: 0, gan: 2, tamTrang: -6 } },
          { chu: "📈 Học thêm vận hành máy để được giao việc lương cao hơn", ketQua: "Vài tháng đầu vất vả và tốn tiền học, nhưng tay nghề lên rõ.", hieuUng: { thuNhap: -200, tayNghe: 12, gan: 0, tamTrang: -3 } }
        ],
        diaLi: "Khi giá xăng dầu tăng, chi phí đi lại chiếm phần lớn hơn trong thu nhập của công nhân ở xa nơi làm việc. Nhà ở cho công nhân, xe đưa đón là những giải pháp giúp giảm chi phí."
      },
      {
        loai: "cauHoi", nam: 2023,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Vì sao nhiều người ở Bắc Trung Bộ, nhất là Nghệ An, đi làm việc ở nước ngoài?",
        dapAn: [
          "Vì vùng có nhiều khu công nghiệp nhất cả nước",
          "Vì dân số đông, việc làm tại chỗ chưa nhiều, thu nhập còn thấp, lại hay chịu thiên tai",
          "Vì ở nước ngoài không cần học tiếng",
          "Vì Bắc Trung Bộ không có trường học"
        ],
        dung: 1,
        giaiThich: "Bắc Trung Bộ đông dân, công nghiệp chưa phát triển mạnh, nông nghiệp hay bị bão lũ, hạn hán. Đi làm việc ở nước ngoài giúp người lao động có thu nhập cao hơn và gửi tiền về giúp gia đình.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2024, suKien: "xuat-khau-lao-dong-nghe-an-2024",
        tieuDe: "Lời mời sang Nhật",
        moTa: "Quê Lan rộn ràng phong trào đi làm việc ở nước ngoài. Một công ty mời Lan đi Nhật Bản theo hợp đồng 3 năm, nhưng phải nộp một khoản chi phí ban đầu và học tiếng 6 tháng.",
        luaChon: [
          { chu: "✈️ Vay tiền, học tiếng để đi Nhật", ketQua: "Lan sang Nhật, thu nhập cao gấp nhiều lần ở quê; nhưng xa nhà, phải trả nợ khoản vay ban đầu.", hieuUng: { thuNhap: 3000, tayNghe: 8, gan: -15, tamTrang: -4 }, nghe: "Lao động theo hợp đồng ở Nhật Bản", dat: ["diXa", "xaQue"],
            suyNghi: "3 năm thôi, về sẽ xây lại nhà cho bố mẹ." },
          { chu: "🏭 Ở lại, nhận làm tổ trưởng ở khu kinh tế", ketQua: "Lương tăng vừa phải, Lan được ở gần bố mẹ, mỗi mùa bão đều có mặt ở nhà.", hieuUng: { thuNhap: 800, tayNghe: 8, gan: 8, tamTrang: 4 }, nghe: "Tổ trưởng sản xuất khu kinh tế" },
          { chu: "🔎 Tìm hiểu kĩ, thi tuyển chương trình của Nhà nước dù phải chờ lâu", ketQua: "Chi phí thấp, an toàn hơn, nhưng phải ôn thi tiếng và chờ đợi, tạm thời thu nhập giảm.", hieuUng: { thuNhap: -300, tayNghe: 14, gan: -6, tamTrang: 2 } }
        ],
        diaLi: "Xuất khẩu lao động giúp người lao động có thu nhập cao, tiền gửi về quê góp phần giảm nghèo. Tuy vậy, cần tìm hiểu kĩ công ty, hợp đồng để tránh bị lừa đảo."
      }
    ],

    /* ---------------- H'HEN – DUYÊN HẢI NAM TRUNG BỘ VÀ TÂY NGUYÊN ---------------- */
    hhen: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Mùa hoa cà phê 2019",
        moTa: "Vườn cà phê nhà H'Hen đang ra hoa trắng cả đồi. Thu nhập của cả nhà phụ thuộc vào một vụ thu hoạch mỗi năm; lúc nông nhàn, nhiều người trong buôn không có việc.",
        luaChon: [
          { chu: "🌿 Học trồng cà phê bền vững với cán bộ khuyến nông", ketQua: "Thu nhập chưa tăng ngay, nhưng H'Hen nắm được kĩ thuật để vườn nhà cho năng suất ổn định.", hieuUng: { thuNhap: 800, tayNghe: 14, gan: 10 }, nghe: "Nông dân trẻ" },
          { chu: "🛍️ Ra Buôn Ma Thuột làm nhân viên bán hàng ở siêu thị", ketQua: "Lương tháng đều đặn, nhưng mỗi tuần H'Hen chỉ về buôn được một lần.", hieuUng: { thuNhap: 2200, tayNghe: 6, gan: -6, tamTrang: -2 }, nghe: "Nhân viên bán hàng" },
          { chu: "🏨 Xuống Nha Trang làm phục vụ nhà hàng", ketQua: "Mùa du lịch có tiền boa khá, nhưng H'Hen ở xa nhà và làm đến khuya.", hieuUng: { thuNhap: 3000, tayNghe: 6, gan: -15, tamTrang: -3 }, nghe: "Nhân viên nhà hàng", dat: "diXa" }
        ],
        diaLi: "Tây Nguyên có nhiều lao động làm nông nghiệp theo mùa vụ nên tình trạng thiếu việc làm lúc nông nhàn còn phổ biến. Đô thị trong vùng và các thành phố du lịch ven biển tạo thêm việc làm dịch vụ với thu nhập ổn định hơn."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "phan-bon-tang-gia-2021",
        tieuDe: "Bón phân hay không bón?",
        moTa: "Cuối năm, đúng lúc vườn cà phê cần bón phân, giá phân bón tăng mạnh. Bố H'Hen tính toán mãi: bón đủ thì sợ lỗ, bón ít thì cây yếu.",
        luaChon: [
          { chu: "🌿 Tự ủ phân hữu cơ từ vỏ cà phê, phân chuồng", ketQua: "Tốn công nhưng đỡ tiền; đất tơi xốp hơn, năm đầu năng suất hơi giảm.", hieuUng: { thuNhap: -200, tayNghe: 12, gan: 8, tamTrang: -2 } },
          { chu: "💳 Vay tiền mua đủ phân như mọi năm", ketQua: "Năng suất giữ được, nhưng khoản nợ làm cả nhà lo lắng.", hieuUng: { thuNhap: 300, tayNghe: 0, gan: 2, tamTrang: -8 } },
          { chu: "🧺 Bón ít đi, H'Hen đi hái cà phê thuê cho các vườn lớn", ketQua: "Có thêm tiền công, nhưng vườn nhà ít người chăm.", hieuUng: { thuNhap: 100, tayNghe: 3, gan: -2, tamTrang: -3 } }
        ],
        diaLi: "Phân bón là chi phí lớn của người trồng cây công nghiệp. Khi giá vật tư tăng, lợi nhuận giảm; dùng phân hữu cơ giúp giảm chi phí và giữ độ phì của đất badan. Khi chi phí tăng mà giá bán không tăng, thu nhập của người trồng cà phê giảm."
      },
      {
        loai: "bienCo", nam: 2022, suKien: "xang-dau-ky-luc-2022",
        tieuDe: "Tưới cây bằng máy dầu",
        moTa: "Mùa khô, nhà H'Hen phải chạy máy bơm dầu để tưới cà phê. Giá xăng dầu tăng liên tục, mỗi đợt tưới tốn hơn hẳn năm trước.",
        luaChon: [
          { chu: "💧 Góp vốn lắp máy bơm điện, tưới nhỏ giọt", ketQua: "Bỏ vốn ban đầu khá lớn, nhưng tiết kiệm nước và nhiên liệu cho nhiều năm sau.", hieuUng: { thuNhap: -400, tayNghe: 12, gan: 4, tamTrang: 2 } },
          { chu: "⛽ Vẫn tưới bằng máy dầu, giảm số lần tưới", ketQua: "Đỡ tiền dầu, nhưng cây hơi héo, cả nhà thấp thỏm chờ mưa.", hieuUng: { thuNhap: -200, tayNghe: 0, gan: 2, tamTrang: -5 } },
          { chu: "☕ Mở góc bán cà phê rang xay cho khách qua đường", ketQua: "Có thêm khoản thu đều đặn, H'Hen học được cách rang và pha cà phê.", hieuUng: { thuNhap: 500, tayNghe: 8, gan: -3, tamTrang: -2 } }
        ],
        diaLi: "Tây Nguyên có mùa khô kéo dài, phải tưới nhiều cho cây cà phê. Giá nhiên liệu tăng làm chi phí sản xuất tăng; tưới tiết kiệm giúp giảm chi phí và giữ nguồn nước. Chi phí sản xuất cao làm thu nhập của nông hộ Tây Nguyên kém ổn định."
      },
      {
        loai: "cauHoi", nam: 2023,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Vì sao người trồng cà phê dễ bị ảnh hưởng khi giá phân bón, xăng dầu tăng?",
        dapAn: [
          "Vì cà phê không cần chăm sóc gì",
          "Vì cà phê chỉ bán được trong nước",
          "Vì phân bón và nhiên liệu tưới là chi phí đầu vào lớn, giá vật tư tăng làm lợi nhuận giảm",
          "Vì người trồng cà phê không được vay vốn"
        ],
        dung: 2,
        giaiThich: "Trồng cà phê cần nhiều phân bón và nước tưới trong mùa khô. Khi giá vật tư, nhiên liệu tăng mà giá bán không tăng tương ứng, lợi nhuận của người trồng giảm.",
        diaLi: "Vì vậy thu nhập của nông hộ trồng cà phê phụ thuộc nhiều vào giá vật tư và giá bán.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2024, suKien: "ca-phe-ky-luc-2024",
        tieuDe: "Mùa cà phê được giá",
        moTa: "Mùa khô đầu năm nắng hạn gay gắt, nhưng cuối năm giá cà phê lên cao chưa từng thấy. Cả buôn rộn ràng vào mùa thu hoạch.",
        luaChon: [
          { chu: "🏍️ Mua xe máy mới, sửa lại nhà ngay", ketQua: "Cả nhà vui, cuộc sống tiện hơn; nhưng nếu năm sau giá xuống thì không có tiền dự phòng.", hieuUng: { thuNhap: 1500, tayNghe: 0, gan: 5, tamTrang: 6 } },
          { chu: "🔥 Để dành tiền, đầu tư máy sấy, làm cà phê đặc sản", ketQua: "Chưa tiêu được nhiều, nhưng H'Hen bắt đầu có sản phẩm mang tên buôn mình.", hieuUng: { thuNhap: 900, tayNghe: 12, gan: 6, tamTrang: 2 }, dat: "caPheDacSan" },
          { chu: "🌳 Chặt bớt cây ăn quả để trồng thêm cà phê", ketQua: "Thu nhập trước mắt tăng, nhưng nếu giá cà phê giảm thì rủi ro lớn vì \"bỏ hết trứng vào một giỏ\".", hieuUng: { thuNhap: 1800, tayNghe: 2, gan: 2, tamTrang: -2 } }
        ],
        diaLi: "Giá nông sản xuất khẩu phụ thuộc thị trường thế giới, có năm rất cao, có năm rất thấp. Không nên chạy theo giá mà phá bỏ cây trồng khác; đa dạng cây trồng giúp thu nhập ổn định."
      },
      {
        loai: "chon", nam: 2024,
        tieuDe: "Cuối năm 2024: giữ được lộc vườn",
        moTa: "Năm nay cà phê được giá, cả buôn vui như Tết. Nhưng H'Hen biết giá có thể giảm bất cứ năm nào. Làm gì để thu nhập ổn định hơn?",
        luaChon: [
          { chu: "🤝 Cùng thanh niên trong buôn lập tổ hợp tác sơ chế, đóng gói cà phê", ketQua: "Năm đầu còn vất vả tìm khách, nhưng cả nhóm có việc làm ngay tại buôn.", hieuUng: { thuNhap: 400, tayNghe: 14, gan: 14, tamTrang: 2 }, dat: "nhomQue" },
          { chu: "💼 Làm kế toán cho một đại lí thu mua ở thị trấn", ketQua: "Lương ổn định theo tháng, nhưng H'Hen ít thời gian chăm vườn nhà.", hieuUng: { thuNhap: 900, tayNghe: 8, gan: -3 }, nghe: "Kế toán đại lí" }
        ],
        diaLi: "Liên kết sản xuất và chế biến sâu nông sản tạo thêm việc làm tại chỗ, giúp thu nhập ổn định hơn khi giá cả lên xuống. Đây là một hướng giảm thiếu việc làm ở nông thôn Tây Nguyên."
      }
    ],

    /* ---------------- TUẤN – ĐÔNG NAM BỘ ---------------- */
    tuan: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Thủ Dầu Một, mùa hè 2019",
        moTa: "Khu công nghiệp nào quanh nhà Tuấn cũng treo băng rôn tuyển người. Bạn bè Tuấn đi làm gần hết, có đứa đã mua được xe máy mới.",
        luaChon: [
          { chu: "🏭 Vào làm công nhân nhà máy đồ gỗ xuất khẩu", ketQua: "Lương khá ngay từ tháng đầu, nhưng tăng ca nhiều và công việc nặng.", hieuUng: { thuNhap: 4200, tayNghe: 5, gan: 0, tamTrang: -5 }, nghe: "Công nhân đồ gỗ" },
          { chu: "🎓 Học cao đẳng Công nghệ ô tô, cuối tuần phụ tiệm sửa xe", ketQua: "Thu nhập ít trong mấy năm học, nhưng Tuấn có nghề kĩ thuật.", hieuUng: { thuNhap: 1200, tayNghe: 18, gan: 2 }, nghe: "Sinh viên Công nghệ ô tô" },
          { chu: "📦 Làm nhân viên kho cho một sàn thương mại điện tử", ketQua: "Công việc nhanh, áp lực vào mùa khuyến mãi, nhưng Tuấn học được cách vận hành kho hàng.", hieuUng: { thuNhap: 3800, tayNghe: 8, gan: 0, tamTrang: -3 }, nghe: "Nhân viên kho" }
        ],
        diaLi: "Đông Nam Bộ có nhiều khu công nghiệp, việc làm dồi dào và thu nhập cao nhất cả nước nên hút rất nhiều lao động nhập cư. Tuy vậy, lao động phổ thông dễ mất việc khi sản xuất biến động; học nghề giúp có việc làm bền vững hơn."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "ba-tai-cho-binh-duong-2021",
        tieuDe: "Ăn, ngủ, làm việc trong xưởng",
        moTa: "Dịch lan rộng ở Bình Dương. Nhà máy của Tuấn chỉ được chạy nếu công nhân \"3 tại chỗ\": ăn, ngủ, làm việc ngay trong xưởng, không về nhà.",
        luaChon: [
          { chu: "⛺ Ở lại nhà máy làm \"3 tại chỗ\"", ketQua: "Ngủ lều trong xưởng, chật chội và nhớ nhà; nhưng không tốn tiền ăn, tiền đi lại nên để dành được.", hieuUng: { thuNhap: 1500, tayNghe: 4, gan: -10, tamTrang: -8 } },
          { chu: "🏠 Xin tạm nghỉ, ở nhà với gia đình", ketQua: "Mất thu nhập mấy tháng liền, nhưng cả nhà bên nhau an toàn.", hieuUng: { thuNhap: -1500, tayNghe: 0, gan: 10, tamTrang: 4 } },
          { chu: "💻 Tạm nghỉ, tự học vẽ kĩ thuật trên mạng", ketQua: "Không có lương, nhưng Tuấn tranh thủ học được một kĩ năng mới.", hieuUng: { thuNhap: -1500, tayNghe: 12, gan: 6, tamTrang: 0 } }
        ],
        diaLi: "Đông Nam Bộ tập trung nhiều khu công nghiệp nên chịu ảnh hưởng rất lớn khi dịch bệnh làm gián đoạn sản xuất. Phương án \"3 tại chỗ\" giúp duy trì sản xuất nhưng gây nhiều áp lực cho công nhân. Khi sản xuất đình trệ, hàng trăm nghìn lao động bị giảm giờ làm, mất việc làm và thu nhập."
      },
      {
        loai: "bienCo", nam: 2022, suKien: "xang-dau-ky-luc-2022",
        tieuDe: "Cái gì cũng tăng giá",
        moTa: "Giá xăng, giá thực phẩm tăng; chủ nhà trọ cũng báo tăng tiền phòng. Lương công nhân của Tuấn chưa tăng kịp.",
        luaChon: [
          { chu: "🍱 Tự nấu ăn, ở ghép với bạn để tiết kiệm", ketQua: "Tiết kiệm được kha khá, nhưng phòng chật và ít riêng tư.", hieuUng: { thuNhap: 300, tayNghe: 0, gan: 2, tamTrang: -5 } },
          { chu: "⏰ Đăng kí tăng ca thêm 2 tiếng mỗi ngày", ketQua: "Thu nhập tăng rõ, nhưng Tuấn luôn mệt mỏi, không còn thời gian học thêm.", hieuUng: { thuNhap: 900, tayNghe: 2, gan: -4, tamTrang: -9 } },
          { chu: "🎓 Học buổi tối lớp vận hành máy CNC", ketQua: "Tốn học phí, tháng này hơi chật vật; bù lại Tuấn tự tin hơn hẳn.", hieuUng: { thuNhap: -400, tayNghe: 14, gan: 0, tamTrang: -2 } }
        ],
        diaLi: "Khi giá cả tăng, công nhân ở trọ chịu ảnh hưởng nhiều vì phải trả tiền nhà, tiền ăn, đi lại. Nhà ở xã hội cho công nhân là giải pháp quan trọng ở các tỉnh có nhiều khu công nghiệp. Giá cả tăng làm thu nhập thực tế của lao động nhập cư giảm, dù tiền lương không đổi."
      },
      {
        loai: "cauHoi", nam: 2022,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Vì sao năm 2021, nhiều nhà máy ở Đông Nam Bộ phải áp dụng phương án \"3 tại chỗ\"?",
        dapAn: [
          "Vì công nhân muốn ở lại nhà máy cho vui",
          "Vì nhà máy không có tiền trả lương",
          "Vì các khu công nghiệp đều đóng cửa vĩnh viễn",
          "Để vừa phòng chống dịch COVID-19 vừa duy trì sản xuất, giữ đơn hàng và việc làm"
        ],
        dung: 3,
        giaiThich: "Khi dịch lan rộng, việc đi lại giữa nhà và nhà máy dễ làm lây bệnh. \"3 tại chỗ\" giúp doanh nghiệp không phải dừng sản xuất, giữ được đơn hàng và việc làm cho công nhân.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2023, suKien: "mat-viec-nua-dau-2023",
        tieuDe: "Tên mình trong danh sách cắt giảm",
        moTa: "Nhà máy của Tuấn thiếu đơn hàng, phải cắt giảm một nửa dây chuyền. Tuấn nằm trong danh sách phải nghỉ việc.",
        luaChon: [
          { chu: "🎓 Nhận trợ cấp thất nghiệp và học nghề qua trung tâm dịch vụ việc làm", ketQua: "Vài tháng thu nhập thấp, nhưng Tuấn có chứng chỉ nghề mới.", hieuUng: { thuNhap: -1200, tayNghe: 15, gan: 2, tamTrang: 2 } },
          { chu: "🛵 Chạy xe ôm công nghệ trong lúc tìm việc mới", ketQua: "Có tiền tiêu hằng ngày, nhưng bấp bênh và không có bảo hiểm.", hieuUng: { thuNhap: -300, tayNghe: 2, gan: 0, tamTrang: -12 }, nghe: "Tài xế xe ôm công nghệ" },
          { chu: "🏬 Xin vào làm ở trung tâm thương mại mới mở gần nhà", ketQua: "Lương thấp hơn nhà máy, nhưng gần nhà và học thêm được kĩ năng bán hàng.", hieuUng: { thuNhap: -500, tayNghe: 6, gan: 6, tamTrang: 2 }, nghe: "Nhân viên bán hàng" }
        ],
        diaLi: "Đông Nam Bộ phụ thuộc nhiều vào xuất khẩu nên khi đơn hàng thế giới giảm, lao động phổ thông dễ mất việc nhất. Bảo hiểm thất nghiệp và đào tạo lại nghề giúp người lao động chuyển đổi."
      },
      {
        loai: "chon", nam: 2024,
        tieuDe: "Năm 2024: bắt đầu lại",
        moTa: "Sau đợt cắt giảm, Tuấn đang tìm một công việc mới. Nhiều nhà máy mới vào khu công nghiệp tuyển thợ kĩ thuật, nhưng cũng có những việc trả công cao mà vất vả.",
        luaChon: [
          { chu: "🔧 Làm kĩ thuật viên bảo trì máy cho một nhà máy mới", ketQua: "Lương ổn định, có bảo hiểm, nhưng phải học thêm nhiều về máy tự động.", hieuUng: { thuNhap: 1200, tayNghe: 12, gan: 2, tamTrang: -2 }, nghe: "Kĩ thuật viên bảo trì" },
          { chu: "🛠️ Mở tiệm sửa xe nhỏ gần nhà", ketQua: "Thu nhập chưa cao, nhưng Tuấn tự chủ thời gian và gần gia đình.", hieuUng: { thuNhap: 600, tayNghe: 8, gan: 12, tamTrang: 2 }, nghe: "Chủ tiệm sửa xe" },
          { chu: "🚚 Lái xe tải giao hàng liên tỉnh", ketQua: "Tiền công cao, nhưng Tuấn thường xuyên đi đêm, ít ở nhà.", hieuUng: { thuNhap: 1600, tayNghe: 4, gan: -8, tamTrang: -6 }, nghe: "Tài xế xe tải" }
        ],
        diaLi: "Sau giai đoạn mất việc, lao động có tay nghề được tuyển lại nhanh hơn lao động phổ thông. Chuyển sang công nghiệp hiện đại đòi hỏi nâng cao chất lượng lao động – đó là chìa khoá giải quyết việc làm ở Đông Nam Bộ."
      }
    ],

    /* ---------------- ÚT – ĐỒNG BẰNG SÔNG CỬU LONG ---------------- */
    ut: [
      {
        loai: "chon", nam: 2019,
        tieuDe: "Cà Mau, cuối năm 2019",
        moTa: "Ruộng lúa nhà Út năm nay thu hoạch kém. Anh họ ở Bình Dương gọi về: “Lên đây làm công nhân với anh, lương tháng chắc chắn hơn ở quê!”",
        luaChon: [
          { chu: "🚌 Lên Bình Dương làm công nhân giày da cùng anh họ", ketQua: "Lương tháng đều đặn, gửi được tiền về, nhưng Út ở trọ chật chội và nhớ nhà.", hieuUng: { thuNhap: 3500, tayNghe: 4, gan: -16, tamTrang: -3 }, nghe: "Công nhân giày da", dat: "diXa" },
          { chu: "🦀 Ở nhà phụ bố mẹ nuôi cua, học kĩ thuật ở trạm khuyến nông", ketQua: "Thu nhập ít, nhưng Út hiểu thêm cách nuôi trồng hợp với đất mặn.", hieuUng: { thuNhap: 700, tayNghe: 12, gan: 12 }, nghe: "Lao động nuôi trồng thủy sản" },
          { chu: "🛶 Chèo xuồng chở khách tham quan rừng đước", ketQua: "Có thu nhập theo mùa khách, Út còn học cách giới thiệu quê mình.", hieuUng: { thuNhap: 1300, tayNghe: 8, gan: 10, tamTrang: 2 }, nghe: "Hướng dẫn viên du lịch sinh thái" }
        ],
        diaLi: "Đồng bằng sông Cửu Long chủ yếu làm nông nghiệp, thủy sản, ít khu công nghiệp nên thu nhập thấp hơn Đông Nam Bộ. Vì vậy nhiều lao động trẻ di cư lên Đông Nam Bộ tìm việc làm."
      },
      {
        loai: "bienCo", nam: 2020, suKien: "xam-nhap-man-2020",
        tieuDe: "Nước mặn vào sâu",
        moTa: "Mùa khô năm nay nước mặn vào sớm và sâu hơn mọi năm. Ruộng lúa, ao tôm trong xóm thiếu nước ngọt; nhiều nhà phải mua nước sinh hoạt.",
        moTaTheo: { diXa: "Út đang làm ở cơ sở ngoài tỉnh thì nghe tin quê nhà bị hạn mặn nặng: nước mặn vào sớm và sâu hơn mọi năm, ruộng lúa, ao tôm thiếu nước ngọt, bố mẹ phải mua nước sinh hoạt." },
        luaChon: [
          { chu: "🦐 Ở quê, chuyển ruộng sang nuôi tôm theo mô hình tôm – rừng", ketQua: "Phải học kĩ thuật mới, vay thêm vốn; bù lại tôm hợp với nước lợ.", hieuUng: { thuNhap: 600, tayNghe: 12, gan: 8, tamTrang: -4 } },
          { chu: "💧 Ở quê, cùng xóm đào ao trữ nước ngọt, chờ mùa mưa trồng lúa", ketQua: "Mùa khô gần như không có thu, nhưng cả xóm đoàn kết vượt qua.", hieuUng: { thuNhap: -500, tayNghe: 4, gan: 10, tamTrang: 4 } },
          { chu: "🏭 Làm công nhân ở Bình Dương, gửi tiền về giúp nhà", ketQua: "Lương đều đặn hơn hẳn làm ruộng, nhưng Út phải ở trọ xa nhà hơn 300 km.", hieuUng: { thuNhap: 2000, tayNghe: 3, gan: -15, tamTrang: -8 }, nghe: "Công nhân khu công nghiệp", dat: "diXa" }
        ],
        diaLi: "Xâm nhập mặn ngày càng nghiêm trọng do biến đổi khí hậu, nước biển dâng và lượng nước ngọt từ thượng nguồn về ít. Chuyển đổi cây trồng, vật nuôi (lúa – tôm, tôm – rừng) giúp người dân \"sống chung với mặn\". Mặn làm mất mùa khiến thu nhập giảm, nhiều lao động phải đi làm xa."
      },
      {
        loai: "bienCo", nam: 2021, suKien: "lao-dong-hoi-huong-2021",
        tieuDe: "Xóm nhỏ đông người trở lại",
        moTa: "Cuối năm, nhiều người trong xóm đang làm ở Bình Dương, TP.HCM chạy xe máy về quê sau nhiều tháng giãn cách. Xóm nhỏ bỗng đông người trẻ, nhưng ai cũng lo không có việc làm.",
        moTaTheo: { diXa: "Nhà máy ở Bình Dương nơi Út làm phải tạm dừng nhiều tháng vì dịch. Cuối năm, Út cùng mấy người đồng hương chạy xe máy hơn 300 km về quê, trong túi còn rất ít tiền." },
        luaChon: [
          { chu: "🌳 Rủ các bạn mới về cùng lập tổ hợp tác nuôi tôm – rừng", ketQua: "Phải góp vốn, vài tháng đầu chưa có lãi; nhưng xóm có thêm việc làm cho người trẻ.", hieuUng: { thuNhap: -600, tayNghe: 10, gan: 15, tamTrang: 2 } },
          { chu: "🏭 Chờ nhà máy mở lại rồi lên Bình Dương làm", ketQua: "Nhà máy thiếu người nên gọi công nhân quay lại; Út có lương đều nhưng lại xa nhà.", hieuUng: { thuNhap: 900, tayNghe: 2, gan: -12, tamTrang: -6 }, dat: "diXa" },
          { chu: "🛒 Bán đặc sản Cà Mau qua mạng: khô cá, tôm khô", ketQua: "Đơn hàng tăng dần, Út học được cách chụp ảnh, đóng gói, giao hàng.", hieuUng: { thuNhap: 200, tayNghe: 8, gan: 8, tamTrang: -1 } }
        ],
        diaLi: "Đồng bằng sông Cửu Long có nhiều lao động đi làm ở Đông Nam Bộ. Dòng người hồi hương năm 2021 cho thấy việc làm tại chỗ ở quê còn thiếu; phát triển kinh tế nông thôn giúp người lao động không phải đi xa."
      },
      {
        loai: "cauHoi", nam: 2022,
        tieuDe: "❓ Câu hỏi chặn đường",
        cauHoi: "Vì sao Đồng bằng sông Cửu Long bị xâm nhập mặn ngày càng nghiêm trọng?",
        dapAn: [
          "Vì ở đây có quá nhiều khu công nghiệp",
          "Vì địa hình thấp, giáp biển; mùa khô kéo dài, nước ngọt từ thượng nguồn về ít; biến đổi khí hậu làm nước biển dâng",
          "Vì người dân trồng quá nhiều lúa",
          "Vì ở đây không có sông ngòi"
        ],
        dung: 1,
        giaiThich: "Đồng bằng thấp và phẳng, ba mặt giáp biển. Khi mùa khô kéo dài, lượng nước ngọt sông Mê Công đổ về giảm thì nước biển theo sông rạch lấn sâu vào đất liền.",
        diaLi: "Hạn mặn làm thu nhập từ nông nghiệp giảm, là một nguyên nhân khiến lao động trẻ di cư lên Đông Nam Bộ tìm việc làm.",
        thuong: { thuNhap: 300, tayNghe: 5 }
      },
      {
        loai: "bienCo", nam: 2024, suKien: "han-han-ca-mau-2024",
        tieuDe: "Kênh rạch cạn trơ đáy",
        moTa: "Tháng 4, kênh rạch quanh nhà cạn trơ đáy, đường bê tông trong ấp sụt lún, nứt toác. Cả xóm thiếu nước ngọt.",
        luaChon: [
          { chu: "🌧️ Đầu tư bể trữ nước mưa, lọc nước cho cả xóm dùng", ketQua: "Tốn một khoản, nhưng cả xóm có nước sạch qua mùa khô.", hieuUng: { thuNhap: -500, tayNghe: 8, gan: 12, tamTrang: 3 } },
          { chu: "🦀 Thả tôm thưa hơn, nuôi xen cua để giảm rủi ro", ketQua: "Lãi ít hơn năm được mùa, nhưng không bị mất trắng.", hieuUng: { thuNhap: 200, tayNghe: 10, gan: 4, tamTrang: -3 } },
          { chu: "🧳 Gửi ao tôm cho bố mẹ, lên thành phố làm thêm mùa khô", ketQua: "Có tiền gửi về, nhưng bố mẹ già phải tự xoay xở với ao tôm.", hieuUng: { thuNhap: 1200, tayNghe: 2, gan: -14, tamTrang: -6 }, dat: "diXa" }
        ],
        diaLi: "Hạn hán, thiếu nước ngọt và sụt lún đất đang đe doạ Cà Mau và Đồng bằng sông Cửu Long. Trữ nước ngọt, nuôi trồng thích ứng và hạn chế khai thác nước ngầm là những giải pháp quan trọng. Hạn mặn kéo dài làm thu nhập từ nông nghiệp giảm và thúc đẩy di cư lao động."
      },
      {
        loai: "chon", nam: 2024,
        tieuDe: "Sau mùa hạn: ở hay đi?",
        moTa: "Mùa mưa đã về, kênh rạch có nước trở lại. Út 23 tuổi, đang cân nhắc công việc cho những năm tới.",
        luaChon: [
          { chu: "🏪 Mở điểm thu mua, đóng gói khô cá, tôm khô bán qua mạng", ketQua: "Năm đầu phải bỏ vốn, thu nhập giảm, nhưng Út tạo được việc làm cho vài người trong xóm.", hieuUng: { thuNhap: -200, tayNghe: 15, gan: 10, tamTrang: 2 }, nghe: "Chủ cơ sở đặc sản" },
          { chu: "🐟 Làm công nhân nhà máy chế biến thủy sản trong tỉnh", ketQua: "Thu nhập ổn định, vẫn về nhà được mỗi tuần.", hieuUng: { thuNhap: 800, tayNghe: 6, gan: 4, tamTrang: -2 }, nghe: "Công nhân chế biến thủy sản" },
          { chu: "🏙️ Lên thành phố làm thợ điện công trình", ketQua: "Tiền công cao hơn ở quê, nhưng Út lại phải sống xa nhà.", hieuUng: { thuNhap: 1500, tayNghe: 6, gan: -14, tamTrang: -4 }, nghe: "Thợ điện công trình", dat: ["diXa", "xaQue"] }
        ],
        diaLi: "Phát triển công nghiệp chế biến thủy sản và bán hàng trực tuyến giúp tạo việc làm tại chỗ, giảm di cư. Khi thu nhập ở quê còn thấp hơn Đông Nam Bộ, lao động trẻ vẫn có xu hướng đi xa tìm việc."
      }
    ]
  },

  /* ======================= KẾT THÚC (xét từ trên xuống) ======================= */
  ketThuc: [
    /* ----- KẾT THÚC BÍ MẬT: chỉ mở khi đi đúng một tổ hợp lựa chọn đặc biệt ----- */
    { id: "nguoi-hung", icon: "💙", tieuDe: "Người hùng thầm lặng", biMat: true, skin: "chong-dich",
      goiY: "Minh · Thời cuộc · hai lần thành phố gặp nạn, đừng đứng ngoài",
      dieuKien: { nv: "minh", cheDo: "thoiCuoc", co: ["tinhNguyen", "giupBaCon"] },
      chu: "Năm 2021, Minh đi tình nguyện ở điểm tiêm; năm 2024, Minh lại lội nước giúp bà con sau bão Yagi. Không ai trả lương cho những ngày ấy, nhưng phường trao cho Minh giấy khen, và trung tâm y tế quận mời Minh về làm kĩ thuật viên phụ trách hệ thống máy tính." },
    { id: "qua-mua-dong", icon: "🎄", tieuDe: "Món quà mùa đông", biMat: true, skin: "giang-sinh",
      goiY: "H'Hen · Thời cuộc · năm cà phê được giá, đừng vội tiêu hết",
      dieuKien: { nv: "hhen", cheDo: "thoiCuoc", co: ["caPheDacSan", "nhomQue"] },
      chu: "Tháng 12/2024, những túi cà phê đặc sản đầu tiên mang tên buôn của H'Hen được đặt mua làm quà Giáng sinh, quà Tết gửi đi khắp nơi. Cả buôn cùng rang, cùng gói hàng tới khuya – lần đầu tiên, người trẻ không phải rời buôn để kiếm việc." },
    { id: "dem-rung-duoc", icon: "🎃", tieuDe: "Đêm rừng đước", biMat: true, skin: "halloween",
      goiY: "Út · Bài học · rừng đước không chỉ đẹp ban ngày",
      dieuKien: { nv: "ut", cheDo: "baiHoc", co: ["duLichRung", "tuKinhDoanh"] },
      chu: "Út nghĩ ra tour \"Đêm rừng đước\": chèo xuồng xem đom đóm, nghe các cụ kể chuyện ma xứ rừng U Minh. Mùa Halloween năm ấy, các bạn trẻ từ thành phố đặt kín tour – du lịch sinh thái hoá ra cũng là một cách giữ người trẻ ở lại quê." },

    { id: "met-moi", icon: "💸", tieuDe: "Kiếm nhiều mà mệt mỏi",
      dieuKien: { tnTu: 1.0, tamTrangDuoi: 45 },
      chu: "{ten} có thu nhập cao hơn mức bình quân của vùng, nhưng những ca làm dài và cuộc sống thiếu cân bằng khiến {ten} kiệt sức. Việc làm tốt không chỉ là lương cao." },
    { id: "chong-chenh", icon: "🌧️", tieuDe: "Còn nhiều chông chênh",
      dieuKien: { tamTrangDuoi: 45 },
      chu: "Con đường của {ten} còn nhiều khó khăn: thu nhập bấp bênh, áp lực đè nặng. Nhưng 24 tuổi, mọi thứ vẫn còn ở phía trước." },
    /* Đi làm xa ở năm cuối, hoặc đã rời quê đi làm ít nhất 2 lần */
    { id: "xa-xu", icon: "🧳", tieuDe: "Lao động xa xứ",
      dieuKien: [{ co: ["xaQue"] }, { demTu: { diXa: 2 } }],
      chu: "{ten} đã rời quê đi làm ở nơi có nhiều việc hơn – giống như rất nhiều lao động di cư ở nước ta. Tiền gửi về giúp gia đình, nhưng nỗi nhớ nhà thì vẫn còn đó." },
    { id: "vuot-song", icon: "🌈", tieuDe: "Vững vàng qua sóng gió",
      dieuKien: { cheDo: "thoiCuoc", tamTrangTu: 70, tayNgheTu: 60 },
      chu: "Dịch bệnh, thiên tai, giá cả biến động… {ten} đều đã đi qua. Nhờ chịu học hỏi và biết xoay xở, {ten} không chỉ trụ vững mà còn trưởng thành hơn." },
    { id: "tay-nghe", icon: "🛠️", tieuDe: "Tay nghề vững vàng",
      dieuKien: { tayNgheTu: 75 },
      chu: "{ten} có tay nghề vững, được nhiều nơi cần đến. Tay nghề là \"tấm vé\" giúp người lao động có việc làm ổn định và thu nhập tốt." },
    { id: "giu-lua", icon: "🏡", tieuDe: "Người giữ lửa quê hương",
      dieuKien: { ganTu: 75, tamTrangTu: 50 },
      chu: "{ten} chọn gắn bó với quê hương, góp phần tạo việc làm và giữ người trẻ ở lại. Thu nhập có thể chưa cao, nhưng cuộc sống đầy ý nghĩa." },
    { id: "binh-yen", icon: "🌿", tieuDe: "Cuộc sống bình yên",
      dieuKien: null,
      chu: "{ten} có một cuộc sống bình yên: không quá giàu, không quá vất vả, cân bằng giữa công việc, gia đình và bản thân." }
  ]
};
