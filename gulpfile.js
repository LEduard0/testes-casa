const gulp = require('gulp');

gulp.task('default', function a(done) {
    done();
});

const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.js = function() {
    return src('src/js/*.js')
        // The gulp-uglify plugin won't update the filename
        .pipe(uglify())
        // So use gulp-rename to change the extension
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('js/'));
}