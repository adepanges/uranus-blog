module.exports = (app) => {
	app.use('/api', (req, res, next) => {

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