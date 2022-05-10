const express = require("express");
const  News= require("../model/base")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/Corporatestyle",(req,res)=>{
    res.render("base.html");
})


module.exports = router;