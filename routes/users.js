const express = require('express')
const router = express.Router()
const { register, show } = require('../controllers/users')

router.get('/' , show)
router.post('/register', register)

module.exports = router