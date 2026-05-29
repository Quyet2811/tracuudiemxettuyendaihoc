// =========================================================================
// CƠ SỞ DỮ LIỆU TỔ HỢP ĐẦY ĐỦ (160 TỔ HỢP CẬP NHẬT)
// =========================================================================
const COMBINATIONS_DB = {
    "A00": ["m-toan", "m-ly", "m-hoa"],
    "A01": ["m-toan", "m-ly", "m-anh"],
    "A02": ["m-toan", "m-ly", "m-sinh"],
    "A03": ["m-toan", "m-ly", "m-su"],
    "A04": ["m-toan", "m-ly", "m-dia"],
    "A05": ["m-toan", "m-hoa", "m-su"],
    "A06": ["m-toan", "m-hoa", "m-dia"],
    "A07": ["m-toan", "m-su", "m-dia"],
    "AH1": ["m-toan", "m-dia", "m-han"],
    "AH2": ["m-toan", "m-hoa", "m-han"],
    "AH3": ["m-toan", "m-ly", "m-han"],
    "AH4": ["m-toan", "m-sinh", "m-han"],
    "AH5": ["m-toan", "m-su", "m-han"],
    "B00": ["m-toan", "m-hoa", "m-sinh"],
    "B01": ["m-toan", "m-su", "m-sinh"],
    "B02": ["m-toan", "m-sinh", "m-dia"],
    "B03": ["m-toan", "m-sinh", "m-van"],
    "B08": ["m-toan", "m-sinh", "m-anh"],
    "C00": ["m-van", "m-su", "m-dia"],
    "C01": ["m-van", "m-toan", "m-ly"],
    "C02": ["m-van", "m-toan", "m-hoa"],
    "C03": ["m-van", "m-toan", "m-su"],
    "C04": ["m-van", "m-toan", "m-dia"],
    "C05": ["m-van", "m-ly", "m-hoa"],
    "C06": ["m-van", "m-ly", "m-sinh"],
    "C07": ["m-van", "m-su", "m-ly"],
    "C08": ["m-van", "m-hoa", "m-sinh"],
    "C09": ["m-van", "m-dia", "m-ly"],
    "C10": ["m-van", "m-su", "m-hoa"],
    "C11": ["m-van", "m-dia", "m-hoa"],
    "C12": ["m-van", "m-su", "m-sinh"],
    "C13": ["m-van", "m-sinh", "m-dia"],
    "D01": ["m-toan", "m-van", "m-anh"],
    "D02": ["m-van", "m-toan", "m-nga"],
    "D03": ["m-van", "m-toan", "m-phap"],
    "D04": ["m-van", "m-toan", "m-trung"],
    "D05": ["m-van", "m-toan", "m-duc"],
    "D06": ["m-van", "m-toan", "m-nhat"],
    "D07": ["m-toan", "m-hoa", "m-anh"],
    "D08": ["m-toan", "m-sinh", "m-anh"],
    "D09": ["m-toan", "m-su", "m-anh"],
    "D10": ["m-toan", "m-dia", "m-anh"],
    "D11": ["m-van", "m-ly", "m-anh"],
    "D12": ["m-van", "m-hoa", "m-anh"],
    "D13": ["m-van", "m-sinh", "m-anh"],
    "D14": ["m-van", "m-su", "m-anh"],
    "D15": ["m-van", "m-dia", "m-anh"],
    "D16": ["m-toan", "m-dia", "m-duc"],
    "D17": ["m-toan", "m-dia", "m-nhat"],
    "D18": ["m-toan", "m-dia", "m-phap"],
    "D19": ["m-toan", "m-dia", "m-trung"],
    "D20": ["m-toan", "m-hoa", "m-duc"],
    "D21": ["m-toan", "m-hoa", "m-nga"],
    "D22": ["m-toan", "m-hoa", "m-nhat"],
    "D23": ["m-toan", "m-hoa", "m-phap"],
    "D24": ["m-toan", "m-hoa", "m-trung"],
    "D25": ["m-toan", "m-ly", "m-duc"],
    "D26": ["m-toan", "m-ly", "m-nga"],
    "D27": ["m-toan", "m-ly", "m-nhat"],
    "D28": ["m-toan", "m-ly", "m-phap"],
    "D29": ["m-toan", "m-ly", "m-trung"],
    "D30": ["m-toan", "m-sinh", "m-duc"],
    "D31": ["m-toan", "m-sinh", "m-nga"],
    "D32": ["m-toan", "m-sinh", "m-nhat"],
    "D33": ["m-toan", "m-sinh", "m-phap"],
    "D34": ["m-toan", "m-sinh", "m-trung"],
    "D35": ["m-toan", "m-su", "m-duc"],
    "D36": ["m-toan", "m-su", "m-nga"],
    "D37": ["m-toan", "m-su", "m-nhat"],
    "D38": ["m-toan", "m-su", "m-phap"],
    "D39": ["m-toan", "m-su", "m-trung"],
    "D40": ["m-van", "m-dia", "m-duc"],
    "D41": ["m-van", "m-dia", "m-nga"],
    "D42": ["m-van", "m-dia", "m-nhat"],
    "D43": ["m-van", "m-dia", "m-phap"],
    "D44": ["m-van", "m-dia", "m-trung"],
    "D45": ["m-van", "m-hoa", "m-duc"],
    "D46": ["m-van", "m-hoa", "m-nga"],
    "D47": ["m-van", "m-hoa", "m-nhat"],
    "D48": ["m-van", "m-hoa", "m-phap"],
    "D49": ["m-van", "m-hoa", "m-trung"],
    "D50": ["m-van", "m-ly", "m-duc"],
    "D51": ["m-van", "m-ly", "m-nga"],
    "D52": ["m-van", "m-ly", "m-nhat"],
    "D53": ["m-van", "m-ly", "m-phap"],
    "D54": ["m-van", "m-ly", "m-trung"],
    "D55": ["m-van", "m-sinh", "m-duc"],
    "D56": ["m-van", "m-sinh", "m-nga"],
    "D57": ["m-van", "m-sinh", "m-nhat"],
    "D58": ["m-van", "m-sinh", "m-phap"],
    "D59": ["m-van", "m-sinh", "m-trung"],
    "D60": ["m-van", "m-su", "m-duc"],
    "D61": ["m-van", "m-su", "m-nga"],
    "D62": ["m-van", "m-su", "m-nhat"],
    "D63": ["m-van", "m-su", "m-phap"],
    "D64": ["m-van", "m-su", "m-trung"],
    "D65": ["m-van", "m-gdktdpl", "m-nga"],
    "D70": ["m-van", "m-gdktdpl", "m-phap"],
    "D71": ["m-van", "m-gdktdpl", "m-trung"],
    "D89": ["m-toan", "m-gdktdpl", "m-trung"],
    "DD2": ["m-van", "m-toan", "m-han"],
    "DH1": ["m-van", "m-dia", "m-han"],
    "DH2": ["m-van", "m-hoa", "m-han"],
    "DH3": ["m-van", "m-ly", "m-han"],
    "DH4": ["m-van", "m-sinh", "m-han"],
    "DH5": ["m-van", "m-su", "m-han"],
    "X01": ["m-van", "m-toan", "m-gdktdpl"],
    "X02": ["m-toan", "m-van", "m-tin"],
    "X03": ["m-toan", "m-van", "m-cncn"],
    "X04": ["m-toan", "m-van", "m-cnnn"],
    "X05": ["m-toan", "m-ly", "m-gdktdpl"],
    "X06": ["m-toan", "m-ly", "m-tin"],
    "X07": ["m-toan", "m-ly", "m-cncn"],
    "X08": ["m-toan", "m-ly", "m-cnnn"],
    "X09": ["m-toan", "m-hoa", "m-gdktdpl"],
    "X10": ["m-toan", "m-hoa", "m-tin"],
    "X11": ["m-toan", "m-hoa", "m-cncn"],
    "X12": ["m-toan", "m-hoa", "m-cnnn"],
    "X13": ["m-toan", "m-sinh", "m-gdktdpl"],
    "X14": ["m-toan", "m-sinh", "m-tin"],
    "X15": ["m-toan", "m-sinh", "m-cncn"],
    "X16": ["m-toan", "m-sinh", "m-cnnn"],
    "X17": ["m-toan", "m-su", "m-gdktdpl"],
    "X18": ["m-toan", "m-su", "m-tin"],
    "X19": ["m-toan", "m-su", "m-cncn"],
    "X20": ["m-toan", "m-su", "m-cnnn"],
    "X21": ["m-toan", "m-dia", "m-gdktdpl"],
    "X22": ["m-toan", "m-dia", "m-tin"],
    "X23": ["m-toan", "m-dia", "m-cncn"],
    "X24": ["m-toan", "m-dia", "m-cnnn"],
    "X25": ["m-toan", "m-anh", "m-gdktdpl"],
    "X26": ["m-toan", "m-anh", "m-tin"],
    "X27": ["m-toan", "m-anh", "m-cncn"],
    "X28": ["m-toan", "m-anh", "m-cnnn"],
    "X29": ["m-toan", "m-gdktdpl", "m-nga"],
    "X30": ["m-toan", "m-tin", "m-nga"],
    "X31": ["m-toan", "m-cncn", "m-nga"],
    "X32": ["m-toan", "m-cnnn", "m-nga"],
    "X33": ["m-toan", "m-gdktdpl", "m-phap"],
    "X34": ["m-toan", "m-tin", "m-phap"],
    "X35": ["m-toan", "m-cncn", "m-phap"],
    "X41": ["m-toan", "m-gdktdpl", "m-duc"],
    "X45": ["m-toan", "m-gdktdpl", "m-nhat"],
    "X46": ["m-toan", "m-nhat", "m-tin"],
    "X53": ["m-toan", "m-gdktdpl", "m-tin"],
    "X54": ["m-toan", "m-gdktdpl", "m-cncn"],
    "X55": ["m-toan", "m-gdktdpl", "m-cnnn"],
    "X56": ["m-toan", "m-tin", "m-cncn"],
    "X57": ["m-toan", "m-tin", "m-cnnn"],
    "X58": ["m-van", "m-ly", "m-gdktdpl"],
    "X59": ["m-van", "m-ly", "m-tin"],
    "X60": ["m-van", "m-ly", "m-cncn"],
    "X61": ["m-van", "m-ly", "m-cnnn"],
    "X62": ["m-van", "m-hoa", "m-gdktdpl"],
    "X63": ["m-van", "m-hoa", "m-tin"],
    "X64": ["m-van", "m-hoa", "m-cncn"],
    "X65": ["m-van", "m-hoa", "m-cnnn"],
    "X66": ["m-van", "m-sinh", "m-gdktdpl"],
    "X67": ["m-van", "m-sinh", "m-tin"],
    "X68": ["m-van", "m-sinh", "m-cncn"],
    "X69": ["m-van", "m-sinh", "m-cnnn"],
    "X70": ["m-van", "m-su", "m-gdktdpl"],
    "X71": ["m-van", "m-su", "m-tin"],
    "X72": ["m-van", "m-su", "m-cncn"],
    "X73": ["m-van", "m-su", "m-cnnn"],
    "X74": ["m-van", "m-dia", "m-gdktdpl"],
    "X75": ["m-van", "m-dia", "m-tin"],
    "X76": ["m-van", "m-dia", "m-cncn"],
    "X77": ["m-van", "m-dia", "m-cnnn"],
    "X78": ["m-van", "m-gdktdpl", "m-anh"],
    "X79": ["m-van", "m-anh", "m-tin"],
    "X80": ["m-van", "m-anh", "m-cncn"],
    "X81": ["m-van", "m-anh", "m-cnnn"],
    "X86": ["m-van", "m-gdktdpl", "m-phap"],
    "X90": ["m-van", "m-gdktdpl", "m-trung"],
    "X94": ["m-van", "m-gdktdpl", "m-duc"],
    "X98": ["m-van", "m-gdktdpl", "m-nhat"],
    "Y07": ["m-van", "m-gdktdpl", "m-tin"],
    "Y08": ["m-van", "m-gdktdpl", "m-cncn"],
    "Y09": ["m-van", "m-gdktdpl", "m-cnnn"],
    "Y10": ["m-van", "m-tin", "m-cncn"],
    "Y11": ["m-van", "m-tin", "m-cnnn"],
};

