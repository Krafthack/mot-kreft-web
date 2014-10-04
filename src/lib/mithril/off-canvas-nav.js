var mixinLayout = require('./mixin-layout');

module.exports = function (outsideCanvas, onCanvas) {
  return {
    controller: function () {
      this.off = new outsideCanvas.controller();
      this.on = new onCanvas.controller();
    },
    view: function (ctrl) {
      return m(".u-wrap", [
        outsideCanvas.view(ctrl.off),
        m(".u-canvas.u-slideIn", onCanvas.view(ctrl.on))
      ]);
    }
  };
}
