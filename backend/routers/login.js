const express = require ('express')
const router = express.Router()
const controller = require('../controllers/login')

router.get('/login',controller.get)
router.post('/login',controller.post)
router.patch('/login',controller.patch)
router.put('/login',controller.put)
router.delete('/login',controller.delete)

module.exports = router