var m = require('mithril');
var config = require('../config');

var User = function (data) {
  this.id = m.prop(data.id);
  this.name = m.prop(data.name);
  this.email = m.prop(data.email);
  this.password = m.prop(data.password);
  this.userType = m.prop(data.userType);
};

User.get = function() {
  return m.request({
    method: "GET",
    url: config.api
  });
};

User.prototype.validate = function() {
    var errors = [];
    if(!this.name() && !this.name().trim().length) {
        errors.push({key: 'name'});
    }
    if(!this.email() && !this.email().trim().length) {
        errors.push({key: 'email'});
    }
    if(!this.password() && !this.password().length) {
        errors.push({key: 'password'});
    }
    if(!this.userType() && !this.userType().length) {
        errors.push({key: 'userType'});
    }

    return errors.length > 0 ? errors : undefined;
};

User.prototype.save = function() {
    return m.request({
        method: 'POST',
        url: config.api + '/users',
        data: this
    });
};

module.exports = User;
