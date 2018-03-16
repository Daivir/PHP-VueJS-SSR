const utils = require('./utils')
const path = require('path')
const config = require('./server.config')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  watch: true,
  target: 'node',
  entry: config.entry,
  output: {
    path: path.resolve(__dirname, '..', config.output.path),
    filename: config.output.filename,
    library: 'server'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '..', config.rootPath)
    }
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      { // transpile ECMAScript 5
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      { // compiles vue files
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.stylesLoader(config.style.use, config.style.minify, config.sourceMap)
        }
      },
      utils.eslintLoader(config.eslint)
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.trim(config.style.path, '/', 'r') + '/[name].bundle.css'
    })
  ]
}
