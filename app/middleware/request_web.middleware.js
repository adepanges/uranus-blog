const siteModel = loadModel('mysql/site');

// global.authenticate = loadController(`api/v1/auth`).authenticate;

module.exports = (app) => {
	app.use((req, res, next) => {
		res.locals.site = siteModel.getInformation();
		res.locals.meta = {
			og: {
				title: 'none',
				image: 'none',
				url: 'none',
				site_name: 'none',
				description: 'none',
			},
			twitter: {
				title: 'none',
				image: 'none',
				url: 'none',
				card: 'none',
			}
		};
		next();
	});
}