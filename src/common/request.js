var m = require('mithril');

module.exports = function (options) {
  options = options || {};
  return m.request({
    method: options.method || "GET",
    url: options.url || "",
    type: options.type || undefined,
    unwrapSuccess: options.unwrapSuccess || function (res) {
      return res.data;
    },
    unwrapError: options.unwrapError || function (res) {
      return res.error;
    }
  });
};

function unwrap(res) {
  if (res.success) {
    return res.data;
  }
}
