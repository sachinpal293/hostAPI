const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: [true, "price must be provided"]
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default:'2.7'
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values : ['apple',"samsung", "dell", "MI"],
            messages: `{values} is not Supported`
        }

    }
})

module.exports = mongoose.model('Product', productSchema)