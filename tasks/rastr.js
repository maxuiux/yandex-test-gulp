const {
	src,
	dest
} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');
const plumber = require('gulp-plumber');

module.exports = function rastr() {
	return src('src/images/**/*.+(png|jpg|jpeg|gif|svg|ico|webp)')
		.pipe(plumber())
		.pipe(changed('build/images'))
		.pipe(dest('build/images'))
		.pipe(bs.stream())
}