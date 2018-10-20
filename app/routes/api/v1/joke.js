const router = require('express').Router();
const joke = loadController('api/v1/joke');
const wrap = loadHelper('wrap_async');

router.get('/random', wrap(joke.randomJoke));

module.exports = router;
