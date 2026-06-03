UNIVERSITY_DATABASE["HUS"] = {
    name: "Đại học Khoa học Tự nhiên - ĐHQGHN",
  thptConfig: {
    calculate: function(subjects, userScores, industry) {
      // Bước 1: Tính tổng thô 3 môn trước
      let score = userScores[subjects[0]] + userScores[subjects[1]] + userScores[subjects[2]];
      // Bước 2: Kiểm tra xem ngành này có nhân đôi môn Toán không (mathWeight === 2)
      // và trong tổ hợp học sinh chọn có môn Toán ("m-toan") không
      if (industry.mathWeight === 2 && subjects.includes("m-toan")) {
        // Lọc bỏ môn Toán ra để tìm 2 môn còn lại
        let otherSubjects = subjects.filter(s => s !== "m-toan");
        // Công thức tính có hệ số: (Toán x 2 + Môn_còn_lại_1 + Môn_còn_lại_2)
        let totalWithWeight = (userScores["m-toan"] * 2) + userScores[otherSubjects[0]] + userScores[otherSubjects[1]];
        // Quy đổi kết quả về lại thang điểm 30
        score = (totalWithWeight * 3) / 4;
      }
      // Trả về số điểm cuối cùng sau khi tính toán xong
      return score;
    }
  },
  // 🎯 Công thức tính điểm HSA đặc thù của HUS (Tính trên thang 150 gốc của ĐHQG)
  hsaConfig: {
    status: "updating"
  },
    
