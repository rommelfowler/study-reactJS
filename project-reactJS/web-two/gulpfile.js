'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// SCSS I => O
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile CSS
gulp.task('compile_scss', function(){
  gulp.src(SCSS_SRC)
    .pipe(sass().on('error',sass.logError))     // Pipe method chains tasks in
    .pipe(minifyCSS())                          // gulp.
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

// Detect change in SCSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);       // Array - to detect tasks
});
// Run tasks
gulp.task('default', ['watch_scss']);
