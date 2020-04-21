const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zoneSchema = new Schema({
    street:{type: String, required: true},
    district:{type: String, required: true},
    colony:{type: String, required: true},

});

const Zone = mongoose.model("Zone",zoneSchema);

async function getZones(){
    let docs = []
    try{
        docs = await Zone.find({})
        console.log(docs)
    }catch (e) {
        console.log("error",e)
    }
    return docs;
}

module.exports = Zone