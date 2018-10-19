const express = require('express');
const app = express();

require('dotenv').load();

global.BASE_PATH = __dirname;
global.APP_PATH = `${__dirname}/app`;
global.PORT = process.env.PORT || 3000;

require('./helper')();

require('./init')(app)

app.listen(PORT, () => {
    logger.debug('Server is listening on port '+ PORT);
});
