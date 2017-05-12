var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    var session = req.session;
    var username = session.username;
    res.render('user/index', {
        title: 'Users',
        username: username
    });
});

// 登录 
router.get('/login', function(req, res, next) {

    var login = req.session.login;
    res.render('user/login', {
        layout: null,
        title: '用户登录',
        login: JSON.stringify(login),
    });
}).post('/login', function(req, res, next) {
    var name = req.body.name;
    var pwd = req.body.password;
    console.log(name);

    var User = require('../model').user;
    User.findOne({
        available: true,
        where: {
            name: name
        }
    }).then(function(user) {
        if (user) {
            if (user.password === pwd) {

                console.log('登录成功');
                req.session.login = {
                    status: true,
                    name: name,
                    msg: 'ok'
                };
                res.redirect('/users');

            } else {
                console.log('登录失败');
                req.session.login = {
                    status: false,
                    name: name,
                    msg: '登录失败'
                };
                res.redirect('/users/login');
            }
        } else {
            res.redirect('/users/login');
        }
    });
});

// 注册
router.get('/register', function(req, res, next) {
    res.render('user/register', {
        title: '注册'
    });

}).post('/register', function(req, res, next) {
    var name = req.body.name;
    var pwd = req.body.password;

    var User = require('../model').user;
    User.findOne({
        where: {
            name: name
        }
    }).then(function(user) {
        console.log(user);
        if (user === null) {
            User.create({
                name: name,
                password: pwd
            }).then(function(param) {
                res.status = 303;
                res.redirect('/users/login');
            });
        }

    });
});

module.exports = router;