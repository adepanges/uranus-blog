module.exports = (app) => {
	app.use((err, req, res, next) => { 
		const { start, httpStatus, message, previousError, stack } = err;
		res.locals.response = {
			code: 501,
			messages: message
		}
		next();
	})
}