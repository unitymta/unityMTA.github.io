var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

/* jshint task would be here */

gulp.task('build-css', function() {
  return gulp.src('css/style.scss')
    .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('css'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
//   gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('css/style.scss', ['build-css']);
});