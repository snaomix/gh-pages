import * as path from "path";
import * as glob from "glob";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { PurgeCSSPlugin } from "purgecss-webpack-plugin";

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
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
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
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      // Add safelist for bootstrap classes which added dynamically
      safelist: [/^carousel-/, /^collaps/, /^show/],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
