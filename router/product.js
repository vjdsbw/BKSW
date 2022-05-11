const express = require("express");
const Product = require("../model/product")
const path = require("path")
const mongoose = require("mongoose")
const router = express.Router();


router.get("/product", async (req, res) => {
    const { pageindex = 1, limit = 9 } = req.query;
    var skip = (pageindex - 1) * limit
    let result = await Product.find().skip(skip).limit(limit);

    let result2 = await Product.aggregate([
        {
            $group: {
                _id: null,
                count: { $sum: 1 }
            }
        }
    ])
    var totalPage = Math.ceil(result2[0].count / limit)
    res.render("product.html",{
        products:result,
        totalPage: totalPage
    })


})



module.exports = router;