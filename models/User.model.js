const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type: String, required: true, minlength: 3},
    firsName:{type: String, required: true},
    lastName:{type: String, required: true},
    age:{type: Number, required: true},
    sex:{type: String, required: true,maxLength: 1},
    email:{type: String, required: true},
    cardNumber:{type: String, required: true},
    rfc:{type: String, required: true},
    address:{type: String, required: true},
    postalCode:{type: Number, required: true},
    city:{type: String, required: true},
},{
    timestamps: true
})

const User = mongoose.model('User',userSchema);

module.exports = User;
