var m = require('mithril');

var Link = function (data) {
  this.title = m.prop(data.title);
  this.url = m.prop(data.url);
};

Link.ctor = function (data) {
  return new Link(data);
};

var Nav = function (data) {
  this.title = m.prop(data.title);
  this.links = m.prop(data.links.map(Link.ctor));
};

module.exports = Nav;
