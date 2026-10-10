console.log("--- MINH HỌA HOISTING ---");

// A. Function Declaration (HOẠT ĐỘNG: Gọi trước khi khai báo)
console.log(sumDeclaration(5, 3)); // Output: 8

function sumDeclaration(a, b) {
  return a + b;
}


// B. Function Expression (LỖI: TypeError hoặc ReferenceError nếu gọi trước)
try {
  console.log(sumExpression(5, 3)); 
} catch (error) {
  console.log("[LỖI Function Expression Hoisting]:", error.message);
}

let sumExpression = function(a, b) {
  return a + b;
};


// C. Arrow Function (LỖI: Không được hoisted)
try {
  console.log(sumArrow(5, 3)); 
} catch (error) {
  console.log("[LỖI Arrow Function Hoisting]:", error.message);
}

let sumArrow = (a, b) => a + b;

// Bảng so sánh Trade-off:
// Tiêu chuẩn	| Function Declaration	| Function Expression   | Arrow Function (=>)
// Cơ chế Hoisting	| Được nâng lên đầu phạm vi (gọi trước khi định nghĩa)	| Không được nâng (phải định nghĩa trước khi gọi)	| Không được nâng (phải định nghĩa trước khi gọi)
// Cú pháp	| Dài, dùng từ khóa function	| Gán vào biến const fn = function	| Ngắn gọn, hỗ trợ implicit return
// Con trỏ this	 | Động (phụ thuộc ngữ cảnh gọi hàm)	| Động (phụ thuộc ngữ cảnh gọi hàm)	| Kế thừa từ ngữ cảnh bao ngoài (Lexical this)
// Khuyến nghị chuẩn	| Dùng cho các hàm tiện ích toàn cục	| Dùng khi cần hàm ẩn danh	| Khuyến nghị chuẩn ES6+ cho toàn dự án