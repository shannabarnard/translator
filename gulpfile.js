var gulp = require('gulp'),
  compass = require('gulp-compass'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
});

gulp.task('compass', function() {
  gulp.src('builds/development/**/*.scss')
  .pipe(compass({
    config_file: 'config.rb',
    css: 'builds/development/css',
    sass: 'builds/development/scss'
  }))
  .pipe(gulp.dest('builds/development/css'));
});

gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*', ['js']);
  //gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch('builds/development/**/*.scss', ['compass']);
  gulp.watch(['builds/development/*.html',
    'builds/development/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'compass', 'webserver']);
