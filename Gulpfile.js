var gulp = require('gulp');
require('./gulpscripts');

gulp.task('default', ['less', 'js']);
gulp.task('watch', ['watch-less', 'watch-js']);
