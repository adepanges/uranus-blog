const bodyParser = require('body-parser');
const responseTime = require('response-time')
const siteModel = loadModel('mysql/site');

// global.authenticate = loadController(`api/v1/auth`).authenticate;

module.exports = (app) => {
	
	app.disable('x-powered-by');
	// parse requests of content-type
	// application/x-www-form-urlencoded
	// app.use(bodyParser.urlencoded({ extended: true }));
	// application/json
	// app.use(bodyParser.json());
	
	// debuging proses sistem
	app.use(responseTime());
	
	app.use((req, res, next) => {
		var protocol = String(req.protocol).toUpperCase(),
		hostname = req.hostname;
		
		if(protocol == 'HTTP') logger.http(`[${req.method}] ${hostname} ${req.url}`);
		next();
	});
	
	app.use((req, res, next) => {
		res.locals.site = siteModel.getInformation();
		next();
	});

	app.use(function(req, res, next) {
		req.url = req.url.replace(/\/([^\/]+)\.[0-9a-f]+\.(css|js|jpg|png|gif|svg)$/, '/$1.$2');
		next();
	});
}