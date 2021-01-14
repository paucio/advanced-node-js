const prod = require('./prod');
const secret = require('./secret');

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = secret;
}
