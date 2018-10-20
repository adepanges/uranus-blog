const router = require('express').Router();
const user = loadController('api/v1/user');

router.get('/', user.get);

module.exports = router;
