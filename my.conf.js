module.exports = function(config) {
    config.set({
      basePath: '',
      autoWatch: true,
      frameworks: ['jasmine'],
  
      files: [
        'services/*.js',
        'test/spec/*.js'
      ],
      browsers: ['Chrome'],
      port: 9800,
      reporters: ['progress', 'coverage'],
      preprocessors: { '*.js': ['coverage'] },
  
      singleRun: true
    });
  };