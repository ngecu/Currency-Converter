#  Reading an Exchange Rate

If the USD/CAD currency pair is 1.33, that means it costs 1.33 Canadian dollars for 1 U.S. dollar. In USD/CAD, the first currency listed (USD) always stands for one unit of that currency; the exchange rate shows how much of the second currency (CAD) is needed to purchase that one unit of the first (USD).

This rate tells you how much it costs to buy one U.S. dollar using Canadian dollars. To find out how much it costs to buy one Canadian dollar using U.S. dollars use the following formula: 1/exchange rate.

In this case, 1 / 1.33 = 0.7518. It costs 0.7518 U.S. dollars to buy one Canadian dollar.

# Currency-Converter
Learning Async/Wait/Promises
# Install Axios to fetch data from the 2 APIS
- npm install --save axios
# Create inject folder
- touch index.js


//require axios
const axios = require('axios');

//Used arrow functions
const getExchangeRte = (fromCurrency,toCurrency) => {
    axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
        .then((response) => {
            const rate = response.data.rates;
            const USD = 1/rate[fromCurrency];
            const exchangeRate =  USD * rate[toCurrency]
            console.log(exchangeRate)
        })
    
};
getExchangeRte('KES','USD')


# There's no doubt that the U.S. dollar has immense power. Its value is determined by the strength of the American economy, which is one of the reasons why it's the world's dominant currency. Not only is it the world's most commonly used currency, but it's also the world's reserve currency, meaning it's held in large quantities by central banks around the globe. Commonly known as the greenback, it's also one of the most commonly traded currencies on the foreign exchange market.
Five U.S. territories and seven sovereign nations use the U.S. dollar as their official currency.
The British Virgin Islands and the British Turks and Caicos Islands also use the U.S. dollar as their official currency of exchange.
The U.S. dollar is also used in conjunction with local currencies in a number of different popular destinations for American touris