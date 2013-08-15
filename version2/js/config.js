/* jshint -W024 */
/* jshint -W030 */
/* jshint expr:true */

require.config({
  deps: window.mochaPhantomJS || window.mocha ? ['../../test/unit/runner'] : ['main'],

  paths: {
    'text'            : '../bower_components/requirejs-text/text',
    'jquery'          : '../bower_components/jquery/jquery',
    'jquery.simulate' : '../bower_components/jquery-simulate/jquery.simulate',
    'underscore'      : '../bower_components/underscore/underscore',
    'rsvp'            : '../bower_components/rsvp/rsvp.amd',

    //test dependencies
    'mocha'           : '../bower_components/mocha/mocha',
    'chai'            : '../bower_components/chai/chai',
    'chai-jquery'     : '../bower_components/chai-jquery/chai-jquery',
    'sinon'           : '../bower_components/sinon/index',
    "squire"          : '../bower_components/squire/src/Squire'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'jquery.simulate': {
      deps: ['jquery'],
      exports: '$'
    },
    'mocha': {
      deps: ['jquery'],
      exports: 'mocha'
    },
    'chai': {
      exports: 'chai'
    },
    'chai-jquery': {
      deps: ['jquery', 'chai']
    },
    'sinon': {
      exports: 'sinon'
    }
  }
});
