const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const PATHS = {
  src: path.join(__dirname, 'src')
}
const confMinify = {
  collapseWhitespace: false,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      minify: confMinify,
      inject: true,
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].style.css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
      // Add safelist for bootstrap classes which added dynamically
      safelist: [/^carousel-/, /^collaps/, /^show/]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        }
      },
    ],
  },
};
