const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
     Cas:{
         type:String,
         },
        EName:{
        type:String
        },
        CName:{
         type:String
        },
        molecularFormula:{
         type:String
        },
       molecularWeight:{
         type:String
        },
        content:{
        type:Number
        },
       page:{
        type:String
        },
        img:{
            type:String
        },
        id:{
            type:String
       }
       })
       
 const Product = mongoose.model("product",productSchema,"product");
 module.exports = Product;