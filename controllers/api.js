let express = require('express');
let router = express.Router();

router.post('/list', function (req, res) {
    console.log(req.connection.remoteAddress)
    res.json({
        status: 1,
        msg: 'success',
        data: '111111111111111111111111111'
    })
});

module.exports = router