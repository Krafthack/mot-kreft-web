var m = require('mithril');
var nav = require('./components/nav');
var header = require('./components/header');
var welcome = require('./components/welcome');

var mixinLayout = require('./lib/mithril/mixin-layout');
var canvasLayout = require('./lib/mithril/canvas-layout');


m.route(document.getElementById("main-region"), "/", {
  "/": canvasLayout(mixinLayout(nav), mixinLayout(header, welcome), { onClass: "u-slideIn"})
});
