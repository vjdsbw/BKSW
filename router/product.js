const express = require("express");
const Product = require("../model/product");
const path = require("path");
const mongoose = require("mongoose");
const { get } = require("http");
const router = express.Router();

router.get("/product", async (req, res) => {
  const { pageindex = 1, limit = 9 } = req.query;
  if (req.query.page) {
    let message = await Product.find();
    for (var key in message) {
      if (message[key].page == req.query.page) {
        console.log(message[key]);
      }
    }
  }

  var skip = (pageindex - 1) * limit;
  let result = await Product.find().skip(skip).limit(limit);
  let result2 = await Product.aggregate([
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    },
  ]);
  var totalPage = Math.ceil(result2[0].count / limit);
  res.render("product.html", {
    products: result,
    totalPage: totalPage,
  });
});

router.get("/product2", (req, res) => {
  res.render("product2.html");
});

module.exports = router;
