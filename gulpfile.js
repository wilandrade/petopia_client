var gulp = require('gulp');

var paths = {
	scripts: ['scripts/**/*.js'],
	karmaTestFiles: 'scripts/**/*.spec.js',
	karmaConfigFile: 'karma.conf.js'
}

gulp.task('default', function() {

});

gulp.task('test', function(){
	var karma = require('gulp-karma');
	return gulp
	  .src(paths.karmaTestFiles)
	  .pipe(karma({configFile: paths.karmaConfigFile, action: 'run'}));
});

gulp.task('lint', function(){
	var jshint = require('gulp-jshint');
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('serve', function(){
	var nodemon = require('gulp-nodemon');
	nodemon({ script: 'server.js', ignore: 'node_modules/**/*.js' })
	  .on('restart', function(){
	  	console.log('Server restarted!!!');
	  })
});

gulp.task('watch', function(){
	gulp.watch(paths.scripts, ['lint'])
});