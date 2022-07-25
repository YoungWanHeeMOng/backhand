"user strict";

// module
const express = require("express");
const app=express();
const port =3000;

// routers
const home =require("./src/routers/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); // 미들웨어로 등록해주는 메서드

module.exports = app;