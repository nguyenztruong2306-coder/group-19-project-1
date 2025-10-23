// Một mảng tạm để lưu trữ users (thay cho database ở hoạt động này)
let users = [
  { id: 221123, name: "Nguyễn Minh Trường", email: "truong@example.com" },
  { id: 2, name: "Yếp Nguyễn Kim Thiên", email: "thien@example.com" },
  { id: 3, name: "Trần Bảo Long", email: "long@example.com" }
];
let nextId = 4; // Biến đếm để tạo ID cho user mới

// --- GET /api/users ---
// Lấy danh sách tất cả người dùng
exports.getUsers = (req, res) => {
  // Trả về mảng users dưới dạng JSON
  res.json(users);
};

// --- POST /api/users ---
// Tạo một người dùng mới
exports.createUser = (req, res) => {
  // Lấy name và email từ "body" của request
  const { name, email } = req.body;

  // Validation (kiểm tra) đơn giản
  if (!name || !email) {
    return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ name và email" });
  }

  // Tạo đối tượng user mới
  const newUser = {
    id: nextId++,
    name: name,
    email: email
  };

  // Thêm user mới vào mảng
  users.push(newUser);

  // Phản hồi status 201 (Created) và thông tin user vừa tạo
  res.status(201).json(newUser);
};