function index(req, res, next) {
	res.render('home', {
		layout: 'shout/home',
		meta: {
			og: {
				title: 'hai'
			}
		},
		document: {
			title: 'hALOOOaaaaO',
			header_meta_js: ['halo.js']
		},
	})
}

module.exports = {
	index
};
