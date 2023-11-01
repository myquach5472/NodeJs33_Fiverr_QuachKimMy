/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `BinhLuan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(250) DEFAULT NULL,
  `sao_binh_luan` int DEFAULT NULL,
  `ma_cong_viec` int DEFAULT NULL,
  `ma_nguoi_binh_luan` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ma_cong_viec` (`ma_cong_viec`),
  KEY `ma_nguoi_binh_luan` (`ma_nguoi_binh_luan`),
  CONSTRAINT `BinhLuan_ibfk_1` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec` (`id`),
  CONSTRAINT `BinhLuan_ibfk_2` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ChiTietLoaiCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_chi_tiet` varchar(250) DEFAULT NULL,
  `hinh_anh` varchar(250) DEFAULT NULL,
  `ma_loai_cong_viec` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ma_loai_cong_viec` (`ma_loai_cong_viec`),
  CONSTRAINT `ChiTietLoaiCongViec_ibfk_1` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `LoaiCongViec` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_cong_viec` varchar(100) DEFAULT NULL,
  `danh_gia` varchar(250) DEFAULT NULL,
  `gia_tien` varchar(100) DEFAULT NULL,
  `hinh_anh` varchar(250) DEFAULT NULL,
  `mo_ta` varchar(250) DEFAULT NULL,
  `mo_ta_ngan` varchar(100) DEFAULT NULL,
  `sao_cong_viec` varchar(100) DEFAULT NULL,
  `ma_chi_tiet_loai` int DEFAULT NULL,
  `nguoi_tao` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ma_chi_tiet_loai` (`ma_chi_tiet_loai`),
  KEY `nguoi_tao` (`nguoi_tao`),
  CONSTRAINT `CongViec_ibfk_1` FOREIGN KEY (`ma_chi_tiet_loai`) REFERENCES `ChiTietLoaiCongViec` (`id`),
  CONSTRAINT `CongViec_ibfk_2` FOREIGN KEY (`nguoi_tao`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `LoaiCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_loai_cong_viec` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `NguoiDung` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `pass_word` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `birth_day` varchar(100) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `skill` varchar(100) DEFAULT NULL,
  `certification` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ThueCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ngay_thue` datetime DEFAULT NULL,
  `hoan_thanh` tinyint(1) DEFAULT NULL,
  `ma_cong_viec` int DEFAULT NULL,
  `ma_nguoi_thue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ma_cong_viec` (`ma_cong_viec`),
  KEY `ma_nguoi_thue` (`ma_nguoi_thue`),
  CONSTRAINT `ThueCongViec_ibfk_1` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec` (`id`),
  CONSTRAINT `ThueCongViec_ibfk_2` FOREIGN KEY (`ma_nguoi_thue`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `BinhLuan` (`id`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `ma_cong_viec`, `ma_nguoi_binh_luan`) VALUES
(1, '2023-01-15 09:30:00', 'Great job!', 5, 3, 12);
INSERT INTO `BinhLuan` (`id`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `ma_cong_viec`, `ma_nguoi_binh_luan`) VALUES
(2, '2023-02-20 14:45:00', 'Good work.', 4, 5, 15);
INSERT INTO `BinhLuan` (`id`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `ma_cong_viec`, `ma_nguoi_binh_luan`) VALUES
(3, '2023-03-10 11:20:00', 'Average service.', 3, 1, 9);
INSERT INTO `BinhLuan` (`id`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `ma_cong_viec`, `ma_nguoi_binh_luan`) VALUES
(4, '2023-04-05 16:10:00', 'Could be better.', 2, 7, 18),
(5, '2023-05-12 08:55:00', 'Excellent work!', 5, 2, 7),
(6, '2023-06-25 13:40:00', 'Very satisfied.', 5, 6, 16),
(7, '2023-07-02 10:15:00', 'Not recommended.', 1, 4, 10),
(8, '2023-08-18 17:05:00', 'Outstanding performance!', 5, 9, 20),
(9, '2023-09-22 12:25:00', 'Quick response.', 4, 8, 14),
(10, '2023-10-08 09:50:00', 'Professional service.', 5, 10, 11),
(11, '2023-11-11 14:30:00', 'Needs improvement.', 2, 5, 13),
(12, '2023-12-03 11:10:00', 'Impressive!', 5, 3, 17),
(13, '2024-01-14 08:40:00', 'Friendly staff.', 4, 1, 19),
(14, '2024-02-29 15:15:00', 'On time delivery.', 4, 2, 8),
(15, '2024-03-07 10:00:00', 'Quality work.', 5, 4, 15),
(16, '2024-04-19 17:25:00', 'Fair price.', 3, 6, 12),
(17, '2024-05-28 12:50:00', 'Good communication.', 4, 8, 18),
(18, '2024-06-02 09:05:00', 'Highly recommended.', 5, 7, 16),
(19, '2024-07-21 14:55:00', 'Satisfactory service.', 3, 10, 9),
(20, '2024-08-13 11:35:00', 'Responsive team.', 4, 9, 20);

INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`) VALUES
(1, 'Short Video Ads', 'https://fiverrnew.cybersoft.edu.vn/images/lcv7.jpg', 4);
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`) VALUES
(2, 'Video Editor', 'https://fiverrnew.cybersoft.edu.vn/images/lcv8.jpg', 4);
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`) VALUES
(3, 'Producers & Composers', 'https://fiverrnew.cybersoft.edu.vn/images/lcv9.jpg', 5);
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`) VALUES
(4, 'Articles & Blog Posts', 'http://fiverrnew.cybersoft.edu.vn/images/30-10-2022-07-39-22-application-development_2x.jpg', 5),
(5, 'Social Media Advertising', 'http://fiverrnew.cybersoft.edu.vn/images/30-03-2023-04-41-46-imagesgraphics.jpeg', 1),
(6, 'Writing', 'http://fiverrnew.cybersoft.edu.vn/images/31-03-2023-02-04-08-graphics1.jpeg', 3),
(7, 'Translation', 'http://fiverrnew.cybersoft.edu.vn/images/31-03-2023-02-06-55-graphics2.png', 3),
(8, 'Marketing', 'http://fiverrnew.cybersoft.edu.vn/images/11-04-2023-05-56-19-media4.png', 2);

INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`) VALUES
(1, 'Website Development', 'Excellent', '$5000', 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/250279349/original/f43f36493d308cf3924f332822eea2ca2700486d.jpg', 'Creating a modern and responsive website.', 'Web Dev', '5', 1, 1);
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`) VALUES
(2, 'Graphic Design', 'Good', '$1000', 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/143011260/original/9b2ac7f4ac528f3aa09d2cdc06c20bab578c5593.png', 'Designing eye-catching graphics and logos.', 'Graphics', '4', 2, 2);
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`) VALUES
(3, 'Content Writing', 'Average', '$500', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130713948/original/21662779bc9f2c67b29e14a3485981892e771dec/design-your-mobile-app.png', 'Creating engaging and informative content.', 'Content', '3', 1, 3);
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`) VALUES
(4, 'Mobile App Development', 'Excellent', '$8000', 'https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/217599616/original/8bb2d75e996fe9cae595f0de8a2c366e98a46256.jpg', 'Developing feature-rich mobile applications.', 'App Dev', '5', 3, 4),
(5, 'Data Entry', 'Good', '$300', 'https://fiverrnew.cybersoft.edu.vn/images/cv33.jpg', 'Accurate and fast data entry services.', 'Data Entry', '4', 4, 5),
(6, 'Social Media Management', 'Excellent', '$1500', 'https://fiverrnew.cybersoft.edu.vn/images/cv32.jpg', 'Managing social media profiles and content.', 'Social Media', '5', 5, 6),
(7, 'Video Editing', 'Good', '$700', 'https://fiverrnew.cybersoft.edu.vn/images/cv31.jpg', 'Creating professional video edits and montages.', 'Video Edit', '4', 6, 7),
(8, 'SEO Optimization', 'Excellent', '$2000', 'https://fiverrnew.cybersoft.edu.vn/images/cv30.jpg', 'Improving website SEO and search engine rankings.', 'SEO', '5', 7, 8),
(9, 'Virtual Assistance', 'Good', '$400', 'https://fiverrnew.cybersoft.edu.vn/images/cv29.jpg', 'Providing administrative support remotely.', 'Virtual Assist', '4', 8, 9),
(10, 'Photography', 'Average', '$600', 'https://fiverrnew.cybersoft.edu.vn/images/cv28.jpg', 'Capturing stunning photographs for various occasions.', 'Photography', '3', 2, 10);

INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`) VALUES
(1, 'Graphics & Design');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`) VALUES
(2, 'Digital Marketing');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`) VALUES
(3, 'Writing & Translation');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`) VALUES
(4, 'Video & Animation'),
(5, 'Music & Audio'),
(6, 'AI'),
(7, 'Photography'),
(8, 'Cybersoft');

INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`) VALUES
(1, 'Nguyễn Văn An', 'abc@example.com', 'password1', '0123456789', '1990-04-20', 1, 'ADMIN', 'Design', 'Cert A');
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`) VALUES
(2, 'Trần Thị Bình', 'tranthibinh@example.com', 'password2', '0987654321', '1985-09-15', 0, 'USER', 'Programming', 'Cert B');
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`) VALUES
(3, 'Lê Huy Hoàng', 'lehuyhoang@example.com', 'password3', '0365897412', '1992-12-05', 1, 'USER', 'Writing', 'Cert C');
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`) VALUES
(4, 'Nguyễn Thị Lan', 'nguyenthilan@example.com', 'password4', '0754318690', '1987-07-30', 0, 'USER', 'Marketing', 'Cert D'),
(5, 'Phạm Đình Tuấn', 'phamdinhtuan@example.com', 'password5', '0214796538', '1988-11-10', 1, 'USER', 'Development', 'Cert E'),
(6, 'Nguyễn Thị Thảo', 'nguyenthithao@example.com', 'password6', '0987654321', '1995-02-18', 0, 'USER', 'Design', 'Cert F'),
(7, 'Vũ Văn Đức', 'vuvanduc@example.com', 'password7', '0369852147', '1986-06-25', 1, 'USER', 'Programming', 'Cert G'),
(8, 'Lê Thị Thu', 'lethithu@example.com', 'password8', '0912378456', '1998-03-14', 0, 'USER', 'Writing', 'Cert H'),
(9, 'Trần Văn Hòa', 'tranvanhoa@example.com', 'password9', '0775999413', '1991-08-03', 1, 'USER', 'Marketing', 'Cert I'),
(10, 'Phạm Thị Thúy', 'phamthithuy@example.com', 'password10', '0568473920', '1989-05-29', 0, 'USER', 'Development', 'Cert J'),
(11, 'Nguyễn Văn Quân', 'nguyenvanquan@example.com', 'password11', '0365897412', '1993-10-08', 1, 'ADMIN', 'Design', 'Cert K'),
(12, 'Lê Thị Mai', 'lethimai@example.com', 'password12', '0123456789', '1984-07-21', 0, 'ADMIN', 'Programming', 'Cert L'),
(13, 'Trần Văn Khải', 'tranvankhai@example.com', 'password13', '0987654321', '1997-01-04', 1, 'ADMIN', 'Writing', 'Cert M'),
(14, 'Vũ Thị Thủy', 'vuthithuy@example.com', 'password14', '0214796538', '1983-04-11', 0, 'ADMIN', 'Marketing', 'Cert N'),
(15, 'Phạm Đình Thắng', 'phamdinhthang@example.com', 'password15', '0754318690', '1996-09-02', 1, 'ADMIN', 'Development', 'Cert O'),
(16, 'Lê Thị Ngọc', 'lethingoc@example.com', 'password16', '0369852147', '1994-12-15', 0, 'ADMIN', 'Design', 'Cert P'),
(17, 'Nguyễn Văn Tâm', 'nguyenvantam@example.com', 'password17', '0912378456', '1982-02-25', 1, 'ADMIN', 'Programming', 'Cert Q'),
(18, 'Trần Thị Hương', 'tranthihuong@example.com', 'password18', '0775999413', '1999-05-16', 0, 'ADMIN', 'Writing', 'Cert R'),
(19, 'Vũ Văn Hoàng', 'vuvanhoang@example.com', 'password19', '0568473920', '1981-06-28', 1, 'ADMIN', 'Marketing', 'Cert S'),
(20, 'Phạm Thị Lan', 'phamthilan@example.com', 'password20', '0365897412', '1990-03-10', 0, 'ADMIN', 'Development', 'Cert T');

INSERT INTO `ThueCongViec` (`id`, `ngay_thue`, `hoan_thanh`, `ma_cong_viec`, `ma_nguoi_thue`) VALUES
(1, '2023-01-15 09:30:00', 1, 3, 12);
INSERT INTO `ThueCongViec` (`id`, `ngay_thue`, `hoan_thanh`, `ma_cong_viec`, `ma_nguoi_thue`) VALUES
(2, '2023-02-20 14:45:00', 0, 5, 15);
INSERT INTO `ThueCongViec` (`id`, `ngay_thue`, `hoan_thanh`, `ma_cong_viec`, `ma_nguoi_thue`) VALUES
(3, '2023-03-10 11:20:00', 1, 1, 9);
INSERT INTO `ThueCongViec` (`id`, `ngay_thue`, `hoan_thanh`, `ma_cong_viec`, `ma_nguoi_thue`) VALUES
(4, '2023-04-05 16:10:00', 0, 7, 18),
(5, '2023-05-12 08:55:00', 1, 2, 7),
(6, '2023-06-25 13:40:00', 0, 6, 16),
(7, '2023-07-02 10:15:00', 1, 4, 10),
(8, '2023-08-18 17:05:00', 0, 9, 20),
(9, '2023-09-22 12:25:00', 1, 8, 14),
(10, '2023-10-08 09:50:00', 0, 10, 11),
(11, '2023-11-11 14:30:00', 1, 5, 13),
(12, '2023-12-03 11:10:00', 0, 3, 17),
(13, '2024-01-14 08:40:00', 1, 1, 19),
(14, '2024-02-29 15:15:00', 0, 2, 8),
(15, '2024-03-07 10:00:00', 1, 4, 15),
(16, '2024-04-19 17:25:00', 0, 6, 12),
(17, '2024-05-28 12:50:00', 1, 8, 18),
(18, '2024-06-02 09:05:00', 0, 7, 16),
(19, '2024-07-21 14:55:00', 1, 10, 9),
(20, '2024-08-13 11:35:00', 0, 9, 20);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;