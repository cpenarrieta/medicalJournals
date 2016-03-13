var _ = require('lodash');

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  expireTime: 10 * 24 * 60 * 60, // 10 days in seconds
  secrets: {
    jwt: process.env.JWT || 'secret key'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
var envConfig = require('./' + config.env);
envConfig = envConfig || {};

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
