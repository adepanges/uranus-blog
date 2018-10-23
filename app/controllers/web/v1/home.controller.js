function index(req, res, next) {
	res.render('home', {
		layout: 'shout/default',
		document: {
			title: 'haloo',
			header_meta_js: ['halo.js']
		},
	})
}

module.exports = {
	index
};
