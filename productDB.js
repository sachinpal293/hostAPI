require('dotenv').config();
const connectDb = require('./db/connection');
const Product = require("./models/productDb");
const ProductJson = require("./product.json")

const start = async () =>{
     try{
        await connectDb(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
     }catch(err)
     {
       console.log(err);
     }
}

start();