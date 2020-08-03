"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinService = void 0;
const model_coins_1 = require("./../models/model.coins");
class CoinService {
    constructor() {
        this.coinValues = new model_coins_1.CoinValues();
        this.currencyValues = new model_coins_1.Currency();
    }
    getMinimumCoins(currency, amount) {
        var _a;
        let coins = new model_coins_1.Coins();
        (_a = this.currencyValues.list) === null || _a === void 0 ? void 0 : _a.map(x => {
            console.log('item', x);
        });
        return coins;
    }
}
exports.CoinService = CoinService;
