const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({

})

const News = mongoose.model("news",newsSchema,"news");
module.exports = News;