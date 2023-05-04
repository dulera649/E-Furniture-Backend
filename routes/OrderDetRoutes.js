const express = require('express')
const router = express.Router()
const orderdetailsController = require('../controller/OrderDetailsController')

router.post('/orderdetails', orderdetailsController.addOrderDetails)
router.get('/orderdetails', orderdetailsController.getAllOrderDetails)
router.get('/orderdetails/:id', orderdetailsController.getOrderDetailsById)
router.delete('/orderdetails/:id', orderdetailsController.deleteOrderDetails)
router.put('/orderdetails/:id', orderdetailsController.updateOrderDetails)
router.get('/orderdetails', orderdetailsController.getOrderDetailsWith)
module.exports = router