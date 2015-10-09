var gulp = require('gulp');
var jade = require('gulp-jade');
var electron = require('electron-connect').server.create();

gulp.task('default', ['templates', 'serve']);

gulp.task('templates', function() {
    gulp.src('./views/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
});

gulp.task('serve', function() {
    electron.start();
    gulp.watch('./views/*.jade', ['templates']);
    gulp.watch('app.js', electron.restart);
    gulp.watch([
        './public/img/*.png',
        './public/js/*.js',
        './public/css/*.css',
        './public/*.html'
    ], electron.reload);
});