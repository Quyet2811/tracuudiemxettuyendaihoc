// =========================================================================
// ĐẠI HỌC KHOA HỌC TỰ NHIÊN - ĐHQGHN (HUS)
// =========================================================================

UNIVERSITY_DATABASE["HUS"] = {
    name: "Đại học Khoa học Tự nhiên - ĐHQGHN",

    // 🎯 Công thức tính điểm THPT đặc thù của HUS (Xử lý biệt lập, tự sinh điểm khối kết hợp)
    thptConfig: {
        calculate: function(subjects, userScores, industry) {
            // Bước 1: Chuẩn bị một bảng điểm có "cấy" điểm IELTS quy đổi nếu có
            let effectiveScores = { ...userScores };
            let hasIelts = false;

            // Lấy thông tin chứng chỉ trực tiếp từ giao diện index.html
            const certSelect = document.getElementById("cert-type");
            if (certSelect && certSelect.value) {
                const [certType, certValue] = certSelect.value.split("|");
                if (certType === "IELTS") {
                    let ieltsScore = parseFloat(certValue);
                    let convertedGrade = 0;
                    if (ieltsScore >= 6.5) convertedGrade = 10.0;
                    else if (ieltsScore === 6.0) convertedGrade = 9.5;
                    else if (ieltsScore === 5.5) convertedGrade = 9.0;

                    if (convertedGrade > (effectiveScores["m-anh"] || 0)) {
                        effectiveScores["m-anh"] = convertedGrade;
                        hasIelts = true; 
                    }
                }
            }

            // Bước 2: Định nghĩa cấu trúc môn học của từng Khối để máy tính tự tra cứu chéo
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
                "X01": ["m-toan", "m-van", "m-gdktdpl"],
                "X02": ["m-toan", "m-van", "m-tin"],
                "X06": ["m-toan", "m-ly", "m-tin"],
                "X21": ["m-toan", "m-dia", "m-gdktdpl"],
                "X25": ["m-toan", "m-anh", "m-gdktdpl"],
                "X26": ["m-toan", "m-tin", "m-anh"]
            };

            // Bước 3: Tìm xem tên khối thi thực tế dựa trên mảng môn học `subjects` truyền vào từ index.html
            let currentBlock = "---";
            for (let blockCode in COMP_MAPPING) {
                if (COMP_MAPPING[blockCode].every((val, i) => val === subjects[i])) {
                    currentBlock = blockCode;
                    break;
                }
            }

            let currentBestScore = 0;
            let currentBlockSubjects = COMP_MAPPING[currentBlock];

            if (currentBlockSubjects) {
                // Kiểm tra điều kiện: Phải thi (điểm > 0) HOẶC là môn Anh và có IELTS gánh
                let canCalculate = currentBlockSubjects.every(sub => {
                    return (effectiveScores[sub] !== undefined && effectiveScores[sub] > 0) || (sub === "m-anh" && hasIelts);
                });

                if (canCalculate) {
                    let m1 = effectiveScores[currentBlockSubjects[0]] || 0;
                    let m2 = effectiveScores[currentBlockSubjects[1]] || 0;
                    let m3 = effectiveScores[currentBlockSubjects[2]] || 0;
                    currentBestScore = m1 + m2 + m3;

                    // Xử lý nhân đôi Toán (Hệ số 2)
                    if (industry.mathWeight === 2 && currentBlockSubjects.includes("m-toan")) {
                        let totalWithWeight = (effectiveScores["m-toan"] * 2) + 
                            (currentBlockSubjects.filter(s => s !== "m-toan").reduce((sum, s) => sum + (effectiveScores[s] || 0), 0));
                        currentBestScore = (totalWithWeight * 3) / 4;
                    }
                }
            }

            return currentBestScore;
        }
    },

    // 🎯 Cấu hình HSA của HUS: Chờ cập nhật barem
    hsaConfig: {
        status: "updating"
    },

    // 🎯 Danh sách ngành học mẫu của HUS
    industries: {
        "QHT01": {
            name: "Toán học (Toán x2)",
            combs: ["A00", "A01"],
            mathWeight: 2,
            scores: { combined: 25.50, hsa: 95.00 }
        },
        "QHT02": {
            name: "Máy tính và Khoa học thông tin (Toán x2)",
            combs: ["A00", "A01", "D07", "D08"],
            mathWeight: 2,
            scores: { combined: 26.85, hsa: 100.50 }
        },
        "QHT03": {
            name: "Vật lý học",
            combs: ["A00", "A01"],
            mathWeight: 1,
            scores: { combined: 22.00, hsa: 80.00 }
        }
    }
};

// 🎯 Tự động nạp bảng chọn cấu hình IELTS lên giao diện select của index.html
if (typeof UNIVERSITY_CERTIFICATES !== "undefined") {
    UNIVERSITY_CERTIFICATES["HUS"] = {
        "Chứng chỉ IELTS": {
            lang: "m-anh",
            levels: {
                "5.5": { text: "IELTS 5.5 (Quy đổi môn Anh: 9.0đ)", score: 9.0 },
                "6.0": { text: "IELTS 6.0 (Quy đổi môn Anh: 9.5đ)", score: 9.5 },
                "6.5": { text: "IELTS 6.5+ (Quy đổi môn Anh: 10.0đ)", score: 10.0 }
            }
        }
    };
}
