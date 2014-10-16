var m = require('mithril');

var Day = function (data) {
  this.id = m.prop(data.id);
  this.user_id = m.prop(data.user_id);
  this.day_type = m.prop(data.day_type);
};

module.exports = Day;
