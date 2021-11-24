const DB = require('../data');
const axios = require("axios");
require('dotenv').config();

exports.fligtsController = {
    getAllFlights: (req, res) => {
        let flights = DB.getAllFlights()
        if(flights.length > 0) {
            res.status(200).json({status: "Success", data: flights});
        } else {
            res.status(404).json({status: "Failed", data: 'No flights found'});
        }
    },
    getFlightById: (req, res) => {
        let flight = DB.getFlightById(req.params.id);
        if(flight) {
            axios({
                method: 'get',
                url: 'https://www.air-port-codes.com/api/v1/single?iata=' + flight.destination,
                headers: {
                    "APC-Auth": process.env.ASP_API_KEY,
                    "APC-Auth-Secret": process.env.ASP_API_SECRET
                }
            }).then(response => {
                console.log("here");
            console.log(response);
            res.status(200).json({status: "Success", data: flight});
            }).catch(err => {
                console.log(err);
                res.status(400).json({status: "Failed", data: err.message});
            });
        } else {
            res.status(404).json({status:"Failed", data: 'Flight not found'});
        }
    },
    createFlight: (req, res) => {
        try {
            console.log(req.body);
            DB.addFlight(req.body);
            res.status(201).json({status: "Success" ,data: 'Flight created'});
        } catch(err) {
            res.status(400).json({status: 'Failed', data: err.message});
            console.log(err);
        }
    },
    updateFlight: (req, res) => {
        try {
            DB.updateFlightById(req.params.id, req.body);
            res.status(200).json({status: "Success", data: 'Flight updated'});
        } catch(err) {
            console.log(err);
            res.status(400).json({status: 'Failed', data: err.message});
        }
    },
    deleteFlight: (req, res) => {
        try {
            DB.removeFlightById(req.params.id);
            res.status(200).json({status: "Success", data: 'Flight deleted'});
        } catch(err) {
            res.status(400).json({status: 'Failed', data: err.message});
        }
    }
}