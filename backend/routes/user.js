const express = require('express');
const router = express.Router();

// Import controller mà chúng ta vừa tạo
const userController = require('../controllers/userController');

// --- Định nghĩa các đường dẫn ---

// Khi có request GET tới đường dẫn '/users'
// nó sẽ gọi hàm 'getUsers' từ controller
router.get('/users', userController.getUsers);

// Khi có request POST tới đường dẫn '/users'
// nó sẽ gọi hàm 'createUser' từ controller
router.post('/users', userController.createUser);

// Xuất router này ra để file server.js có thể dùng
module.exports = router;