module.exports = {
  entry: './resources/main.server.js',
  output: {
    path: './dist/',
    filename: 'server.min.js'
  },
  rootPath: './resources/',
  eslint: true,
  style: {
    use: 'sass',
    path: 'css/',
    minify: true
  },
  sourceMap: true
}

// TODO: caching (hash)
