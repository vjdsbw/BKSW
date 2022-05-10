const express = require("express");
const  News= require("../model/news")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
router.get("/news",(req,res)=>{

    res.render("news.html")
})
router.get("/cnews",(req,res)=>{

    res.render("cnews.html")
})
router.get("/hnews",(req,res)=>{
    res.render("hnews.html")
})

module.exports = router;