var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Project1trendytweet');
module.exports.Hash = require("./hash.js");
module.exports.HashUser = require("./hashUser.js")
// Add User here as well
module.exports.User = require("./user")