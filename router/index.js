const express = require("express");
const  News= require("../model/news")
const Product = require("../model/product");
const path = require("path");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
   res.redirect("/index?page=sh")
})

router.get("/aaa", async (req, res, next) => {
    var a=req.query;
    console.log(a.page);
    let result = await Product.find({page:a.page})
         res.json({
                code: 2002,
                message: result
        })
})
router.get("/index", async(req, res) => {
    let result = await Product.find({page:req.query.page}).skip(0).limit(6);
    var page=req.query.page;
    switch(page){
        case 'sh':result;break;
        case 'yy':result;break;
        case 'cl':result;break;
      }
    res.render("index.html",{products: result});
})
router.post("/get", (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if(req.body){
        res.json({
            code:200,
            message:"chengong"
        })
    }
    else{
        res.json({
        code:2000,
        message:"false"
    })
}
   
})

router.get("/contact",(req,res)=>{
    res.render("contact.html");
})

router.get("/about",(req,res)=>{
    res.render("about.html")
})


router.get("/product",(req,res)=>{
    res.render("product.html")
})
router.get("/snews",(req,res)=>{
    res.render("news.html")

})

router.get("/Corporatestyle",(req,res)=>{
    res.render("base.html");

})

router.get("/news",(req,res)=>{
    res.render("news.html")
})

router.get("/contact",(req,res)=>{
    res.render("contact.html")
})

router.get("/about_introduce",(req,res)=>{
    res.render("about_introduce.html")
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