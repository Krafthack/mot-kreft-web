var m = require('mithril');
var _ = require('lodash');

var Nav = require('../models/Nav');
var propShare = require('../lib/mithril/prop-share');
var config = require('../config');

module.exports = {
  controller: function () {
    this.active = propShare('nav-active', false);
    var nav = new Nav(config.nav);
    this.links = nav.links;
  },
  view: function (ctrl) {
    return m("nav.c-nav.u-slideIn", {
      class: ctrl.active() ? "is-active" : ""
    }, ctrl.links().map(navItem(ctrl.active)));
  }
};

var navItem = _.curry(function (active, item) {
  return m("a", {
      onclick: active.bind(null, false),
      href: item.url(),
      config: m.route
    }, item.title());
});
