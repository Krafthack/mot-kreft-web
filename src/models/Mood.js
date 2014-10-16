var m = require('mithril');
var config = require('../config');
var request = require('../common/request');

var Mood = function (data) {
  this.id = m.prop(data.id);
  this.user_id = m.prop(data.user_id);
  this.ts = m.prop(data.ts);
  this.comment = m.prop(data.comment);
  this.location = m.prop(data.location);
  this.feel = m.prop(data.feel);
};

Mood.getAll = function () {
  return request({
    method: "GET",
    url: config.api + "/moods",
    type: Mood
  });
};

module.exports = Mood;
