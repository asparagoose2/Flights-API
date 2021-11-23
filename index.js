require('dotenv').config();
const express = require("express");
const logger = require("pino");
const app = express();
const port = process.env.PORT || 3000;

const { flightsRouter } = require("./routers/flightRouter");
const auth = require("./modules/authenticator");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(logger("dev")); 

app.use('/api', (req, res, next) => {
    if(!req.headers.access_token) {
        return res.status(401).json({
            status: "Failed",
            message: "Unauthorized - access_token header with token not exists!"
        });
    }
    try {
            auth.validateToken(req.headers.access_token)
            next();
    } catch(err) {
         res.status(401).json({
            status: "Failed",
            message: err.message
        });}
});

app.use('/auth/:id', (req,res) => {
    try {
        res.send(auth.giveToken(req.params.id));
    } catch(err) {
        res.status(400).json({status: 'Failed', message: err.message});
    }
});



app.use('/api/flights', flightsRouter);

app.use((req, res) => {
    res.status(400).send('Something is broken!');
});

app.listen(port, () => console.log(`Express server is running on port ${port}`));