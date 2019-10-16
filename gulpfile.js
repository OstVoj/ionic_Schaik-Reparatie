/// <binding BeforeBuild='default' ProjectOpened='initialize' />
require('es6-promise').polyfill();
require('require-dir')('tasks');
var gulp = require('gulp');
var runSequence = require('run-sequence');

// Working without Visual Studio
    // 1.- `npm install`
    // 2.- `gulp initialize`
    // 3.- `gulp watch`
    // 4.- `ionic serve`

// Working with Visual Studio
    // 1.- Open your project and wait auto npm installation
    // 3.- Build

gulp.task('default', function () {
    // Compile Sass, TypeScript and inject files into index.html
    runSequence('default:clean', 'default:html', 'default:scss', 'default:ts', 'default:inject');
});

gulp.task('initialize', function () {
    // Download and install bower packages
    runSequence('initialize:tsd', 'initialize:bower');
});
  
// DO NOT USE, BUILD SCRIPT INJECTS FILES IN THE WRONG ORDER!

//gulp.task('build', function () {
//    // Build project
//    runSequence('build:clean', 'build:html', 'build:files');
//});

gulp.task('build', ['default']);
