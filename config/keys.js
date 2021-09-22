// file will determine which credentials to use
if (process.env.NODE_ENV === 'production') {
  // we are in produciton, return prod keys
  module.exports = require('./prod');
} else {
  // we are in development, return dev keys
  module.exports = require('./dev');
}
