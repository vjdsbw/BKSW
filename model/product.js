const mongoose = require("mongoose");
const productSchema = mongoose.Schema({

})

const Product = mongoose.model("product",productSchema,"product");
module.exports = Product;