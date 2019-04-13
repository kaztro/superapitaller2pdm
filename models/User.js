const mongoose = require('mongoose');

let UserModel = new mongoose.Schema({
    email: { type: String, lowercase: true },
    password: { type: String, select: false }
});

module.exports = mongoose.model('User', UserModel);
