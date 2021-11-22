const { Router } = require('express');
const { fligtsController } = require('../controllers/flightController');

const flightsRouter = new Router();

flightsRouter.get('/', fligtsController.getAllFlights);
flightsRouter.get('/:id', fligtsController.getFlightById);
flightsRouter.post('/', fligtsController.createFlight);
flightsRouter.put('/:id', fligtsController.updateFlight);
flightsRouter.delete('/:id', fligtsController.deleteFlight);

module.exports = { flightsRouter };