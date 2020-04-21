const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name:{type: String, required: true},
    description:{type: String, required: true},
    date:{type: Date, required: true},
    time:{type: String, required: true}, //Check later if need TimeRange
    price:{type: Number, required: true},
});

const Service = mongoose.model("Service",serviceSchema);

async function getServices(){
    let docs = []
    try{
        docs = await Service.find({})
        console.log(docs)
    }catch (e) {
        console.log("error",e)
    }
    return docs;
}

module.exports = Service