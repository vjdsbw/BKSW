const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/index")
})

router.get("/index", (req, res) => {
    res.render("index.html");
})
// 将接口news重定向到news.js里的news接口
router.get("/news",(req,res)=>{
    res.redirect("/news/news")
})
module.exports = router;