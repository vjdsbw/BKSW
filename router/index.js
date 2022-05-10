const express = require("express");
const router = express.Router();
const  News= require("../model/news")
router.get("/", (req, res) => {
    res.redirect("/index")
})

router.get("/index", (req, res) => {
    res.render("index.html");
})

router.get("/contact",(req,res)=>{
    res.render("contact.html");
})


router.get("/about",(req,res)=>{
    res.render("about.html")
})

router.get("/index.php/single/company", (req, res) => {
    res.render("company.html");
})

router.get("/index.php/product/product", (req, res) => {
    res.render("product.html");
})

router.get("/index.php/images/contact", (req, res) => {
    res.render("contact.html");
})

module.exports = router;