const express = require('express')
const router = express.Router()
const custaddController = require('../controller/CustAddController')

router.post('/custadd', custaddController.addCustAdd);
router.get('/custadd', custaddController.getAllCustAdd);
router.get('/custadd/:id', custaddController.getCustAddById)
router.delete('/custadd/:id', custaddController.deleteCustAdd)
router.put('/custadd/:id', custaddController.updateCustAdd)
router.get('/custadd', custaddController.getCustAddDataWith)
module.exports = router