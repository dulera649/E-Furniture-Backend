const express = require('express');
const router = express.Router();
const stateController = require('../controller/StateController');

router.post('/state', stateController.addState);
router.get('/state', stateController.getAllState);
router.get('/state/:id', stateController.getStateById)
router.delete('/state/:id', stateController.deleteState)
router.put('/state/:id', stateController.updateState)

module.exports = router