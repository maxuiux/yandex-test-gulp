const plugins = [
	'node_modules/swiper/swiper-bundle.js'
];

const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const chalk = require('chalk');

module.exports = function libs_js(done) {
	if (plugins.length > 0)
		return src(plugins)
			.pipe(uglify())
			.pipe(concat('libs.min.js'))
			.pipe(dest('build/js/'))
	else {
		return done(console.log(chalk.redBright('No added JS plugins')));
	}
}