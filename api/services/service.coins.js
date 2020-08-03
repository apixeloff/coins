var Coins = require('../models/model.coins');
var CoinValues = require('../models/model.coinValues');
var Currency = require('../models/model.currency');

class CoinService
{
    coinValues = new CoinValues();
    currencyValues = new Currency();

    getMinimumCoins(currency, amount)
    {
        console.log('amount', amount);
        let coins = new Coins();
        currency.pennies = currency.pennies || 0;

        // we need to loop through the list to ensure highest values first
        this.currencyValues.list?.map(x => 
        {
            if(amount <= 0) return;

            if(currency[x] === true) {
                coins[x] = amount / this.coinValues[x] | 0;
                amount -= this.coinValues[x] * coins[x];
                // silly numbers
                amount = amount.toFixed(2);
            }    
        });
        
        return coins;
    }
}

module.exports = CoinService;
