const gulp = require('gulp');

gulp.task('default', function a(done) {
    done();
});
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

exports.js = function() {
    return src('src/js/*.js')
        // The gulp-uglify plugin won't update the filename
        .pipe(uglify())
        // The gulp-rename rename the filename
        .pipe(concat('scripts.js', { newLine: ';' }))
        // So use gulp-rename to change the extension
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('js/'));
}
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('css/'));
});

const imagemin = require('gulp-imagemin');

gulp.task('minify-img', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
);