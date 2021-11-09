const plugins = [
	'node_modules/swiper/swiper-bundle.css',
];

const {
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const chalk = require('chalk');

module.exports = function libs_style(done) {
	if (plugins.length > 0) {
		return src(plugins)
			.pipe(sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError))
			.pipe(concat('libs.min.css'))
			.pipe(dest('build/css/'))
	} else {
		return done(console.log(chalk.redBright('No added CSS/SCSS plugins')));
	}
}