const express=require("express");
const morgan=require("morgan");
const app=express();
const cors=require("cors");


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


 module.exports=app;