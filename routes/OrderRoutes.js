const express = require('express')
const router = express.Router()
const orderController = require('../controller/OrderController')

router.post('/order', orderController.addOrder);
router.get('/order', orderController.getAllOrder);
router.get('/order/:id', orderController.getOrderById)
router.delete('/order/:id', orderController.deleteOrder)
router.put('/order/:id', orderController.updateOrder)
router.get('/order', orderController.getOrderWith)
module.exports = router