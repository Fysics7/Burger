var orm = require("../config/orm.js");

const Burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", callback);
    },

    insertOne: function (cols, vals, callback) {
        orm.insertOne('burgers', cols, vals, function (res) {
            callback(res);
        });
    },

    updateOne: function (objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    }

};

module.exports = Burger;