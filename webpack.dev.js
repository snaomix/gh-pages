import { merge } from "webpack-merge";
import common, { PATHS } from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  // source-map, nosources-source-map, hidden-nosources-source-map, hidden-source-map
  devtool: "source-map",
  watchOptions: {
    poll: 100,
    ignored: /node_modules/,
  },
  devServer: {
    hot: true,
    port: 8080,
    host: "0.0.0.0",
    liveReload: true,
    client: {
      webSocketURL: "ws://localhost:8080/ws",
    },
    static: {
      directory: PATHS.src,
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
