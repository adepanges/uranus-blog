const User = loadModel('sequelize').User;

const get = async (req, res, next) => {

    User
        .findAll()
        .then(users => {
            res.locals.response = {
                users
            }
            next();
        })
        .catch(error => {
            res.locals.response = {
                code: 500,
                messages: error
            }
            next();
        });

    
}

module.exports = {
    get,
};