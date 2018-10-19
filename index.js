// for firebase server
const functions = require('firebase-functions');
var app_blog = require('./init.returned');
exports.app = functions.https.onRequest(app_blog());
