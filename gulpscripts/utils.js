var join = require("path").resolve;
var base = './src';

var notify = require('gulp-notify');
var fs = require('fs');

module.exports = {
    base: base,
    output: './public/build/',
    path: {
        "scripts": join(base, "app.js"),
        "scriptsWatch": join(base, "**/*.js"),
        "less": join(base, "style/style.less"),
        "lessWatch": join(base, "style/**/*.less")
    },

    join: join,

    plumb: {
        errorHandler: notify.onError('Error: <%- error.message %>')
    }
};
