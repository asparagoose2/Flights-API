const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
    id: { type: String, required: true },
    company: { type: String, required: true },
    points: { type: Number, required: true },
    duration: { type: Number, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
}, {collection: 'flights'});

const Flight = model('Flight', flightSchema);

module.exports = Flight;
