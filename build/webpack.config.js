const build = require('./build')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const utils = require('./utils.js')

module.exports = env => {
  // Load environment configurations
  build.set(env.production === true)
  const config = build.config
  // webpack global settings
  return {
    watch: config.watch,
    target: 'node',
    entry: config.entry,
    output: {
      path: path.resolve(__dirname, '..', config.output.path),
      filename: config.output.filename,
      library: 'server',
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, '..', config.rootPath),
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    externals: [nodeExternals()],
    devtool: config.sourceMap ? 'source-map' : false,
    module: {
      rules: [
        { // compiles vue files
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: utils.stylesLoader(
              config.style.use,
              config.style.minify,
              config.sourceMap
            )
          }
        },
        { // transpile ECMAScript 5
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        utils.eslintLoader(config.eslint)
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: utils.trim(config.style.path, '/', 'r') + '/' + config.style.filename
      }),
      new ManifestPlugin()
    ]
  }
}
