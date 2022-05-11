const mongoose = require("mongoose");

const newsSchema = new  mongoose.Schema({
title:{
    type:String,
},
time:{
    type:String
},
frequency:{
    type:Number
},
content: {
    type: String,
},
num:{
    type:Number
}
})


const News = mongoose.model("news",newsSchema,"news");
module.exports = News;