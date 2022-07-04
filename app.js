let input = require('sync-input');

let currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}

console.log(`
Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

function convert(){
    let from = input("From: ").toUpperCase();
    if (!(from in currencies)) {
        console.log("Unknown currency");
        return;
    }
    
    let to = input("To: ").toUpperCase();
    if (!(to in currencies)) {
        console.log("Unknown currency");
        return;
    }
    
    let amount = input("Amount: ");
    if (amount < 1) {
        console.log("The amount can not be less than 1.")
        return;
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number.");
        return;
    }
    
    console.log(`Result: ${amount} ${from} equals ${(currencies[to] / currencies[from] * amount).toFixed(4)} ${to}`);
}

let run = true;

while (run) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let choice = input(" ");
    if (choice == 1) {
        console.log("What do you want to convert?");
        convert();
    } else if (choice == 2) {
        console.log("Have a nice day!");
        run = false;
    } else {
        console.log("Unknown input");
        convert();
    }
}