const bodyParser = require('body-parser');
const responseTime = require('response-time')

const EventEmitter = require('events').EventEmitter;
const util = require('util');

// global.authenticate = loadController(`api/v1/auth`).authenticate;


const attachListeners = (app) => {
	util.inherits(app, EventEmitter);

	app.on('check', function (data) {
		console.log(data)
	})

	app.on('response', function (res, data) {

		res.locals.response = data;
		var meta = {
			code: 200,
			messages: 'Success',
		}
		
		if(typeof res.locals.response != 'undefined'){
			if(typeof res.locals.response.code != 'undefined') {
				meta.code = res.locals.response.code;
				delete res.locals.response.code;
			}
			
			if(typeof res.locals.response.messages != 'undefined') {
				meta.messages = res.locals.response.messages
				delete res.locals.response.messages;
			}

			if (typeof res.locals.response.data == 'undefined') {
				delete res.locals.response.data;
			}
		}
		if (Object.keys(res.locals.response).length === 0) res.locals.response = [];

		res.status(meta.code).json({
			meta: meta,
			data: res.locals.response || [],
		})
	});
}

module.exports = (app) => {

	app.disable('x-powered-by');
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(responseTime());
	attachListeners(app)

	app.use((req, res, next) => {
		
		var protocol = String(req.protocol).toUpperCase(),
			hostname = req.hostname;

		if (protocol == 'HTTP') logger.http(`[${req.method}] ${hostname}${req.url}`);
		next();
	});
}