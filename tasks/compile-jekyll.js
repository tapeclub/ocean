var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('compile:jekyll', function () {
  return run('jekyll build').exec();
});

gulp.task('watch:jekyll', function () {
  return run('jekyll build --watch --incremental').exec();
});
