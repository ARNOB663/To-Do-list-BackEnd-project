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





