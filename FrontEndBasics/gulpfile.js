var gulp = require('gulp'),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify");

gulp.task('sass', function () {
    gulp.src('styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./styles/'))
});

gulp.task('vendorscripts', function () {
    gulp.src(['bower_components/jquery/dist/jquery.js','bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'])
      .pipe(rename({
          suffix: ".min",
          extname: ".js"
      }))
      .pipe(concat.scripts('vendor-scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./scripts/'));
});

gulp.task('scripts', function () {
    gulp.src('scripts/app/**/*.js')
      .pipe(concat('scripts.js'))
      //.pipe(uglify())
      .pipe(gulp.dest('./scripts/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('styles/scss/**/*.scss', ['sass']);
    gulp.watch('scripts/app/**/*.js', ['scripts']);
});

gulp.task('default', ['vendorscripts', 'scripts', 'sass' ,'watch']);