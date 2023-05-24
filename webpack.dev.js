const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map
  devtool: 'source-map',
  devServer: {
    static: './docs',
  },
});
