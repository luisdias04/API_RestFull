const express = require ('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/',controller.get)
router.post('/',controller.post)
router.patch('/',controller.patch)
router.put('/',controller.put)
router.delete('/',controller.delete)

module.exports = router