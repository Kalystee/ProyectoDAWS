//Guillaume THIBAULT

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const oferrerSchema = new Schema({
    userId:{type: String, required: true},
},{
    timestamps: true
})

const Offerer = mongoose.model('Offerer',oferrerSchema);

async function getOfferers(){
    let docs = []
    try{
        docs = await Offerer.find({})
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
