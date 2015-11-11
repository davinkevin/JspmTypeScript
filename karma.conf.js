module.exports = function (config) {
    config.set({
        frameworks: ['jspm', 'jasmine'],

        basePath: 'public',

        jspm: {
            config: 'config.js',
            loadFiles: ['**/*.spec.ts'],
            serveFiles: ['**/*.+(ts|html|css)'],
            stripExtension : true
        },

        proxies: {
            '/app/': '/base/app/',
            '/jspm_packages/': '/base/jspm_packages/'
        },

        reporters: ['dots'],
        /*logLevel: config.LOG_DEBUG,*/
        browsers: ['PhantomJS']
    });
};