const flights = require("./flight.json");
const users = require("./users.json");

function getAllFlights() {
  return flights;
}
function getFlightById(id) {
  return flights.find((flight) => flight.id === id);
}
function addFlight(flight) {
  flights.push(flight);
}
function removeFlightById(id) {
  flights.splice(
    flights.findIndex((flight) => flight.id === id),
    1
  );
}
function updateFlightById(id, flight) {
  flights[flights.findIndex((flight) => flight.id === id)] = flight;
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
