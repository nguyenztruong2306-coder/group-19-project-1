const express = require('express');
require('dotenv').config(); // Đọc file .env

const app = express();

// Middleware để đọc JSON
app.use(express.json());

// (Chúng ta sẽ thêm routes ở đây)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));