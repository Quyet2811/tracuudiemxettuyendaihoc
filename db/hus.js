UNIVERSITY_DATABASE["HUS"] = {
    name: "Đại học Khoa học Tự nhiên - ĐHQGHN",
  // 🎯 Công thức tính điểm THPT đặc thù của HUS (Xử lý biệt lập, tự sinh điểm khối kết hợp)
    thptConfig: {
        calculate: function(subjects, userScores, industry, userCert) {
            // Bước 1: Chuẩn bị một bảng điểm có "cấy" điểm IELTS quy đổi nếu có
            let effectiveScores = { ...userScores };
            let hasIelts = false;

            if (userCert && userCert.type === "IELTS" && userCert.value) {
                let ieltsScore = parseFloat(userCert.value);
                let convertedGrade = 0;
                if (ieltsScore >= 6.5) convertedGrade = 10.0;
                else if (ieltsScore === 6.0) convertedGrade = 9.5;
                else if (ieltsScore === 5.5) convertedGrade = 9.0;

                // Nếu điểm IELTS quy đổi cao hơn điểm thi thật (hoặc học sinh không thi môn Anh nên điểm thật = 0)
                if (convertedGrade > (effectiveScores["m-anh"] || 0)) {
                    effectiveScores["m-anh"] = convertedGrade;
                    hasIelts = true; 
                }
            }

            // Bước 2: Định nghĩa cấu trúc môn học của từng Khối để máy tính tự tra cứu
            const COMP_MAPPING = {
                "A00": ["m-toan", "m-ly", "m-hoa"],
                "A01": ["m-toan", "m-ly", "m-anh"],
                "A02": ["m-toan", "m-ly", "m-sinh"],
                "A04": ["m-toan", "m-ly", "m-dia"],
                "A05": ["m-toan", "m-hoa", "m-su"],
                "A06": ["m-toan", "m-hoa", "m-dia"],
                "A07": ["m-toan", "m-su", "m-dia"],
                "B00": ["m-toan", "m-hoa", "m-sinh"],
                "B02": ["m-toan", "m-sinh", "m-dia"],
                "B03": ["m-toan", "m-sinh", "m-van"],
                "B08": ["m-toan", "m-sinh", "m-anh"],
                "D01": ["m-toan", "m-van", "m-anh"],
                "D07": ["m-toan", "m-hoa", "m-anh"],
                "D08": ["m-toan", "m-sinh", "m-anh"],
                "C01": ["m-van", "m-ly", "m-toan"],
                "C02": ["m-van", "m-toan", "m-hoa"],
                "C03": ["m-van", "m-toan", "m-su"],
                "C04": ["m-van", "m-toan", "m-dia"],
                "D10": ["m-toan", "m-dia", "m-anh"],
                "D20": ["m-toan", "m-dia", "m-trung"],
                "X01": ["m-toan", "m-van", "m-gdktpl"],
                "X02": ["m-toan", "m-van", "m-tin"],
                "X06": ["m-toan", "m-ly", "m-tin"],
                "X21": ["m-toan", "m-dia", "m-gdktpl"],
                "X25": ["m-toan", "m-anh", "m-gdktpl"],
                "X26": ["m-toan", "m-tin", "m-anh"],
                // Bạn có thể định nghĩa thêm các khối khác của HUS ở đây cực kỳ dễ dàng
            };

            // Bước 3: Đánh giá khối thi mà file index.html đang gửi vào
            let currentBestScore = 0;
            let currentBlock = subjects.join("-"); // Tên khối thi hiện tại (Ví dụ: "A00")

            // Lấy danh sách 3 môn của khối hiện tại theo bản đồ mapping
            let currentBlockSubjects = COMP_MAPPING[currentBlock];

            if (currentBlockSubjects) {
                // Kiểm tra xem học sinh có đủ điều kiện/điểm số để xét khối này không
                // Điều kiện: Học sinh phải thi môn đó (điểm > 0) HOẶC môn đó là môn Anh và học sinh có IELTS
                let canCalculate = currentBlockSubjects.every(sub => {
                    return (effectiveScores[sub] !== undefined && effectiveScores[sub] > 0) || (sub === "m-anh" && hasIelts);
                });

                if (canCalculate) {
                    // Tính điểm thô của khối này
                    let m1 = effectiveScores[currentBlockSubjects[0]] || 0;
                    let m2 = effectiveScores[currentBlockSubjects[1]] || 0;
                    let m3 = effectiveScores[currentBlockSubjects[2]] || 0;
                    currentBestScore = m1 + m2 + m3;

                    // Xử lý nhân đôi môn Toán nếu ngành yêu cầu và khối có môn Toán
                    if (industry.mathWeight === 2 && currentBlockSubjects.includes("m-toan")) {
                        let totalWithWeight = (effectiveScores["m-toan"] * 2) + 
                            (currentBlockSubjects.filter(s => s !== "m-toan").reduce((sum, s) => sum + (effectiveScores[s] || 0), 0));
                        currentBestScore = (totalWithWeight * 3) / 4;
                    }
                }
            }

            return currentBestScore; // Trả về số điểm tối ưu nhất cho khối thi này
        }
    },
  // 🎯 Công thức tính điểm HSA đặc thù của HUS (Tính trên thang 150 gốc của ĐHQG)
  hsaConfig: {
    status: "updating"
  },
    
