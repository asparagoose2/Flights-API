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

function addUser(user) {
  users.push(user);
}
function removeUserById(id) {
  users.splice(
    users.findIndex((user) => user.id === id),
    1
  );
}
function updateUserById(id, user) {
  users[users.findIndex((user) => user.id === id)] = user;
}

module.exports = {
  getAllFlights,
  getFlightById,
  addFlight,
  removeFlightById,
  updateFlightById,
  getUsers,
  getUserById,
  addUser,
  removeUserById,
  updateUserById,
};
