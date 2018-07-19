'use strict'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "uruk_hai.css",
      chunkFilename: "[uruk_hai].css"
    })
  ]
}