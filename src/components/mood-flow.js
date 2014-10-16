var m = require('mithril');
var Mood = require('../models/Mood');
var error = require('../common/error');

module.exports = {
  controller: function () {
    this.moods = m.prop([]);
    Mood.getAll().then(this.moods, error);
  },
  view: function (ctrl) {
    return m("section", [
      m(".typo-info", "Recent moods"),
      ctrl.moods().map(moodItem)
    ]);
  }
};

function moodItem(mood) {
  return m(".c-mood", [
    feel(mood.feel()),
    m(".comment", mood.comment()),
    m(".location", "At " + mood.location())
  ]);
}

function feel(f) {
  var smiley = "";

  switch (f) {
    case 0:
      smiley = "fa fa-smile-o";
      break;
    case 1:
      smiley = "fa fa-meh-o";
      break;
    case 2:
      smiley = "fa fa-frown-o";
  }

  return m("i.feel", {class: smiley});
}
