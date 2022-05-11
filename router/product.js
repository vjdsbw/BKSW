const express = require("express");
const Product = require("../model/product")
const path = require("path")
const mongoose = require("mongoose");
const { get } = require("http");
const router = express.Router();

router.get("/product",(req,res)=>{
    res.render("product.html")
})
router.get("/product2",(req,res)=>{
    res.render("product2.html")
})


module.exports = router;