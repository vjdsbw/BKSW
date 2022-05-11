const express = require("express");
const  News= require("../model/news")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/news",(req,res)=>{
    res.render("news.html")

})

router.get("/cnews",(req,res)=>{
    res.render("cnews.html")
})
router.get("/hnews",(req,res)=>{
    res.render("hnews.html")
})
router.get("/snews",async(req,res)=>{    
    var id =req.query.id;
    var mesa =await News.find();
    var mes=mesa[id-1];
    console.log(mes.frequency);
    var temp = mes.frequency+1;
    News.updateMany({num:id},{frequency:temp},(err)=>{
        if(err) {
        console.log(err);
    }})
    console.log(temp);
    res.render("snews.html",{mes,mesa,id})
})
module.exports = router;