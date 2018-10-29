var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var logger = require('./config/log4js');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

logger.info("hello world categories-default test, this is info");
logger.debug("hello world categories-default test, this is debug");
logger.warn("hello world categories-default test, this is warn");
logger.error("hello world categories-default test, this is error");


module.exports = app;