var m = require('mithril');


var nav = require('./components/nav');
var header = require('./components/header');
var error = require('./components/error-msg');
var welcome = require('./components/welcome');
var moodFlow = require('./components/mood-flow');
var signup = require('./components/signup');

var mixinLayout = require('./lib/mithril/mixin-layout');
var canvasLayout = require('./lib/mithril/canvas-layout');

m.route(document.getElementById("main-region"), "/", {
  "/": baseLayout(welcome),
  "/flow": baseLayout(moodFlow),
  "/signup": baseLayout(signup)
});

function baseLayout(component) {
  return canvasLayout(mixinLayout(header, nav), mixinLayout(error, component), { onClass: "u-slideIn"});
}
