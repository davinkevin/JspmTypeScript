/**
 * Created by kevin on 11/11/2015 for JspmTypeScript
 */

var gulp = require('gulp');
var jspm = require('jspm');
var hs = require("http-server");
var open = require('open');

/*
 Start an http-server for the example project
 */
gulp.task('serve', function(cb) {
    var server = hs.createServer({"root": "./public/"});
    server.listen(8080);
    open("http://127.0.0.1:8080");
    cb();
});

gulp.task('serve-prod', ['build'], function(cb) {
    var server = hs.createServer({"root": "./dist/"});
    server.listen(8080);
    open("http://127.0.0.1:8080");
    cb();
});

gulp.task('build', function(cb) {
    new jspm.Builder().buildStatic('./public/app/app.ts', './dist/build.js', {sourceMaps: true})
        .then(function(){ cb(); })
        .catch(function(ex) {return cb(new Error(ex));})
    ;
});