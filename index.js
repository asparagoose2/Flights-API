require('dotenv').config();
const express = require("express");
const logger = require("pino");
const app = express();
const port = process.env.PORT || 3000;

const flightRouter = require("./routes/flightRouter");
const auth = require("./modules/authenticator");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev")); 

app.use('/api/flights', flightRouter);

app.use((req, res) => {
    res.status(400).send('Something is broken!');
});

app.listen(port, () => console.log(`Express server is running on port ${port}`));