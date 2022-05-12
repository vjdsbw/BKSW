const express = require("express");
const News = require("../model/news")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();

router.get("/news", (req, res) => {
    res.render("news.html")
})

router.get("/cnews", (req, res) => {
    res.render("cnews.html")
})
router.get("/hnews", (req, res) => {
    res.render("hnews.html")
})
router.get("/snews", async (req, res) => {
    // 后台用?接受的id是string类型，所以对应model里的num的type要改为string
    var id = req.query.id;
    //获得所有的数据，方便咋子snews页面跳转
    let mesa = await News.find();
    // 获得对应id 的num的值
    let mess = await News.find({num:id});
    let mes = mess[0];
    // 将frequency的值加1并存入数据库
    var a = mes.frequency+1;
    News.findOneAndUpdate({ num: id },  { $set: { frequency: a}},{new:true}, (err,data) => {
        if (err) {
            console.log(err);
        }
    })
    res.render("snews.html", { mes, mesa, id })
})

module.exports = router;