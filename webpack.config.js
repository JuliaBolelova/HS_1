const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var $ = require( "jquery" );

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|ico|svg)$/,
            use:
              [
                'file-loader?name=./images/[name].[ext]',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                  }
                }
              ],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: __dirname +'/dist',
    filename: 'index_bundle.js'
  },
  experiments: {
    topLevelAwait: true
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'index.css'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/index.html',
        filename: 'index.html'
      })
  ],
    mode: 'development'
}