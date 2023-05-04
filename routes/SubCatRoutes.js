const express = require('express');
const router = express.Router();
const SubCatController = require('../controller/SubCatController');

router.post('/subcat', SubCatController.addSubCategory);
router.get('/subcat', SubCatController.getAllSubCategory);

module.exports = router;