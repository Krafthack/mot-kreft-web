var m = require('mithril');

var propShare = require('../lib/mithril/prop-share');

module.exports = {
  controller: function () {
    var active = propShare('nav-active');
    this.toggleActive = function () {
      active(!active());
    };

    this.active = active;
  },
  view: function (ctrl) {
    return m("header.c-header", [
      m("button", {
        class: ctrl.active() ? "is-active" : "",
        onclick: ctrl.toggleActive
      }, m("i.fa.fa-bars"))
    ]);
  }
};
