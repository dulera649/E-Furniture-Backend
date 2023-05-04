const express = require('express');
const router = express.Router();
const statusController = require('../controller/StatusController');

router.post('/status', statusController.addStatus);
router.get('/status', statusController.getAllStatus);
router.get('/status/:id', statusController.getStatusById)
router.delete('/status/:id', statusController.deleteStatus)
router.put('/status/:id', statusController.updateStatus)

module.exports = router