const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(require('./webpack.config'), {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ]
})
