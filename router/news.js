const express = require("express");
const  News= require("../model/news")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/index.php/images/news", (req, res) => {
    res.render("news.html");
})

router.get("/asdc", (req, res) => {
    res.render("index.html");
})



module.exports = router;