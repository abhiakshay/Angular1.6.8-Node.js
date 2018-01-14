var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    del = require('del');
//watch = require('gulp-watch');

gulp.task('minifyJs', function() {
    return gulp.src(['app.js', 'src/**/*.js'])
        .pipe(plumber())
        .pipe(concat('build.js'))
        .pipe(ngAnnotate({ add: true }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('build'))
})

gulp.task('clean', function(done) {
    del(['build'], done);
});

gulp.watch('src/**/*.js', ['clean', 'minifyJs']);

gulp.task('default', ['clean', 'minifyJs']);