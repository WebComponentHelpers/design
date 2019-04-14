const path = require('path');

module.exports = {
  entry: './demo/entry_point_for_bundler.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'demo/build/')
  }
};
