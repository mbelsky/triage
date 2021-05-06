const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    'awesome-dependency': 'commonjs awesome-dependency',
    'awesome-complex-dependency': 'commonjs awesome-complex-dependency',
  },
  mode: 'production',
  target: 'node',
  optimization: {
    minimize: false,
  },
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};