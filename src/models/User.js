var m = require('mithril');
var config = require('../config');

var User = function (data) {
  this.id = m.prop(data.id);
  this.name = m.prop(data.name);
  this.email = m.prop(data.email);
  this.password = m.prop(data.password);
};

User.get = function () {
  return m.request({
    method: "GET",
    url: config.api
  });
};

User.prototype.save = function() {
    console.log('this: ', this.name());
    return m.request({
        method: 'POST',
        url: config.api + '/users',
        data: this
    });
};

module.exports = User;
