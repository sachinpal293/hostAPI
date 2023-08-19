const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.MONGODB_URL

const connectDB = () =>{
    // console.log("Connect Database")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;