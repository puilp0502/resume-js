const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common("prod"), {
  mode: 'production',
  devtool: '',  // No sourcemap
})