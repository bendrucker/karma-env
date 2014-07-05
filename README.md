karma-env [![Build Status](https://travis-ci.org/bendrucker/karma-env.svg)](https://travis-ci.org/bendrucker/karma-env)
=================

Karma plugin for providing configuration as `window.__env`, mirroring [superstatic](https://github.com/divshot/superstatic)/[Divshot](http://www.divshot.com/) [(docs)](http://docs.divshot.com/guides/environment-variables). 

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['env'],

    files: [
      '*.js'
    ],

    client: {
      env: {
        KEY: 'VAL'
      }
    }
  });
};
```
```
// test.js
console.log(window.__env.KEY) // => 'VAL'
```

You can pass in whatever environment configuration you'd like, including `process.env` or `require('./.env.json')`. If no environment is provided, `window.__env` will be an empty object.
