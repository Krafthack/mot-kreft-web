var join = require("path").resolve;
var base = './src';

var notify = require('gulp-notify');
var fs = require('fs');

module.exports = {
    base: base,
    output: './public/',
    path: {
        "scripts": join(base, "app.js"),
        "scriptsWatch": join(base, "**/*.js"),
    },

    join: join,

    plumb: {
        errorHandler: notify.onError('Error: <%- error.message %>')
    }
};
