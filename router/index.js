const express = require("express");
const  News= require("../model/news")
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/index")
})

router.get("/index", (req, res) => {
    res.render("index.html");
})

router.get("/contact",(req,res)=>{
    res.render("contact.html");
})

router.get("/Corporatestyle",(req,res)=>{
    res.render("base.html");

})


module.exports = router;