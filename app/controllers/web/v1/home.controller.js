// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const User = loadModel('mongo/user')

function index(req, res, next) {
	res.render('home')
}

module.exports = {
	index
};