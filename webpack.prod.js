const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true, // console.log を出力しない
          },
        },
      }),
      new ImageMinimizerPlugin({
        test: /\.(png|jpe?g)$/i,
        generator: [
          {
            preset: "avif",
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              // Your options for `sharp`
              encodeOptions: {
                avif: {
                  quality: 30,
                },
              },
            },
          },
        ],
      }),
    ],
  }
});
