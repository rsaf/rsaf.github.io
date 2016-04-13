var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');
//cnpm install gulp gulp-minify-css gulp-concat gulp-uglify gulp-notify gulp-rename


var libStyles = [
    // // 'bower_components/normalize-css/normalize.css',
    'bower_components/Materialize/dist/css/materialize.min.css'
];

var libScripts = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/Materialize/dist/js/materialize.min.js'
];

var angularScripts = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js'
]

// Lib
gulp.task('lib-styles', function() {
    return gulp.src(libStyles).pipe(concat('lib.min.css')).pipe(minifyCss()).pipe(gulp.dest('dist/css'))
});
gulp.task('lib-scripts', function() {
    return gulp.src(libScripts).pipe(concat('lib.min.js')).pipe(gulp.dest('dist/js'))
});
gulp.task('angular', function(){
    return gulp.src(angularScripts).pipe(concat('angular.min.js')).pipe(gulp.dest('dist/js'));
});

gulp.task('default',['angular','lib-scripts','lib-styles']);
