//Guillaume THIBAULT

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zoneSchema = new Schema({
    street:{type: String, required: true},
    district:{type: String, required: true},
    colony:{type: String, required: true},

});

const Zone = mongoose.model("Zone",zoneSchema);

module.exports = Zone