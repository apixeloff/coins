var express = require('express');
var router = express.Router();

var CoinService = require('../services/service.coins');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var service = new CoinService();
  var currency = req.body.currency || { dollars: true, fifties: true, quarters: true, dimes: true, pennies: true };
  const coins = service.getMinimumCoins(currency, req.body.amount || 13.50);
  res.json(coins);
});

module.exports = router;
