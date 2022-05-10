const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
   
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
        }
        
})

const Contact = mongoose.model("contact",contactSchema,"contact");
module.exports = Contact;