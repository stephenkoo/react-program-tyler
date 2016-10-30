var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {presets: ['es2017', 'react']}
      },{
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  postcss: [autoprefixer({browsers: ['last 2 versions']})]
}
