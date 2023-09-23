// routes/messageRouter.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Xử lý trường hợp "/message/"
router.get('/', messageController.getAllStudents);

// Xử lý trường hợp "/message/<id>"
router.get('/:id', messageController.getMessage);

module.exports = router;
