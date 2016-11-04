/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-class-counter'
  setupPreprocessorRegistry: function(type, registry) {
    var appOptions = registry.app.options || {};
    var addonOptions = appOptions['ember-class-counter'] || {};
    var environments = addonOptions.environments || ['development'];

    if (_includes(environments, registry.app.env)) {
      var ClassCounter = require('./class-counter');

      registry.add('htmlbars-ast-plugin', {
        name: 'count-classes',
        plugin: ClassCounter,
        baseDir: function() { return __dirname; }
      });
    }
  }
};
