var m = require('mithril');

m.route(document.getElementById("main-region"), "/", {
  "/": {
    controller: function () {

    },
    view: function (ctrl) {
      return m("", "Halla mithril");
    }
  }
});
