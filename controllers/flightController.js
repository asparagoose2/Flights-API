const DB = require('../data');
const axios = require("axios");
require('dotenv').config();
const WeatherAPI = require("../modules/weatherAPI");

exports.fligtsController = {
    getAllFlights: (req, res) => {
        DB.getAllFlights().then(flights => {
            if(flights.length > 0) {
                res.status(200).json({status: "Success", data: flights});
            } else {
                res.status(404).json({status: "Failed", data: 'No flights found'});
            }
        }).catch(err => {
            res.status(500).json({status: "Failed", data: err.message});
        });
    },
    getFlightById: (req, res) => {
        DB.getFlightById(req.params.id).then(flight => {
        if(flight) {
            WeatherAPI.getWeatherByAirportCode(flight.destination).then(weather => {
            res.status(200).json({status: "Success", data: {flightData: flight, weather: weather}});
            }).catch(err => {
                console.log(err);
                res.status(400).json({status: "Failed", data: err.message});
            });
        } else {
            res.status(404).json({status:"Failed", data: 'Flight not found'});
        }
        }).catch(err => {
            res.status(500).json({status: "Failed", data: err.message});
        });
    },
    createFlight: (req, res) => {
        try {
            DB.addFlight(req.body);
            res.status(201).json({status: "Success" ,data: 'Flight created'});
        } catch(err) {
            res.status(400).json({status: 'Failed', data: err.message});
            console.log(err);
        }
    },
    updateFlight: (req, res) => {
        try {
            DB.updateFlightById(req.params.id, req.body).then(flight => {
                if(flight) {
                    res.status(200).json({status: "Success", data: 'Flight updated'});
                } else {
                    res.status(404).json({status: "Failed", data: err.message});
                }})
        } catch(err) {
            console.log(err);
            res.status(500).json({status: 'Failed', data: err.message});
        }
    },
    deleteFlight: (req, res) => {
        try {
            DB.removeFlightById(req.params.id).then(flight => {
                if(flight) {
                    res.status(200).json({status: "Success", data: 'Flight deleted'});
                } else {
                    res.status(404).json({status: "Failed", data: 'Flight not found'});
                }
            });
        } catch(err) {
            res.status(500).json({status: 'Failed', data: err.message});
        }
    }
}