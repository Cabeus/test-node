// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var api = require('../controllers/api');

module.exports = function (app) {
    app.use('/api', api);
    

    
}