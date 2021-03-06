const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildButtons() {
    return src('source/not-another-button-component.scss')
    .pipe(sass())
    .pipe(dest('dist/mono'))
}

function watchTask() {
    watch(['source/not-another-button-component.scss'], buildButtons)
}

exports.default = series(buildButtons, watchTask)