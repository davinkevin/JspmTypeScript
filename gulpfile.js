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
    var server = hs.createServer({"root": "./"});
    server.listen(8080);
    open("http://127.0.0.1:8080");
    cb();
});
