const express = require('express');
const router = express.Router();
const joke = loadController('api/v1/joke');
const wrap = loadHelper('wrap_async');

router.get('/random', (req, res, next) => {
    res.locals.response = {a:1};
    next()
});

module.exports = router;
