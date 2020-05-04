const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true });
const connection = mongoose.connection
console.log(uri)
connection.once("open",() => {
    console.log("MongoDB database connection established successfully")
})

const categorieRouter = require("./routes/categorie");
const userRouter = require("./routes/user");
const serviceRouter = require("./routes/service");
const authentificationRouter = require("./routes/authentification");

app.use(authentificationRouter);
app.use("/categories",categorieRouter);
app.use("/users",userRouter);
app.use("/services",serviceRouter);

app.listen(port,() => {
    console.log(`Server is running on: http://127.0.0.1:${port}`);
})