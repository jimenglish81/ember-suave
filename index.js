/* jshint node: true */
'use strict';

var JSCSFilter = require('broccoli-jscs');
var jscsrcBuilder = require('./lib/jscsrc-builder');

module.exports = {
  name: 'ember-suave',

  lintTree: function(type, tree) {
    var ui = this.ui;

    var jscsOptions = this.app.options.jscsOptions || {};
    jscsOptions.configPath = jscsrcBuilder(this.project);

    var jscsFilter = new JSCSFilter(tree, jscsOptions);

    jscsFilter.logError = function(errorText) {
      ui.writeLine(errorText);
    };

    return jscsFilter;
  }
};
