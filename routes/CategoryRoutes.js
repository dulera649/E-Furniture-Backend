const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.post('/category', categoryController.addCategory);
router.get('/category', categoryController.getAllCategory);

module.exports = router;