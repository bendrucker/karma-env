'use strict';

var initializeEnv = function (files) {
  files.unshift({
    pattern: __dirname + '/env.js',
    included: true,
    served: true,
    watched: false
  });
};

initializeEnv.$inject = ['config.files'];

module.exports = {
  'framework:env': ['factory', initializeEnv]
}
