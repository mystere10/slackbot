const express = require('express')
const botController = require('../controllers')

const router = express.Router()

router.post('/', botController.greetings)

module.exports = router
