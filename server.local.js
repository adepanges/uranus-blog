const express = require('express');
const app = express();

global.BASE_PATH = __dirname;
global.APP_PATH = `${__dirname}/app`;
global.PORT = 3000;

require('./init')(app)

app.listen(PORT, () => {
    logger.debug('Server is listening on port '+ PORT);
});
