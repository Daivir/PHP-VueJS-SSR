const ManifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const { __src, __dist } = require('./paths')
const utils = require('./utils.js')

const config = {
  input: 'main.js',
  output: 'server.js',
  styles: ['sass']
}

module.exports = {
  target: 'node',
  entry: path.resolve(__src, config.input),
  output: {
    path: __dist,
    filename: config.output,
    library: 'server',
    chunkFilename: `chunks/[id].${config.output}`
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': __src
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      { // transpile ECMAScript
        test: /\.(js|vue)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.styleLoaders(config.styles, (process.env.production === true))
        }
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'paths.json'
    })
  ]
}

// module.exports = env => {
//   if (env.production === true) {
//     utils.extend(config, {
//       mode: 'production',
//       watch: false,
//       style: {
//         filename: '[name].[contenthash:7].css',
//         minify: true
//       },
//       sourceMap: false
//     })
//   }
//   if (env.development === true) {
//     utils.extend(config, {
//       mode: 'development',
//       watch: true,
//       style: {
//         filename: '[name].css',
//         minify: false
//       },
//       sourceMap: true
//     })
//   }
//   const common = {
//     watch: config.watch,
//     target: 'node',
//     entry: config.entry,
//     output: {
//       path: path.resolve(__dirname, '..', config.output.path),
//       filename: config.output.filename,
//       library: 'server',
//       publicPath: '/dist/'
//     },
//     resolve: {
//       extensions: ['.js', '.vue'],
//       alias: {
//         '@': path.resolve(__dirname, '..', config.rootPath)
//       }
//     },
//     externals: [nodeExternals()],
//     devtool: config.sourceMap ? 'source-map' : false,
//     module: {
//       rules: [
//         { // compiles vue files
//           test: /\.vue$/,
//           loader: 'vue-loader',
//           options: {
//             loaders: utils.stylesLoader(
//               config.style.use,
//               config.style.minify,
//               config.sourceMap
//             )
//           }
//         },
//         { // transpile ECMAScript 5
//           test: /\.js$/,
//           use: ['babel-loader'],
//           exclude: /node_modules/
//         },
//         utils.eslintLoader(config.eslint)
//       ]
//     },
//     plugins: [
//       new ExtractTextPlugin({
//         filename: utils.trim(config.style.path, '/', 'r') + '/' + config.style.filename
//       }),
//       new ManifestPlugin()
//     ]
//   }
//   console.log(common.module.rules)
//   return common
// }
