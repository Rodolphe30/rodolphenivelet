var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    gulp.watch('sass/*.scss',['styles']);
});

gulp.task('styles', function() {
	var postcss      = require('gulp-postcss');
  var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');

  return gulp.src('sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(postcss([ require('autoprefixer') ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css/'));
});