// =========================================================================
// HÀM HELPER ĐÓNG GÓI TỰ ĐỘNG
// =========================================================================
function makeTmuSchools(codes, score) {
    return codes.map(code => ({ schoolName: "Đại học Thương Mại (TMU)", code, lastYearScore: score }));
}
function makeHusSchools(codes, score) {
    return codes.map(code => ({ schoolName: "ĐH Khoa học Tự nhiên (HUS)", code, lastYearScore: score }));
}
function makeUebSchools(codes, score, mathMin) {
    return codes.map(code => ({ schoolName: "Đại học Kinh tế (UEB)", code, lastYearScore: score, mathMin: mathMin }));
}

// =========================================================================
// KHO DỮ LIỆU ĐỐI CHIẾU CHÍNH THỨC (ĐẦY ĐỦ 100%)
// =========================================================================
const DATA_DATABASE = {
    // -------------------------------------------------------------------------
    // 1. TRƯỜNG ĐẠI HỌC KINH TẾ - ĐHQGHN (UEB)
    // -------------------------------------------------------------------------
    "UEB_All": {
        name: "UEB - Trường Đại học Kinh tế",
        subs: {
            "7310101": { name: "Kinh tế", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 24.3, 7.25) },
            "7310105": { name: "Kinh tế phát triển", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 24.2, 6.0) },
            "7310106": { name: "Kinh tế quốc tế", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 25.72, 6.25) },
            "734010101": { name: "Quản trị kinh doanh", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 24.93, 8.0) },
            "7340201": { name: "Tài chính – Ngân hàng", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 24.25, 8.0) },
            "7340301": { name: "Kế toán", schools: makeUebSchools(["D01","A01","D09","D10","C01","C03","C04","X01"], 24.2, 7.25) }
        }
    },

    // -------------------------------------------------------------------------
    // 2. TRƯỜNG ĐẠI HỌC THƯƠNG MẠI (TMU)
    // -------------------------------------------------------------------------
    "TMU_QuanTri": {
        name: "TMU - Khối Quản trị, Nhân lực & Du lịch",
        subs: {
            "TM01": { name: "Quản trị kinh doanh (Quản trị kinh doanh)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.8) },
            "TM02": { name: "Quản trị kinh doanh (Tiếng Trung thương mại)", schools: makeTmuSchools(["A01","D01","D04","D07"], 25.3) },
            "TM03": { name: "Quản trị kinh doanh (Khởi nghiệp và PTKD)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.1) },
            "TM04": { name: "Quản trị khách sạn", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.4) },
            "TM05": { name: "Quản trị khách sạn (Chương trình CLC)", schools: makeTmuSchools(["A01","D01","D07"], 24.5) },
            "TM06": { name: "Quản trị dịch vụ du lịch và lữ hành", schools: makeTmuSchools(["A00","A01","D01","D07"], 24.8) },
            "TM37": { name: "Quản trị nhân lực (QTNL doanh nghiệp)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.6) },
            "TM42": { name: "Quản trị kinh doanh (Tiếng Pháp thương mại)", schools: makeTmuSchools(["A00","A01","D01","D03","D07"], 22.5) }
        }
    },
    "TMU_Marketing": {
        name: "TMU - Khối Marketing & Thương mại",
        subs: {
            "TM07": { name: "Marketing (Marketing Thương mại)", schools: makeTmuSchools(["A00","A01","D01","D07"], 27.3) },
            "TM08": { name: "Marketing (Chương trình CLC)", schools: makeTmuSchools(["A01","D01","D07"], 26.2) },
            "TM09": { name: "Marketing (Marketing số)", schools: makeTmuSchools(["A00","A01","D01","D07"], 27.5) },
            "TM10": { name: "Marketing (Quản trị Thương hiệu)", schools: makeTmuSchools(["A00","A01","D01","D07"], 26.8) },
            "TM11": { name: "Kinh doanh thương mại", schools: makeTmuSchools(["A00","A01","D01","D07"], 26.2) }
        }
    },
    "TMU_KeToan": {
        name: "TMU - Khối Kế toán & Kiểm toán",
        subs: {
            "TM12": { name: "Kế toán (Kế toán doanh nghiệp)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.8) },
            "TM13": { name: "Kế toán (Chương trình CLC)", schools: makeTmuSchools(["A01","D01","D07"], 24.8) },
            "TM14": { name: "Kế toán (Kế toán công)", schools: makeTmuSchools(["A00","A01","D01","D07"], 24.8) },
            "TM15": { name: "Kiểm toán", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.7) }
        }
    },
    "TMU_Logistics": {
        name: "TMU - Khối Kinh tế, Quốc tế & Logistics",
        subs: {
            "TM16": { name: "Kinh doanh thương mại (Chương trình CLC)", schools: makeTmuSchools(["A01","D01","D07"], 24.9) },
            "TM17": { name: "Logistics và Quản lý chuỗi cung ứng", schools: makeTmuSchools(["A00","A01","D01","D07"], 27.8) },
            "TM18": { name: "Logistics và Quản lý chuỗi cung ứng (CLC)", schools: makeTmuSchools(["A01","D01","D07"], 26.5) },
            "TM19": { name: "Kinh doanh quốc tế (Thương mại quốc tế)", schools: makeTmuSchools(["A00","A01","D01","D07"], 26.8) },
            "TM20": { name: "Kinh doanh quốc tế (Mô hình định hướng nghề nghiệp)", schools: makeTmuSchools(["A01","D01","D07"], 25.5) },
            "TM21": { name: "Kinh tế quốc tế (Kinh tế quốc tế)", schools: makeTmuSchools(["A00","A01","D01","D07"], 26.6) },
            "TM22": { name: "Kinh tế (Quản lý kinh tế)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.1) }
        }
    },
    "TMU_TaiChinh": {
        name: "TMU - Khối Tài chính - Ngân hàng",
        subs: {
            "TM24": { name: "Tài chính - Ngân hàng (TC-NH thương mại)", schools: makeTmuSchools(["A00","A01","D01","D07"], 26.1) },
            "TM25": { name: "Tài chính - Ngân hàng (Chương trình CLC)", schools: makeTmuSchools(["A01","D01","D07"], 24.7) },
            "TM26": { name: "Tài chính - Ngân hàng (Tài chính công)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.2) },
            "TM27": { name: "Tài chính - Ngân hàng (Công nghệ Fintech)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.0) }
        }
    },
    "TMU_HeThongSo": {
        name: "TMU - Khối TMĐT, Kinh tế số & HTTT",
        subs: {
            "TM28": { name: "Thương mại điện tử (Quản trị TMĐT)", schools: makeTmuSchools(["A00","A01","D01","D07"], 27.6) },
            "TM30": { name: "Thương mại điện tử (Kinh doanh số)", schools: makeTmuSchools(["A00","A01","D01","D07"], 27.2) },
            "TM31": { name: "Hệ thống thông tin quản lý (Quản trị HTTT)", schools: makeTmuSchools(["A00","A01","D01","D07"], 24.8) },
            "TM39": { name: "Kinh tế số (Phân tích KD môi trường số)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.1) }
        }
    },
    "TMU_NgonNgu": {
        name: "TMU - Khối Ngôn ngữ & Luật",
        subs: {
            "TM33": { name: "Ngôn ngữ Anh (Tiếng Anh thương mại)", schools: makeTmuSchools(["A01","D01","D07"], 26.1) },
            "TM40": { name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại)", schools: makeTmuSchools(["A01","D01","D04","D07"], 27.4) },
            "TM34": { name: "Luật kinh tế (Luật kinh tế)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.4) },
            "TM36": { name: "Luật kinh tế (Luật thương mại quốc tế)", schools: makeTmuSchools(["A00","A01","D01","D07"], 25.1) }
        }
    },

    // -------------------------------------------------------------------------
    // 3. TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN (HUS)
    // -------------------------------------------------------------------------
    "HUS_Toan_Tin": {
        name: "HUS - Khối Toán học, Khoa học dữ liệu & Máy tính",
        subs: {
            "QHT01": { name: "Toán học", schools: makeHusSchools(["A00","A01","C01","D07","D08","X26"], 25.9) },
            "QHT02": { name: "Toán tin", schools: makeHusSchools(["A00","A01","C01","D07","D08","X26"], 25.5) },
            "QHT93": { name: "Khoa học dữ liệu", schools: makeHusSchools(["A00","A01","C01","D07","D08","X26"], 26.0) },
            "QHT98": { name: "Khoa học máy tính và thông tin", schools: makeHusSchools(["A00","A01","C01","D07","D08","X26"], 25.35) }
        }
    },
    "HUS_VatLy": {
        name: "HUS - Khối Vật lý, Hạt nhân & Bán dẫn",
        subs: {
            "QHT03": { name: "Vật lý học", schools: makeHusSchools(["A00","A01","A02","B00","C01","C02","D07","X02","X06","X26"], 24.65) },
            "QHT04": { name: "Khoa học vật liệu", schools: makeHusSchools(["A00","A01","A02","B00","C01","C02","D07","X02","X06","X26"], 24.2) },
            "QHT05": { name: "Công nghệ kỹ thuật hạt nhân", schools: makeHusSchools(["A00","A01","A02","B00","C01","C02","D07","X02","X06","X26"], 23.5) },
            "QHT94": { name: "Kỹ thuật điện tử và tin học", schools: makeHusSchools(["A00","A01","A02","B00","C01","C02","D07","X02","X06","X26"], 24.57) },
            "QHT99": { name: "Công nghệ Bán dẫn", schools: makeHusSchools(["A00","A01","A02","B00","C01","C02","D07","X02","X06","X26"], 25.55) }
        }
    },
    "HUS_HoaHoc": {
        name: "HUS - Khối Hóa học, Kỹ thuật hóa & Hóa dược",
        subs: {
            "QHT06": { name: "Hoá học", schools: makeHusSchools(["A00","A05","A06","B00","C02","D07","X09","X10","X11","X12"], 23.9) },
            "QHT07": { name: "Công nghệ kỹ thuật hoá học", schools: makeHusSchools(["A00","A05","A06","B00","C02","D07","X09","X10","X11","X12"], 23.45) },
            "QHT43": { name: "Hoá dược", schools: makeHusSchools(["A00","A05","A06","B00","C02","D07","X09","X10","X11","X12"], 23.7) }
        }
    },
    "HUS_SinhHoc": {
        name: "HUS - Khối Sinh học, Thực phẩm & Sinh dược học",
        subs: {
            "QHT08": { name: "Sinh học", schools: makeHusSchools(["A00","A02","B00","B01","B02","B03","B08","D07","D08","X13","X14","X15","X16"], 20.05) },
            "QHT09": { name: "Công nghệ sinh học", schools: makeHusSchools(["A00","A02","B00","B01","B02","B03","B08","D07","D08","X13","X14","X15","X16"], 22.05) },
            "QHT81": { name: "Sinh dược học", schools: makeHusSchools(["A00","A02","B00","B01","B02","B03","B08","D07","D08","X13","X14","X15","X16"], 20.1) },
            "QHT96": { name: "Khoa học và công nghệ thực phẩm", schools: makeHusSchools(["A00","A01","A02","B00","B03","C01","C02","D01","D07","D08","X09","X10","X11","X12","X13","X14","X15","X16"], 22.8) }
        }
    },
    "HUS_TraiDat": {
        name: "HUS - Khối Môi trường, Trái đất & Địa chất",
        subs: {
            "QHT10": { name: "Địa lý tự nhiên", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B02","C04","D01","D10","D20","X01","X21","X25"], 23.95) },
            "QHT12": { name: "Quản lý đất đai", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B02","C04","D01","D10","D20","X01","X21","X25"], 22.27) },
            "QHT13": { name: "Khoa học môi trường", schools: makeHusSchools(["A00","A01","A02","B00","B03","C01","C02","D01","D07","D08","X09","X10","X11","X12","X13","X14","X15","X16"], 21.25) },
            "QHT15": { name: "Công nghệ kỹ thuật môi trường", schools: makeHusSchools(["A00","A01","A02","B00","B03","C01","C02","D01","D07","D08","X09","X10","X11","X12","X13","X14","X15","X16"], 21.55) },
            "QHT16": { name: "Khí tượng và khí hậu học", schools: makeHusSchools(["A00","A01","A02","A04","A06","B00","B02","B03","B08","C01","C02","C04","D01","D07","D10","X26"], 22.8) },
            "QHT17": { name: "Hải dương học", schools: makeHusSchools(["A00","A01","A02","A04","A06","B00","B02","B03","B08","C01","C02","C04","D01","D07","D10","X26"], 21.5) },
            "QHT18": { name: "Địa chất học", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B03","C01","C02","C04","D01","D07","D08","D09","D10","X01","X05","X09","X21","X25"], 22.05) },
            "QHT20": { name: "Quản lý tài nguyên và môi trường", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B03","C01","C02","C04","D01","D07","D08","D09","D10","X01","X05","X09","X21","X25"], 22.2) },
            "QHT82": { name: "Môi trường, sức khỏe và an toàn", schools: makeHusSchools(["A00","A01","A02","B00","B03","C01","C02","D01","D07","D08","X09","X10","X11","X12","X13","X14","X15","X16"], 21.2) },
            "QHT91": { name: "Khoa học thông tin địa không gian", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B02","C04","D01","D10","D20","X01","X21","X25"], 23.5) },
            "QHT92": { name: "Tài nguyên và môi trường nước", schools: makeHusSchools(["A00","A01","A02","A04","A06","B00","B02","B03","B08","C01","C02","C04","D01","D07","D10","X26"], 21.1) },
            "QHT95": { name: "Quản lý phát triển đô thị và bất động sản", schools: makeHusSchools(["A00","A01","A04","A06","A07","B00","B02","C04","D01","D10","D20","X01","X21","X25"], 22.9) }
        }
    }
};
