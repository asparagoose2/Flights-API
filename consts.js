const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    PORT: process.env.PORT,
    ASP_API_KEY: process.env.ASP_API_KEY,
    ASP_API_SECRET: process.env.ASP_API_SECRET,
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
};