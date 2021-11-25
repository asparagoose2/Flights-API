const axios = require("axios");
require('dotenv').config();

const AIRPORT_CODE_API_URL = 'https://www.air-port-codes.com/api/v1/single?iata=';
const OPEN_WEATHER_API_URL = (cityname, APIkey) => `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`


async function getCityNameFromAirportCode(airportCode) {
    let cityName = (await axios({
        method: 'get',
        url: AIRPORT_CODE_API_URL + airportCode,
        headers: {
            "APC-Auth": process.env.ASP_API_KEY,
            "APC-Auth-Secret": process.env.ASP_API_SECRET
        }
    }))['data']['airport']['city'];
    return cityName;
}

async function getWeatherByCityName(cityName) {
    let weather = (await axios({
        method: 'get',
        url: OPEN_WEATHER_API_URL(cityName,process.env.OPEN_WEATHER_API_KEY),
    }))
    return weather.data;
}

async function getWeatherByAirportCode(airportCode) {
    let cityName = await getCityNameFromAirportCode(airportCode);
    let weather = await getWeatherByCityName(cityName);
    return JSON.stringify(weather);
}

module.exports = {
    getWeatherByAirportCode,
    getWeatherByCityName
}