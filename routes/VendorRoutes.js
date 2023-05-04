const express = require('express')
const router = express.Router()
const vendorController = require('../controller/VenDetController')

router.post('/vendor', vendorController.addVendor);
router.get('/vendor', vendorController.getAllVendor);
router.get('/vendor/:id', vendorController.getVendorById)
router.delete('/vendor/:id', vendorController.deleteVendor)
router.put('/vendor/:id', vendorController.updateVendor)
router.get('/vendor', vendorController.getVendorDataWith)
module.exports = router