var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET home page. */
router.get('/', function(req, res, next) {
    Article.findAll().then(function(articles) {
        // console.log(articles);
        res.render('index', {
            title: 'All Article',
            articles: articles
        });
    });
});

router.post('/add_article', function(req, res, next) {
    console.log('添加文章');
    var article = {
        author: 'Lcc',
        title: req.body.title
    };
    Article.create(article).then(function(msg) {
        console.log(msg);
        res.redirect('/');
    });
});

router.get('/test', function name(req, res, next) {
    res.render('test');
});

module.exports = router;