const DB = require("../data/index");



const Tokens = {"special" : new Date(Date.now() + 60000000000)};

function createToken() {
    const token = Math.random().toString(36).substring(2);
    Tokens[token] = new Date(Date.now() + 600000);
    return token;
}

function validateToken(token) {
    if (Tokens[token] && Tokens[token] > Date.now()) {
        return true;
    }
    if (Tokens[token]) {
        removeToken(token);
        throw new Error("Token expired");
    } else {
        throw new Error("Invalid token"); 
    }
}

function removeToken(token) {
    delete Tokens[token];
}

function giveToken(user) {
    if(DB.isUserRegistered(user)) {
        return createToken();
    }
    throw new Error("User not registered");
}


module.exports = {
    giveToken,
    validateToken
};
