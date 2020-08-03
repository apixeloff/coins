var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var coins = require('./routes/coins');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/coins', coins);
module.exports = app;
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map