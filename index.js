//require axios
const axios = require('axios');

//Used arrow functions
const getExchangeRte =  async (fromCurrency,toCurrency) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
            const rate = response.data.rates;
            const USD = 1/rate[fromCurrency];
            const exchangeRate =  USD * rate[toCurrency]

            if(isNaN(exchangeRate)){
                throw new Error (`Unamble to get currency ${fromCurrency} to ${toCurrency}`);

            }
            return exchangeRate
        };
    
const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
    return response.data.map(country => country.name);
    } catch (error) {
        throw new Error(`Unable to get countries that use ${toCurrency}`);
    }
    
}

const convertCurrency = async (fromCurrency,toCurrency,amount) => {
    const Countries = await getCountries(fromCurrency,toCurrency);
    const exchangeRate = await getExchangeRte(fromCurrency,toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}, You can spend this in the following countries ${Countries}`;

}

convertCurrency('USD','EUR',40)
    .then((message)=>{
        console.log(message);
    }).catch((error) => {
        console.log(error.message);
    });