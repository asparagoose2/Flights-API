const DB = require('../data');

exports.fligtsController = {
    getAllFlights: (req, res) => {
        let flights = DB.getAllFlights()
        if(flights.length > 0) {
            res.status(200).json(flights);
        } else {
            res.status(404).json({message: 'No flights found'});
        }
    },
    getFlightById: (req, res) => {
        let flight = DB.getFlightById(req.params.id);
        if(flight) {
            res.status(200).json(flight);
        } else {
            res.status(404).json({message: 'Flight not found'});
        }
    },
    createFlight: (req, res) => {
        try {
            DB.addFlight(req.body);
            res.status(201).json({message: 'Flight created'});
        } catch(err) {
            res.status(500).json({message: 'Error creating flight'});
        }
    },
    updateFlight: (req, res) => {
        try {
            DB.updateFlightById(req.params.id, req.body);
            res.status(200).json({message: 'Flight updated'});
        } catch(err) {
            console.log(err);
            res.status(500).json({message: 'Error updating flight'});
        }
    },
    deleteFlight: (req, res) => {
        try {
            DB.removeFlightById(req.params.id);
            res.status(200).json({message: 'Flight deleted'});
        } catch(err) {
            res.status(500).json({message: 'Error deleting flight'});
        }
    }
}