var gulp = require('gulp');
require('./gulpscripts');

gulp.task('default', ['js']);
gulp.task('watch', ['watch-js']);
