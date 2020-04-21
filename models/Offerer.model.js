const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const oferrerSchema = new Schema({
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

const Offerer = mongoose.model('Offerer',oferrerSchema);

async function getOfferers(){
    let docs = []
    try{
        docs = await Offerer.find({})
        console.log(docs)
    }catch (e) {
        console.log("error",e)
    }

    return docs;
}

function createOfferer(user) {
    let userMongo = Offerer(user)
    userMongo.save()
        .then((resp) =>console.log(resp))
        .catch((err) => console.log("Error : "+err))
}

Offerer.getUsersAsync = getOfferers;

module.exports = Offerer;
