const express = require('express')
const router = express.Router()
const cityController = require('../controller/CityController')

router.post('/city', cityController.addCity);
router.get('/city', cityController.getAllCity);
router.get('/city/:id', cityController.getCityById)
router.delete('/city/:id', cityController.deleteCity)
router.put('/city/:id', cityController.updateCity)
router.get('/city', cityController.getCityDataWithState)
module.exports = router