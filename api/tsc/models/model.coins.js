"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.Coins = exports.CoinValues = void 0;
class CoinValues {
    constructor() {
        this.dollars = 1;
        this.fifties = .5;
        this.quarters = .25;
        this.dimes = .1;
        this.nickles = .05;
        this.pennies = .01;
    }
}
exports.CoinValues = CoinValues;
class Coins {
    constructor() {
        this.dollars = 0;
        this.fifties = 0;
        this.quarters = 0;
        this.dimes = 0;
        this.nickles = 0;
        this.pennies = 0;
    }
}
exports.Coins = Coins;
class Currency {
    constructor() {
        this.dollars = false;
        this.fifties = false;
        this.quarters = false;
        this.dimes = false;
        this.nickles = false;
        this.pennies = true;
        // List of currency selected by the user
        this.list = [
            "dollars",
            "fifties",
            "quarters",
            "dimes",
            "nickles",
            "pennies"
        ];
    }
}
exports.Currency = Currency;
