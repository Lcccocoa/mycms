/**
 * Created by lcccocoa on 2017/4/8.
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize('cms', 'cms', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports.sequelize = sequelize;
