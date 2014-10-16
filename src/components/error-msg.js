var m = require('mithril');
var propShare = require('../lib/mithril/prop-share');

module.exports = {
  controller: function () {
    this.msg = propShare('error');
    this.msg("");
    this.hasError = function () {
      return this.msg().length > 0;
    }.bind(this);
  },
  view: function (ctrl) {
    return m("section.u-box.c-error.error", {
      class: ctrl.hasError() ? "" : "is-hidden"
    }, [
      m("i.fa.fa-thumbs-down"),
      ctrl.msg(),
      m("i.fa.fa-times-circle-o.pull-right", {onclick: ctrl.msg.bind(null, "")})
    ]);
  }
};
