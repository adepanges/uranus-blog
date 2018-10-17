const vhost = require('vhost'),
	connect = require('connect');

global.BASE_PATH = __dirname;
global.APP_PATH = `${__dirname}/app`;
global.PORT = 3000;


var app = connect(),
	app_blog = require('./init.vhost');

app.use(vhost('blog.uranus', app_blog()))

app.listen(PORT, function(){
	logger.debug('vhost enabled Express server listening on port '+ PORT);
});