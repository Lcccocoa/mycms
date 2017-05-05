var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.json({
        test: 'test content'
    });
}).post('/login', function(req, res, next) {
    res.json({
        test: 'aaa'
    });
});

module.exports = router;