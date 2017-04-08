/**
 * Created by lcccocoa on 2017/4/8.
 */
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('cms', 'cms', 'password');
const db = require('../db');


var Article = db.sequelize.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    author: Sequelize.STRING(50),
    title: Sequelize.STRING(100),
    content: Sequelize.TEXT,
    createdTime: Sequelize.DATE,
    updatedTime: Sequelize.DATE
});

module.exports = Article;