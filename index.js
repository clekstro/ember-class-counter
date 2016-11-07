/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-class-counter',

  setupPreprocessorRegistry: function(type, registry) {
    var ClassCounter = require('./class-counter');

    registry.add('htmlbars-ast-plugin', {
      name: 'count-classes',
      plugin: ClassCounter,
      baseDir: function() { return __dirname; }
    });
  }
};
