
const JSON_FORMTAT_ERROR = `  
  The JSON format is incorrect.
  The correct format is:
  {
    "id": string,
    "company": string,
    "points": number,
    "duration": number,
    "departureTime": string representing  Date and time in ISO 8601 format,
    "arrivalTime": string representing  Date and time in ISO 8601 format,
    "origin": string - 3 letter code,
    "destination": string - 3 letter code,
  }
`

const flights = require("./flight.json");
const users = require("./users.json");

// function that validates the flight object
function validateFlight(flight) {
  if (!flight.id || !flight.company || !flight.points || !flight.duration || !flight.departureTime || !flight.arrivalTime || !flight.origin || !flight.destination) {
    throw new Error(JSON_FORMTAT_ERROR);
  } else if (flight.points < 0 || flight.duration < 0) {
    throw new Error("Points and duration must be positive numbers");
  } else if (!Data.parse(flight.departureTime) || !Date.parse(flight.arrivalTime)) {
    throw new Error("Departure and arrival time must be in ISO 8601 format");
  } else if (flight.origin.length !== 3 || flight.destination.length !== 3) {
    throw new Error("Origin and destination must be 3 letters");
  }
  return true;
}

function getAllFlights() {
  return flights;
}
function getFlightById(id) {
  return flights.find((flight) => flight.id === id);
}
function addFlight(flight) {
  validateFlight(flight);
  flights.push(flight);
}
function removeFlightById(id) {
    let index = flights.findIndex((flight) => flight.id === id);
    if(index < 0) {
      throw new Error("Flight not found");
    }
    flights.splice(index, 1);
}
function updateFlightById(id, flight) {
  validateFlight(flight);
  let index = flights.findIndex((flight) => flight.id === id);
  if(index < 0) {
    throw new Error("Flight not found");
  } 
  flights[index] = flight;
}
function getUsers() {
  return users;
}
function getUserById(id) {
  return users.find((user) => user.id === id);
}


module.exports = {
  getAllFlights,
  getFlightById,
  addFlight,
  removeFlightById,
  updateFlightById,
  getUsers,
  getUserById
};
