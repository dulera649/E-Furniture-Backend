const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.get('/getuser', userController.getUserDataWithRole)
router.post('/user', userController.addUser)
router.get('/user/:id', userController.getUserById)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.updateUser)
router.post('/login', userController.loginUser)
router.get('/user', userController.getUserData)

module.exports = router