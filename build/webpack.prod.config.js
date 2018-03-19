const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { __root } = require('./paths')

module.exports = merge(require('./webpack.config'), {
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:7].css'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __root,
      verbose: true,
      dry: true
    })
  ]
})
