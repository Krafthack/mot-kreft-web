var m = require('mithril');
var User = require('./models/User');

m.route(document.getElementById("main-region"), "/", {
  "/": {
    controller: function () {
      this.hc = m.prop("");
      User.get().then(function (res) {
        this.hc(res.success);
      }.bind(this));
    },
    view: function (ctrl) {
      return m("", "Halla "+ ctrl.hc());
    }
  }
});
