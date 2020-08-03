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
        let coins;
        this.currencyValues.list.map(x => {
            console.log('item', x);
        });
        return coins;
    }
}
exports.CoinService = CoinService;
//# sourceMappingURL=service.coins.js.map