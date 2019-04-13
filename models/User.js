const mongoose = require('mongoose');

let UserModel = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('User', UserModel);
