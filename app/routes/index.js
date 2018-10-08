const express = require('express');
const home = loadController(`web/v1/home`);

module.exports = (app) => {

	loadMiddleware('request')(app);
	app.use('/public', express.static(BASE_PATH + '/public'))
	app.use('/template', express.static(BASE_PATH + '/template'))

	app.get('/', home.index);
	
	// load all all.route.js
	loadRouter('api_all')(app);
	
	// loadMiddleware('error')(app);
	// loadMiddleware('response')(app);
};
