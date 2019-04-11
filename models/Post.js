const mongoose =  require('mongoose');

let PostModel = new mongoose.Schema({
    name: { type: String },
    value: { type: Number },
    value_us: { type: Number },
    year: { type: Number },
    review: { type: String },
    isAvailable: { type: Boolean },
    image: { type: String }
});

module.exports = mongoose.model('Post', PostModel);
