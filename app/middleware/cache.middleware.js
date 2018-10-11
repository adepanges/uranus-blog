const bodyParser = require('body-parser');
const responseTime = require('response-time')
const siteModel = loadModel('mysql/site');

// global.authenticate = loadController(`api/v1/auth`).authenticate;

module.exports = (app) => {
	app.use((req, res, next) => {
		let key = '__express__' + req.originalUrl || req.url;
		console.log(key)
		console.log('haiiii');
		next();
	});
}