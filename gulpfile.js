/*
	You can run the sass compiler by calling the following commands from the command line:
	> gulp sass
	> gulp sass:watch
 */

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

// Compile Sass files into one minified CSS file
gulp.task('sass', function () {
  return gulp.src(['style/scss/main.scss', 'style/scss/main.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('style/css/'));
});

// Sass watcher
gulp.task('sass:watch', function () {
  gulp.watch('style/scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', function () {
  gulp.start('sass:watch');
});

/*
  All sass files made in the sass folder should be imported in the main.sass. As this is the file that gets called for compile.
  The compiled css file is automatically compressed and is all one-line, for smaller file size.
 */