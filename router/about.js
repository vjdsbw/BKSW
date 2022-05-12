const express = require("express");
const  News= require("../model/about")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/about",(req,res)=>{
    res.render("about.html")
})
router.get("/about_introduce",(req,res)=>{
    res.render("about_introduce.html")
})

router.get("/about_introduce",(req,res)=>{
    res.render("about_introduce.html")
})

module.exports = router;