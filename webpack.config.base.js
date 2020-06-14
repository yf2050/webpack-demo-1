const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "喻峰",
      template: "./src/assets/index.html",
    }),
  ],
}