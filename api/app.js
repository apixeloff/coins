var express = require('express');
const app = express();
const cors = require('cors');

var bodyParser = require('body-parser');

var coins = require('./routes/modules.coins');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/coins', coins);

module.exports = app;