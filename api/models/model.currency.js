class Currency
{
    dollars = false;
    fifties = false;
    quarters = false;
    dimes = false;
    nickles = false;
    pennies = true;

    // List of currency selected by the user
    list = [
        "dollars",
        "fifties",
        "quarters",
        "dimes", 
        "nickles",
        "pennies"
    ];

    constructor() {}
}

module.exports = Currency;