//require axios
const axios = require('axios');

//Used arrow functions
const getExchangeRte =  async (fromCurrency,toCurrency) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
            const rate = response.data.rates;
            const USD = 1/rate[fromCurrency];
            const exchangeRate =  USD * rate[toCurrency]
            return exchangeRate
        };
    
const getCountries = async (toCurrency) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
    return response.data.map(country => country.name);
}
getCountries('USD')