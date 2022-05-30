const data = [
    {
        title: 'English Grammar in Use Book w Ans',
        price: '143.000 đ',
        sale_off: '178.000 đ',
        description: "The world's best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world's best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This 'with answers' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately.",
        short_description: "Tác giả: Raymond Murphy | Đứng thứ 1 trong Top 1000 Grammar, vocabulary & skills bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/19/50/3b/18543018924618fbf07bf56433e8b1cd.jpg.webp",
        categories: [
            "Sách tiếng anh"
        ],
        publisher: "Cambridge University",
        id: 1
    },
    {
        title: "Oxford Advanced Learner's Dictionary : Paperback - 10th Edition",
        price: '367.000 đ',
        sale_off: '498.000 đ',
        description: "Oxford Advanced Learner's Dictionary 10th edition builds English vocabulary better than ever before and leads the way to more confident, successful communication in English.",
        short_description: "Tác giả: Diana Lea,  Jennifer Bradbery | Đứng thứ 2 trong Top 1000 English Language Dictionary bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/200x200/ts/product/ea/dd/54/3e8ac346542897de2361e7a30c1f5e62.jpg.webp",
        categories: [
            "Sách tiếng anh"
        ],
        publisher: "Oxford University Press",
        id: 2
    },
    {
        title: "Cabins",
        price: '560.000 đ',
        sale_off: "",
        description: "Trong thập kỷ qua, khi sự tồn tại vật chất và dấu ấn môi trường của chúng ta đã phát triển theo cấp số nhân, các kiến trúc sư trên toàn cầu đã đặc biệt quan tâm đến các khả năng của nơi ở tối thiểu, ít tác động và biệt lập. và các minh họa đương đại, tươi sáng của Marie-Laure Cruschi, khám phá cách loại kiến ​​trúc đặc biệt này tạo ra những cơ hội đặc biệt cho tư duy sáng tạo. Để tránh sự dư thừa, cabin hạn chế sự xâm nhập không gian thực tế đối với các nhu cầu thiết yếu của cuộc sống, trong khi đáp ứng với khung cảnh mộc mạc điển hình của nó, nó đưa ra các giải pháp thân thiện với môi trường.",
        short_description: "Tác giả: Philip Jodidio | Đứng thứ 1 trong Top 1000 Architecture bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/79/6b/d3/aa1bbe1223bbd4922aa8cc2661145e53.jpg.webp",
        categories: [
            "Sách tiếng anh"
        ],
        publisher: "Taschen",
        id: 3
    },
    {
        title: "Ikigai : The Japanese Secret To A Long And Happy Life",
        price: '295.000 đ',
        sale_off: '312.000 đ',
        description: "Discover the Japanese secret to a long and happy life with the internationally bestselling guide to ikigai - 'a refreshingly simple recipe for happiness' (Stylist Magazine)",
        short_description: "Tác giả: Hector Garcia | Đứng thứ 2 trong Top 1000 Personal Development bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/e9/7c/49/de05693fdd6a95558dcb494f9e5e98ba.jpg.webp",
        categories: [
            "Sách tiếng anh"
        ],
        publisher: "Penguin Random House",
        id: 4
    },
    {
        title: "Lịch Sử Vú (Bìa Mềm)",
        price: '190.000 đ',
        sale_off: '248.000 đ',
        description: "“Lịch sử vú”, “có chủ đề vô tiền khoáng hậu và thành công ngoạn mục trong việc hòa trộn giữa mỹ học và chính trị”, viết về bộ phận được cho là mang chở nhiều ý nghĩa biểu tượng nhất trên cơ thể phụ nữ nói chung.",
        short_description: "",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/e9/a8/ee/7f0d77112f72b57ebe740f4e618931c9.jpg.webp",
        categories: [
            "Sách tiếng việt"
        ],
        publisher: "Nhà Xuất Bản Phụ Nữ Việt Nam",
        id: 5
    },
    {
        title: "Gió thổi mùa trăng năm ấy",
        price: '179.000 đ',
        sale_off: '',
        description: "“Gió Thổi Mùa Trăng Năm Ấy” là những mảnh ký được kể lại bằng một “giọng điệu “ văn chương dung dị đầy hài hước, rất đời, nhưng cũng vô cùng ấm áp",
        short_description: "",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/62/e4/be/bbf89dc3c6319109ef461d3b875f7840.png.webp",
        categories: [
            "Sách tiếng việt"
        ],
        publisher: "Nhà Xuất Bản Hội Nhà Văn",
        id: 6
    },
    {
        title: "Một Thoáng Ta Rực Rỡ Ở Nhân Gian",
        price: '101.000 đ',
        sale_off: '135.000 đ',
        description: "Một thoáng ta rực rỡ ở nhân gian viết dưới dạng một lá thư của nhân vật chính, Chó Con, gửi cho người mẹ không biết chữ của mình. Dưới dạng những mẩu chuyện nhỏ, xen kẽ với những đoạn trữ tình ngoại đề, triết lý, và những bài thơ, cuốn sách kể câu chuyện đời không chỉ của Chó Con (tên gọi yêu do bà ngoại đặt cho, nhưng cũng là cách tất cả mọi người trong sách gọi cậu) từ thuở nhỏ đến lúc chớm trưởng thành, mà cả ba thế hệ từ bà, đến mẹ, đến cậu, một cuộc di cư dài từ làng quê Việt Nam sang đất Mỹ, cũng như câu chuyện của những thanh niên Mỹ thế hệ cậu mà đặc trưng là người bạn trai Trevor.",
        short_description: "Đứng thứ 4 trong Top 1000 Tiểu Thuyết bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/2f/b5/4e/a8208e9019c8510e8a8eebe06f50299c.jpg.webp",
        categories: [
            "Sách tiếng việt"
        ],
        publisher: "Nhà Xuất Bản Hội Nhà Văn",
        id: 7
    },
    {
        title: "Làm Dâu Nhà Sói",
        price: '49.000 đ',
        sale_off: '69.000 đ',
        description: "Kaede thuộc tộc thỏ đã vì ngôi làng của mình mà đi làm dâu cho một gia đình danh giá của tộc sói. Mặc dù tức giận vì cuộc hôn nhân chẳng khác nào lễ hiến tế này, nhưng với bản tính quyết chiến, Kaede đã thẳng thắn đối mặt với vị hôn phu của mình. Vậy mà Ren, cậu trai nối dõi của nhà sói chỉ đáp lại bằng thái độ lạnh lùng và cộc lốc. Đã thế, ngay sau khi đến nơi Kaede được biết, “Cậu phải thay đổi thể chất của mình để có thể kết đôi với chủng loài khác.” Sau đó, cậu bị bắt uống một loại thuốc có tên gọi là “Thuốc hóa dâu”. Thế là kì “hóa dâu” đã bắt đầu và sẽ kéo dài suốt 1 tháng cho đến ngày cử hành hôn lễ chính thức…",
        short_description: "Tác giả: Hana Inu | Đứng thứ 2 trong Top 1000 Truyện đam mỹ bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/38/5d/93/8a193db86d11fe51ac84596f36256a1c.jpg.webp",
        categories: [
            "Sách tiếng việt"
        ],
        publisher: "Nhà Xuất Bản Dân Trí",
        id: 8
    },
    {
        title: "Sét Bong Bóng Trang Trí Sinh Nhật FUNU Nhiều Mẫu Kèm Bơm Tay- Hàng Chính Hãng",
        price: '175.000 đ',
        sale_off: '199.000 đ',
        description: "Sét Bong Bóng Trang Trí Sinh Nhật FUNU Nhiều Mẫu Kèm Bơm Tay- Hàng Chính Hãng.",
        short_description: "Thương hiệu: FUNU | Đứng thứ 7 trong Top 1000 Phụ kiện - Vật liệu trang trí bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/b9/83/a7/a0b81a9042046127cdeb3b6e957f7996.jpg.webp",
        categories: [
            "Qùa lưu niệm"
        ],
        publisher: "FUNU",
        id: 9
    },
    {
        title: "Gấu bông mèo Hello Kitty váy hồng kích thước 30-40-55cm",
        price: '175.000 đ',
        sale_off: '199.000 đ',
        description: "*** NEOCI-Bán gấu bông quà tặng và phụ kiện***",
        short_description: "Thương hiệu: OEM | Đứng thứ 33 trong Top 1000 Thú Nhồi Bông bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/53/15/bd/654c2aca02bdfb4528b19629fbe6ceb6.jpg.webp",
        categories: [
            "Qùa lưu niệm"
        ],
        publisher: "OEM",
        id: 10
    },
    {
        title: "Gấu bông thỏ Smile thỏ bông 2 màu xanh hồng kích thước 55-65-80cm",
        price: '199.000 đ',
        sale_off: "",
        description: "*** NEOCI-Bán gấu bông quà tặng và phụ kiện***",
        short_description: "Thương hiệu: OEM",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/ef/4f/f7/8b9dda2f90be1259244ae6307d3a39aa.jpg.webp",
        categories: [
            "Qùa lưu niệm"
        ],
        publisher: "OEM",
        id: 11
    },
    {
        title: "Gấu bông Thỏ bông ôm bình sữa vải co giãn cao cấp đủ size",
        price: '299.000 đ',
        sale_off: "",
        description: "Sản phẩm GẤU BÔNG, THÚ NHỒI BÔNG, GỐI ÔM của Shop Mun Xinh. Uy tín đã được đảm bảo với hàng vạn đơn hàng trên khắp cả nước. Cam kết hàng Việt Nam chất lượng cao, gấu được nhồi bông loại 1",
        short_description: "Thương hiệu: OEM",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/d5/00/22/35c9c60efedac6e58b7967969df0d7b8.jpg.webp",
        categories: [
            "Qùa lưu niệm"
        ],
        publisher: "OEM",
        id: 12
    },
    /** */
    {
        title: "Chú Thuật Hồi Chiến Tập 2: Chú Thai Đới Thiên [Tặng Kèm Obi Và Thẻ Bo Góc Nhựa]",
        price: '26.000 đ',
        sale_off: '30.000 đ',
        description: "Chú thai bất ngờ xuất hiện tại trại cải tạo thanh thiếu niên. Nhóm Itadori, học sinh năm Nhất trường chuyên chú thuật, được cử đi cứu những người đang mắc kẹt bên trong. Nhưng chú thai sau khi hóa thành chú linh đã tấn công cả nhóm. Trước tình thế hiểm nghèo, Itadori đã trao quyền kiểm soát cơ thể cho Sukuna với hi vọng sẽ hạ gục chú linh, !?",
        short_description: "TTác giả: Gege Akutami | Đứng thứ 5 trong Top 1000 Truyện Tranh, Manga, Comic bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/1e/fa/d1/9fdf1c67be4fe11fb4c6d01058de1607.jpg.webp",
        categories: [
            "Sách tiếng việt",
            "Truyện chanh"
        ],
        publisher: "Nhà Xuất Bản Kim Đồng",
        id: 13
    },
    {
        title: "Chú Thuật Hồi Chiến: Tập 1",
        price: '27.000 đ',
        sale_off: "",
        description: "Itadori Yuji là một học sinh cấp Ba sở hữu năng lực thể chất phi thường. Hằng ngày cậu thường tới bệnh viện chăm người ông đang ốm liệt giường. Nhưng một ngày nọ, phong ấn của “chú vật” vốn ngủ yên trong trường bị phá giải, quái vật xuất hiện. Để cứu hai anh chị khóa trên đang gặp nguy hiểm, Itadori đã xông vào trường và  Phần chính truyện của CHÚ THUẬT HỒI CHIẾN - Series bom tấn đã bán ra hơn 30 triệu bản tại Nhật năm 2021, bắt đầu…!!",
        short_description: "Tác giả: Gege Akutami | Đứng thứ 3 trong Top 1000 Truyện Tranh, Manga, Comic bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/f6/31/92/989371cd53ac84a1baa221c7932b6b6e.png.webp",
        categories: [
            "Sách tiếng việt",
            "Truyện chanh"
        ],
        publisher: "Nhà Xuất Bản Kim Đồng",
        id: 14
    },
    {
        title: "Yêu Thầm",
        price: '125.000 đ',
        sale_off: '245.000 đ',
        description: "Sản phẩm GẤU BÔNG, THÚ NHỒI BÔNG, GỐI ÔM của Shop Mun Xinh. Uy tín đã được đảm bảo với hàng vạn đơn hàng trên khắp cả nước. Cam kết hàng Việt Nam chất lượng cao, gấu được nhồi bông loại 1",
        short_description: "Tác giả: Cát Xuyên Lưu",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/b7/ec/4f/f20a0f45ef3784ab3fafa43cfadc5aa1.jpg.webp",
        categories: [
            "Sách tiếng việt",
            "Truyện chanh"
        ],
        publisher: "Nhà Xuất Bản Hà Nội",
        id: 15
    },
    {
        title: "Sói Đầu Đàn Và Cún Nhỏ - Tập 1",
        price: '92.000 đ',
        sale_off: "",
        description: "SÓI ĐẦU ĐÀN VÀ CÚN NHỎ - MA VĨ Một ngày nọ, thủ lĩnh đàn sói nhặt được một chú cún nhỏ xíu, tròn vo đang rúc vào người mình tìm hơi ấm.Sau một hồi đấu tranh nội tâm không biết nên ăn thịt nó, vứt nó đi hay là nuôi nó, chiếc sói nhìn mặt hổ báo tưởng chừng gian ác đã không cưỡng lại được sự cute hột me của cún con mà quyết định nuôi luôn chú ta.",
        short_description: "Tác giả: Ma Vĩ | Đứng thứ 12 trong Top 1000 Tranh Truyện bán chạy tháng này",
        image: "https://salt.tikicdn.com/cache/400x400/ts/product/47/ea/4a/479604d400e6e38346dda45009f0cd31.jpg.webp",
        categories: [
            "Sách tiếng việt",
            "Truyện chanh"
        ],
        publisher: "Nhà Xuất Bản Hà Nội",
        id: 16
    },
]

export default data;