const DB = require('../data');

exports.flightController = {
    getFlights: (req, res) => {
        DB.getFlights()
            .then(flights => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.json(flights);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    getFlight: (req, res) => {
        DB.getFlight(req.params.id)
            .then(flight => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.json(flight);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    addFlight: (req, res) => {
        DB.addFlight(req.body)
            .then(flight => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.json(flight);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    updateFlight: (req, res) => {
        DB.updateFlight(req.params.id, req.body)
            .then(flight => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.json(flight);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    deleteFlight: (req, res) => {
        DB.deleteFlight(req.params.id)
            .then(flight => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.json(flight);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
}