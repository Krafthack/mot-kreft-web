var m = require('mithril');
var nav = require('./components/nav');
var header = require('./components/header');
var mixinLayout = require('./lib/mithril/mixin-layout');
var canvas = require('./lib/mithril/off-canvas-nav');

m.route(document.getElementById("main-region"), "/", {
  "/": canvas(mixinLayout(nav, header), mixinLayout()) 
});
