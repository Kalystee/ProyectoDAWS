const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    age:{type: Number, required: true},
    sex:{type: String, required: true,enum:["H","M"]},
    email:{type: String, required: true},
    password:{type: String, required: true},
    cardNumber:{type: String},
    rfc:{type: String},
    address:{type: String, required: true},
},{
    timestamps: true
})

const User = mongoose.model('User',userSchema);

module.exports = User;
