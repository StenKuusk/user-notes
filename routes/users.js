const express = require('express')
const router = express.Router()
console.log(router)
const { register, show } = require('../controllers/users')

console.log('routes')

router.get('/' , show)
router.post('/register', register)

module.exports = router