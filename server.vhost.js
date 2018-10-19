const vhost = require('vhost'),
	connect = require('connect');

require('dotenv').load();

global.BASE_PATH = __dirname;
global.APP_PATH = `${__dirname}/app`;
global.PORT = process.env.PORT || 3000;
global.DOMAIN_BLOG = process.env.DOMAIN_BLOG || 3000;

require('./helper')();

var app = connect(),
	app_blog = require('./init.returned');

app.use(vhost(DOMAIN_BLOG, app_blog()))
logger.debug('vhost ' + DOMAIN_BLOG + ' is listening');


app.listen(PORT, function(){
	logger.debug('vhost listening on port '+ PORT);
});


// #00C3C3