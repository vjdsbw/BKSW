const express=require("express");
const path = require("path");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const index = require("./router/index");
const about = require("./router/about")
const product = require("./router/product")
const base = require("./router/base")
const news = require("./router/news")
const contact = require("./router/contact")
const app=express();
const port=8080;

//挂载express-session中间件
app.use(expressSession({
    name:"mazg",
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*3,
    },
}));

//使用mongoose.connect()方法连接数据库
mongoose.connect('mongodb://localhost/422');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已经连接数据库");
});

app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use("/public",express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('html', require('express-art-template'));


app.use("/",index)
app.use("/about",about)
app.use("/product",product)
app.use("/base",base)
app.use("/news",news)
app.use("/contact",contact)




app.use((err,req,res,next)=>{
   res.send(err.message);
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})