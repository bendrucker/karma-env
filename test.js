'use strict';

var karma  = require('karma-as-promised');
var extend = require('xtend');

describe('karma-env', function () {

  this.timeout(10000);

  var config;
  beforeEach(function () {
    config = {
      basePath: '',
      plugins: ['karma-mocha', 'karma-chai', 'karma-phantomjs-launcher', require('./')],
      frameworks: ['mocha', 'chai', 'env'],
      browsers: ['PhantomJS'],
      singleRun: true
    };
  });

  it('exposes client.env as window.__env', function () {
    return karma.server.start(extend(config, {
      client: {
        env: {
          KEY: 'VAL'
        }
      },
      files: ['test/with-config.js']
    }));
  });

  it('sets window.__env as an empty object with no config', function () {
    return karma.server.start(extend(config, {
      files: ['test/no-config.js']
    }));
  });

});
