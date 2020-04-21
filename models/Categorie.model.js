const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorieSchema = new Schema({
    name:{type: String, required: true},
    description:{type: String},
});

const Categorie = mongoose.model("Categorie",categorieSchema);

async function getCategories(){
    let docs = []
    try{
        docs = await Categorie.find({})
        console.log(docs)
    }catch (e) {
        console.log("error",e)
    }
    return docs;
}

module.exports = Categorie