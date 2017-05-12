var express = require('express');
var router = express.Router();
var user = require('../model').user;

router.get('/login', function(req, res, next) {
    res.json({
        test: 'test content'
    });
}).post('/login', function(req, res, next) {
    console.log(req.body);

    var result = {};
    user.findOne({
        available: true,
        where: {
            name: name
        }
    }).then(function(auser) {
        if (auser) {
            if (auser.password === pwd) {
                result.status = 0;
                result.msg = '登录成功';
                result.data = JSON.stringify(auser);
            } else {
                result.status = 1;
                result.msg = '登录失败';
                result.data = JSON.stringify(auser);
            }
        } else {
            result.status = 1;
            result.msg = '登录失败';
            result.data = null;
        }

    });

    res.json(result);
});

module.exports = router;