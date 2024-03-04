const bcrypt = require('bcrypt')
const User = require('../models/user')

const show = (req, res) => {
	console.log('show')
	res.send('show')
}

const register = (req, res) => {
	console.log('register')
	console.log(req.body)
	bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
		User.create({
			username: req.body.username,
			email: req.body.email,
			password: cryptPassword
		})
		.then((registered) => {
			req.session.user = {
				username: registered.username,
				user_id: registered.id,
			};
			console.log(req.session)
			res.json({
				message: 'New user is registered',
				user: registered,
				user_session: req.session.user
			})
		})
	})
}

module.exports = { register, show }