const express = require('express');
const router = express.Router();
const joke = loadController('api/v1/joke');
const home = loadController(`web/v1/home`);
const wrap = loadHelper('wrap_async');

router.get('/', home.index);
router.get('/random', wrap(joke.randomJoke));

module.exports = router;
