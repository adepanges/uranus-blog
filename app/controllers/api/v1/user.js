const DB = loadModel('sequelize');
const User = DB.User;
const Op = DB.Sequelize.Op;

const list = async (req, res, next) => {
    User.findAll()
        .then(users => {
            res.app.emit('response', res, { users })
        })
        .catch(error => {
            res.app.emit('response', res, {
                code: 502,
                messages: error.errors
            })
        });
}

const create = async (req, res, next) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        bio: req.body.bio,
        birthday: req.body.birthday
    })
        .then(users => {
            res.locals.response = { users }
            next();
        })
        .catch(error => {
            res.locals.response = {
                code: 502,
                messages: error.errors
            }
            next();
        });
}

const retrieve = async (req, res, next) => {
    User.findById(req.params.userId,)
        .then(users => {
            res.app.emit('response', res, { users })
        })
        .catch(error => {
            res.app.emit('response', res, {
                code: 502,
                messages: error.errors
            })
        });
}

const update = async (req, res, next) => {
    User.findOne({
        where: {
            [Op.or]: [{ id: req.params.userId }, { uuid: req.params.userId }]
        }
    })
        .then(user => {
            user
                .update({
                    password: req.body.password || user.password,
                    email: req.body.email || user.email,
                    firstname: req.body.firstname || user.firstname,
                    lastname: req.body.lastname || user.lastname,
                    bio: req.body.bio || user.bio,
                    birthday: req.body.birthday || user.birthday,
                })
                .then(() => {
                    res.app.emit('response', res, { user })
                })  // Send back the updated todo.
                .catch((error) => {
                    res.app.emit('response', res, {
                        code: 502,
                        messages: error.errors
                    })
                });
        })
        .catch(error => {
            res.app.emit('response', res, {
                code: 502,
                messages: error.errors
            })
        });
}

module.exports = { list, create, retrieve, update };