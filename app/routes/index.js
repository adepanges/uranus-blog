const express = require('express');
const home = loadController(`web/v1/home`);
const path = require('path');
global.staticify = require('staticify')(path.join(BASE_PATH, 'public'));


module.exports = (app) => {
	
	loadMiddleware('request')(app);

	app.use(staticify.middleware);
	// app.use(express.static(path.join(BASE_PATH, 'public'), { maxAge: '30 days' }));
	
	// load all all.route.js
	loadRouter('api_all')(app);
	loadMiddleware('response')(app);
	

	// ----- BEGIN : ACCESS PUBLIC TRAFIC -------
	// cek cache first for web
	// loadMiddleware('cache')(app);
	app.get('/', home.index);
	app.get('/coba', home.index);
	app.get('/coba/a/b', home.index);
	// ----- END : ACCESS PUBLIC TRAFIC -------
	
	// loadMiddleware('error')(app);
};