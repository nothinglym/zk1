var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
//Ñ¹Ëõcss
gulp.task('minifycss', function () {
    return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'))

});
//Ñ¹Ëõjs
gulp.task('minifyjs', function () {
    return gulp.src(['js/*.js'])
        .pipe(concat('index.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))

});