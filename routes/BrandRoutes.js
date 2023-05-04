const express = require('express');
const router = express.Router();
const BrandController = require('../controller/BrandController');

router.post('/brand', BrandController.addBrand);
router.get('/brand', BrandController.getAllBrand);

module.exports = router;