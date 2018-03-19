const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.trim = (string, character, direction = '') => {
  let all = character + '+'
  let left = '^' + all
  let right = all + '$'
  let trim = left + '|' + right
  const bool = r => !!direction.match(r)
  const dir = (b, d) => { if (bool(b)) trim = d }
  dir(/^(left|l|\^)$/, left); dir(/^(right|r|\$)$/, right)
  dir(!!direction, left + '|' + right)
  let regex = new RegExp(trim, 'g')
  return string.replace(regex, '')
}

exports.eslintLoader = function (action) {
  if (action) {
    return {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }
  }
  return {}
}

exports.stylesExtract = function (loaders) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
}

exports.styleLoaders = function (types, production = false) {
  let css = {
    loader: 'css-loader',
    options: { minimize: !production },
    sourceMap: production
  }
  let loaders = { css: exports.stylesExtract([css]) }
  if (typeof types === 'string') types = [types]
  if (Array.isArray(types)) {
    types.forEach((type) => {
      let loader = [css].concat({
        loader: type + '-loader',
        sourceMap: production
      })
      loaders[type] = exports.stylesExtract(loader)
    })
  }
  return loaders
}
