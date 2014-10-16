var mixinLayout = require('./mixin-layout');

module.exports = function (outsideCanvas, onCanvas, options) {
  options = options || {};
  return {
    controller: function () {
      this.off = new outsideCanvas.controller();
      this.on = new onCanvas.controller();
    },
    view: function (ctrl) {
      return m(".u-wrap", [
        outsideCanvas.view(ctrl.off),
        m(".u-canvas", {
          class: options.onClass || ""
        }, onCanvas.view(ctrl.on))
      ]);
    }
  };
};
