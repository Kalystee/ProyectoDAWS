//Guillaume THIBAULT

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name:{type: String, required: true},
    description:{type: String, required: true},
    address:{type: String, required: true},
    price:{type: Number, required: true},
    categoryId:{type: String, required: true},
    offererId:{type: String, required: true},
    clientId:{type: String}
});

const Service = mongoose.model("Service",serviceSchema);

module.exports = Service