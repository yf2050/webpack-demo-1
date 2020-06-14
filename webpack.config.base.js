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
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
