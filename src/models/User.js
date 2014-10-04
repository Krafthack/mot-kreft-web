var m = require('mithril');

var User = function (data) {

};

User.get = function () {
  return m.request({
    method: "GET",
    url: "http://krafthack-kreft-api.herokuapp.com"
  });
};

module.exports = User;
