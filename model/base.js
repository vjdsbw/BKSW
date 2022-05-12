const mongoose = require("mongoose");
const baseSchema = mongoose.Schema({

})

const Base = mongoose.model("base",baseSchema,"base");
module.exports = Base;