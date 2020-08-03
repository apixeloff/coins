"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const typedi_1 = require("typedi");
const service_coins_1 = require("./../services/service.coins");
/* GET users listing. */
router.get('/', function (req, res, next) {
    const coinService = typedi_1.Container.get(service_coins_1.CoinService);
    const coins = coinService.getMinimumCoins({ dollars: true, dimes: true }, 13.50);
    res.json({ coins: coins });
    next();
});
router.post('/', function (req, res) {
});
module.exports = router;
