const express = require('express');
const cors = require('cors'); // <-- 1. THÊM DÒNG NÀY
require('dotenv').config();

const app = express();

// --- CẤU HÌNH MIDDLEWARE ---
app.use(cors()); // <-- 2. THÊM DÒNG NÀY (Cho phép React gọi)
app.use(express.json()); // Middleware để server hiểu được JSON

// --- KẾT NỐI VÀO ROUTES ---
const userRoutes = require('./routes/user'); // <-- 3. THÊM DÒNG NÀY
app.use('/api', userRoutes); // <-- 4. THÊM DÒNG NÀY (Kết nối route với tiền tố /api)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));