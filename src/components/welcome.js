var m = require('mithril');
var User = require('../models/User');

var text = {
  info: "Velkommen til en krafthack mot kreft - webutviklings utgaven!"
}


module.exports = {
  controller: function () {
    this.health = new health.controller();
  },
  view: function (ctrl) {
    return m("section.c-welcome", [
      m("", text.info),
      health.view(ctrl.health)
    ]);
  }
};


var health = {
  controller: function () {
    var status = m.prop("pending");

    setInterval(function () {
      User.get().then(function (res) {
        status(res.success ? "ok" : "pending");
      }, function (error) {
        status("broken");
      });
    }, 3000);

    this.health = status;
  },
  view: function (ctrl) {
    return m(".u-box", {
      class: ctrl.health()
    }, "Api connection is "+ ctrl.health());
  }
};
