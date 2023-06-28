const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        test: /\.(png|jpe?g)$/i,
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              // Your options for `sharp`
              encodeOptions: {
                webp: {
                  quality: 20,
                },
              },
            },
          },
        ],
      }),
    ],
  }
});
