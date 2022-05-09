const express = require("express");
const  News= require("../model/about")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();


router.get("/about",(req,res)=>{
    res.render("about.html")
})

module.exports = router;