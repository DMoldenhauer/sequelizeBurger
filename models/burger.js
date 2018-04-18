var orm = require("../config/orm.js");


var burgers = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            console.log(res)
            cb(res);
        });
    },

    // The variables cols and vals are arrays.
    create: function (name, cb) {
        console.log("burgers create")
        orm.create("burger_name", name, function (res) {
            console.log(res)
            cb(res);
        });
    },

    updateOne: function (item_id, cb) {
        orm.updateOne(item_id, function (res) {
            cb(res);
        });
    }
};





module.exports = burgers;