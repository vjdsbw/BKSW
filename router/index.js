const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/index")
})

router.get("/index", (req, res) => {
    res.render("index.html");
})

router.get("/index.php/images/Corporatestyle", (req, res) => {
    res.render("base.html");
})
router.get("/about",(req,res)=>{
    res.render("about.html")
})

module.exports = router;