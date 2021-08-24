const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//connect to mongo
const url = process.env.MONGO_URI;
mongoose.connect(url,
{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true},
err => {
    if (err) throw err;
    console.log("dB Connected!");
});

app.set("view engine","ejs");

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}));

//route
app.use("/", require("./routes/todoRouter"));

//listen for request
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`you are connected on port: ${PORT}`) );
