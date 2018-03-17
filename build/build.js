const prod = require('./env/build.prod')
const dev = require('./env/build.dev')

exports.config = {
  entry: './resources/main.js',
  output: {
    path: './dist/',
    filename: 'server.js'
  },
  rootPath: './resources/',
  eslint: true,
  style: {
    use: ['sass'],
    path: 'css/'
  }
}

exports.set = env => {
  env ? prod(exports.config)
    : dev(exports.config)
}
