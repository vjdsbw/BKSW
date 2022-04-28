const mongoose = require("mongoose");
const aboutSchema = mongoose.Schema({

})

const About = mongoose.model("about",aboutSchema,"about");
module.exports = About;