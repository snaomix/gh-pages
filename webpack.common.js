import path from "node:path";
import { globSync } from "glob";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import purgecss from "@fullhuman/postcss-purgecss";

const __dirname = import.meta.dirname;
const PATHS = {
  src: path.join(__dirname, "src"),
};
const confMinify = {
  collapseWhitespace: false,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

export default {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      minify: confMinify,
      inject: true,
      hash: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  purgecss({
                    content: globSync(`${PATHS.src}/**/*`, { nodir: true }),
                    safelist: [/^carousel-/, /^collaps/, /^show/],
                  }),
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
    ],
  },
};
