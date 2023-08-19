const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000
const Products_route = require('./routes/Product');
const connectDB = require("./db/connection")

app.get("/",(req, res) => {
    res.send({message: 'Hello, world'});
})

// middleware or set router
app.use("/api/products", Products_route)



const start =  async () =>{
    try{
         await connectDB()
        app.listen(PORT,() => {
            console.log(`listening on ${PORT}`)
        })
    }catch(err){
        console.log(err);
    }
}

start();
