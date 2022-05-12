const express = require("express");
const  News= require("../model/news")
const Product = require("../model/product");
const path = require("path");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
   res.redirect("/index")
})

router.get("/index", async(req, res) => {
    let result = await Product.find({page:req.query.page}).skip(0).limit(6);
    var page=req.query.page;
    // console.log(page)
    switch(page){
        case 'sh':result;break;
        case 'yy':result;break;
        case 'cl':result;break;
      }
    res.render("index.html",{products: result});
})

router.get("/contact",(req,res)=>{
    res.render("contact.html");
})
router.get("/about",(req,res)=>{
    res.render("about.html")
})

router.get("/snews",(req,res)=>{
    res.render("news.html")
})

router.get("/Corporatestyle",(req,res)=>{
    res.render("base.html");

})


router.get("/foot_news",(req,res)=>{
    res.render("base.html");
})
router.get("/product/product?pageindex=1&page=sh",(req,res)=>{
    res.render("product.html");
})
router.get("/product/product?pageindex=1&page=yy",(req,res)=>{
    res.render("product1.html");
})
router.get("/product/product?pageindex=1&page=cl",(req,res)=>{
    res.render("product2.html");
})
router.get("/news/cnews",(req,res)=>{
    res.render("cnews.html");
})
router.get("/news/hnews",(req,res)=>{
    res.render("hnews.html");

})



module.exports = router;