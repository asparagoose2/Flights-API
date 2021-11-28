const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
}, {collection: 'users'});

const User = model('User', userSchema);

module.exports = User;