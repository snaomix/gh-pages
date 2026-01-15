import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import TerserPlugin from "terser-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default merge(common, {
  mode: "production",
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
  },
});
