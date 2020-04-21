const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true });
const connection = mongoose.connection
connection.once("open",() => {
    console.log("MongoDB database connection established successfully")
})

//Routing

app.listen(port,() => {
    console.log(`Server is running on: http://127.0.0.1:${port}`);
})