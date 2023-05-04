const express = require('express')
const router = express.Router()
const venproController = require('../controller/VenProController')

router.post('/venpro', venproController.addVenPro);
router.get('/ven', venproController.getAllVenPro);
router.get('/venpro/:id', venproController.getVenProById)
router.delete('/venpro/:id', venproController.deleteVenPro)
router.put('/venpro/:id', venproController.updateVenPro)
router.get('/venpro', venproController.getVenProDataWith)
module.exports = router