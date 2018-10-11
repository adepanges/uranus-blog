function index(req, res, next) {
	res.render('home', {
		document: {
			title: 'hALOOOaaaaO',
			header_meta_js: ['halo.js']
		},
	})
}

module.exports = {
	index
};
