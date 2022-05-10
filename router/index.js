const express = require("express");
const router = express.Router();
const  News= require("../model/news")
router.get("/", (req, res) => {
    res.redirect("/index")
})

router.get("/index", (req, res) => {
    res.render("index.html");
})


// 以下为news的接口
// router.get("/snews",async(req,res)=>{    
//     var id =req.query.id;
//     console.log(id);
//     var mesa =await News.find();
//     var mes=mesa[id-1];
//     res.render("snews.html",{mes,mesa,id})
// })
// 以上为news的接口



module.exports = router;