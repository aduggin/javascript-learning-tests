module.exports = function(config) {
    config.set({
        basePath: 'app',
        frameworks: ['mocha-debug', 'mocha', 'chai-jquery', 'chai', 'sinon', 'jquery-1.11.0'],
        files: [
            'tests/**/*.js',
            'fixtures/*.html'
        ],
        preprocessors: {
            '**/*.html': ['html2js']
        },
        exclude: [],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: false,
        browsers: ['Safari', 'Chrome', 'PhantomJS'],

        captureTimeout: 6000,
        singleRun: true
    });
};