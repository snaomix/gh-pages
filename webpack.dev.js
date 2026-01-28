import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  // source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map
  devtool: "source-map",
});
