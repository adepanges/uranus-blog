const router = require('express').Router();
const user = loadController('api/v1/user');
const wrap = loadHelper('wrap_async');

router.get('/', wrap(user.all));
router.get('/:userId', wrap(user.retrieve));
router.post('/', wrap(user.create));
router.put('/:userId?', wrap(user.update));

module.exports = router;