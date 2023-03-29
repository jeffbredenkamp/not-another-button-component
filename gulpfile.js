const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildButtons() {
    return src('src/not-another-button-component.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

function watchTask() {
    watch(['src/not-another-button-component.scss'], buildButtons)
}

exports.default = series(buildButtons, watchTask)