module.exports = function (config) {
    config.set({
        frameworks: ['jspm', 'jasmine'],

        jspm: {
            config: 'config.js',
            loadFiles: ['**/*.spec.ts'],
            serveFiles: ['**/*.+(ts|html|css)']
        },

        proxies: {
            '/public/': '/base/public/',
            '/jspm_packages/': '/base/jspm_packages/'
        },

        reporters: ['dots'],
        /*logLevel: config.LOG_DEBUG,*/
        browsers: ['PhantomJS']
    });
};