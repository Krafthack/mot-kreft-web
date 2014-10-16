var m = require('mithril');

var Hug = function (data) {
  this.id = m.prop(data.id);
  this.user_id = m.prop(data.user_id);
  this.day_id = m.prop(data.day_id);
  this.from_name = m.prop(data.from_name);
};

module.exports = Hug;
