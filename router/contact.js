const express = require("express");
const  News= require("../model/contact")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/contact",(req,res)=>{
    res.render("contact.html")
})


module.exports = router;