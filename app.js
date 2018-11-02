var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var query = require('./config/mysql');
var logger = require('./config/logger');

var request = require('request');

// var indexRouter = require('./routes/index');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);


query('SELECT * FROM t_operator_app_version', function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.stringify(results))
    // connected!
});

// query('INSERT INTO t_operator_app_version(id,name,age)', function (error, results, fields) {
//     if (error) throw error;
//     console.log(JSON.stringify(results))
//     // connected!
// });


request.post({
    url: 'http://developing.zxwave.com/besafe/backend/user/login',
    form: JSON.stringify({
        "account": "18201392182",
        "password": "123456"
    })

}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});



var routes = require('./routes/index');

routes(app)





module.exports = app;