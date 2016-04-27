var gulp = require('gulp');
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');


livereload.listen({
  "server": "localhost",
  "port": "35729",
  "reloadPage": "index.html"
});

gulp.task('serve', serve('public'));

gulp.task('watch', ['serve'], function () {
  gulp.watch(['!public/libs/**', 'public/**']).on('change', function (file) {
    livereload.listen();
    livereload.changed(file.path);
  })
})
