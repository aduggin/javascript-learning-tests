module.exports = function(config) {
    config.set({
        basePath: 'app',
        frameworks: ['mocha-debug', 'mocha', 'chai', 'sinon'],
        files: [
            'tests/**/*.js'
        ],
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