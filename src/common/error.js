var propShare = require('../lib/mithril/prop-share');

var error = propShare('error');

module.exports = function (err) {
  error(err);
  console.error(err);
};
