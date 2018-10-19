const exphbs = require('express-handlebars'),
    express = require('express');

const app = express();

module.exports = () => {
    
    global.config = require('./config')
    global.staticify = require('staticify')(`${BASE_PATH}/public`, {
        shortHash: false
    });

    app.set('views', BASE_PATH + '/resources/views/');
    app.engine('hbs', exphbs({
        defaultLayout: 'default',
        extname: 'hbs',
        layoutsDir: 'resources/views/layouts',
        partialsDir: 'resources/views/partials',
        helpers: require('./resources/views/hbs/helpers')
    }));
    app.set('view engine', 'hbs');

    /*
    mongoose.Promise = global.Promise;
    // Connecting to the database
    mongoose.connect(config.database.mongo_url, {
        useNewUrlParser: true,
    }).then(() => {
        logger.debug('Successfully connected to the database');
    }).catch(err => {
        logger.info(err);
        logger.debug('Could not connect to the mongo database. Exiting now...');
        process.exit();
    });
    */

    loadApp('routes')(app)
    return app;
}
