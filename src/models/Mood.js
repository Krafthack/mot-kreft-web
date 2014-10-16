var m = require('mithril');

var Mood = function (data) {
  this.id = m.prop(data.id);
  this.user_id = m.prop(data.user_id);
  this.ts = m.prop(ts);
  this.comment = m.prop(data.comment);
  this.location = m.prop(data.location);
  this.feel = m.prop(data.feel);
};

module.exports = Mood;
