const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "imgs/[name][ext]",
  },
});
