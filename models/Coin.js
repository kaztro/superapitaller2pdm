const mongoose =  require('mongoose');

let CoinModel = new mongoose.Schema({
    name: { type: String },
    country: { type: String },
    value: { type: Number },
    value_us: { type: Number },
    year: { type: Number },
    review: { type: String },
    isAvailable: { type: Boolean },
    image: { type: String }
});

module.exports = mongoose.model('Coin', CoinModel);
