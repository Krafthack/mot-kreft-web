var m = require('mithril');
var config = require('../config');

var User = function (data) {

};

User.get = function () {
  return m.request({
    method: "GET",
    url: config.krafthack-kreft-api
  });
};

module.exports = User;
