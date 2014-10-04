var m = require('mithril');

var propShare = require('../lib/mithril/prop-share');

module.exports = {
  controller: function () {
    this.toggleActive = function () {
      var active = propShare('nav-active');
      active(!active());
    };
  },
  view: function (ctrl) {
    return m("header.c-header", [
      m("button", {
        onclick: ctrl.toggleActive
      }, "Toggle Nav")
    ]);
  }
};
