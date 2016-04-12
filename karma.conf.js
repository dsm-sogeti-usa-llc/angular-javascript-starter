module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/specs.js'
    ],
    exclude: [
    ],
    preprocessors: {
        './src/specs.js': ['webpack', 'source-map']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    webpack: require('./webpack.test')
  })
}
