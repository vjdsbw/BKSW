const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({

})

const Contact = mongoose.model("contact",contactSchema,"contact");
module.exports = Contact;