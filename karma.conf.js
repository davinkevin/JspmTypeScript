module.exports = function (config) {
    config.set({
        frameworks: ['jspm', 'jasmine'],

        //files: [
        //'node_modules/babel-polyfill/dist/polyfill.js'
        //],

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

        preprocessors: {
            'public/**/*.ts': ['typescript']
        },

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'system', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: false, // (optional) Skip resolution and preprocessing.
                removeComments: true, // (optional) Do not emit comments to output.
                concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
            },
            typings: [
                'typings/tsd.d.ts'
            ]
        },
        logLevel: config.LOG_DEBUG,
        browsers: ['PhantomJS']
    });
};