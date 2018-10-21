const home = loadController(`web/v1/home`);

module.exports = (app) => {
	
	// ----- BEGIN : ACCESS STATIC FILE -------
	app.use(function(req, res, next) {
		req.url = req.url.replace(/\/([^\/]+)\.[0-9a-f]+\.(css|js|jpg|png|gif|svg)$/, '/$1.$2');
		next();
	});
	app.use(staticify.middleware);
	// ----- END : ACCESS STATIC FILE -------
	

	// ----- BEGIN : API -------
	loadMiddleware('request')(app)
	loadRouter('api_all')(app);
	loadMiddleware('error')(app);
	loadMiddleware('response')(app);
	// ----- END : API -------
	

	// ----- BEGIN : ACCESS PUBLIC TRAFIC -------
	// cek cache first for web
	// loadMiddleware('cache')(app);
	loadMiddleware('request_web')(app)
	app.get('/', home.index);
	app.get('/coba', home.index);
	app.get('/coba/a/b', home.index);
	// ----- END : ACCESS PUBLIC TRAFIC -------
};