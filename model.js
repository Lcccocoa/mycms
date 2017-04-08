/**
 * Created by lcccocoa on 2017/4/8.
 */
const fs = require('fs');
const db = require('./db');

var files = fs.readdirSync(__dirname + '/models');

var js_files = files.filter(function (f){
        return f.endsWith('.js');
}, files);

module.exports = {};

for (var index in js_files) {
    var f = js_files[index];
    var name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

module.exports.sync = function () {
    db.sequelize.sync();
};