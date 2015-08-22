var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
  	connect = require('gulp-connect'),
  	imagemin = require('gulp-imagemin'),
  	rimraf = require('gulp-rimraf');

var paths = {
	scripts: ['src/**/*.js', 'lib/**/*.js'],
	images: 'assets/**/*'
};

// TODO: look into a better way to set this bool
var production = false;



// Server
//-----------------------------------------------------------------

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});
 
gulp.task('html', function () {
	gulp.src('*.html')
		.pipe(connect.reload());
});



// Clean
//-----------------------------------------------------------------

gulp.task('clean-assets', function(cb) {
  	return gulp.src('build/assets/*', { read: false })
	    .pipe(rimraf());
});



// Scripts
//-----------------------------------------------------------------

gulp.task('scripts', function() {
	var pipeline;

	if(!production){
		pipeline = gulp.src(paths.scripts)
		    .pipe(concat('main.min.js'))
		    .pipe(gulp.dest('build/js'));
	} else {
		pipeline = gulp.src(paths.scripts)
	      	.pipe(uglify())
	      	.pipe(concat('main.min.js'))
		    .pipe(gulp.dest('build/js'));
	}

  return  pipeline;
});



// Images
//-----------------------------------------------------------------

// Images in the build are deleted and replaced each time this
// task runs.
// TODO: only optimize images that have changed?
gulp.task('images', function() {
	gulp.src('build/assets', { read: false }).pipe(rimraf());
  	return gulp.src(paths.images)
    	.pipe(imagemin({optimizationLevel: 1}))
    	.pipe(gulp.dest('build/assets'));
});



// Watcher
//-----------------------------------------------------------------
 
gulp.task('watch', function () {
 	gulp.watch(['*.html'], ['html']);
 	gulp.watch(paths.scripts, ['scripts']);
 	gulp.watch(paths.images, ['images']);
});
 


// Default Task
//-----------------------------------------------------------------

gulp.task('default', ['connect', 'scripts', 'images', 'watch',]);