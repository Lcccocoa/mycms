
var Sequelize = require('sequelize');
const db = require('../db');

var User = db.sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(50),
    password: Sequelize.STRING(50),
}, {
    freezeTableName: true
});

module.exports = User;