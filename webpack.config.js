const CleanWebpackPlugin = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

var extractPluginCSS = new ExtractTextPlugin({
  filename: "app.css"
});

module.exports = {
  entry: "./src/js/app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: extractPluginCSS.extract({
          use: [
            {
              loader: "css-loader",
              options: {}
            }
          ]
        })
      },

      {
        test: /\.scss$/,
        use: extractPluginCSS.extract({
          use: [
            {
              loader: "css-loader",
              options: {}
            },
            {
              loader: "sass-loader",
              options: {}
            }
          ]
        })
      },

      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
            }
          }
        ]
      }

    ]
  },

  plugins: [

    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),

    extractPluginCSS,

    new webpack.optimize.UglifyJsPlugin()

  ]

};
