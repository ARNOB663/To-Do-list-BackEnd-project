//Basic libary imports
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyparser = require('body-parser');
//Security Middleware library imports
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
//Database libaries import
const mongoose = require('mongoose');

//Security Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Body parser Implementation
app.use(bodyparser.json());

//Request Rate Limiting Implementation
const  limiter=rateLimit({windowMs: 15 * 60 * 1000,max: 3000})// 100 requests per 15 minutes
app.use(limiter);// 100 requests per 15 minutes

//MongoDB Connection 
let URI="mongodb://localhost:27017/Todo"
let OPTION="{user:'',pass:''}"
mongoose.connect(URI,JSON.parse(OPTION),()=>{
    console.log("Connected to MongoDB")
})