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

exports.extend = (obj1, obj2) => {
  let keys = Object.keys(obj2)
  keys.forEach(key => {
    let value = obj2[key]
    obj1[key] = !(typeof value === 'object') ? value
      : exports.extend(obj1[key] || {}, value)
  })
  return obj1
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

exports.stylesLoader = function (types, minify = true, source = true) {
  let context = {
    loader: 'css-loader',
    options: { minimize: minify },
    sourceMap: source
  }
  let loaders = { css: exports.stylesExtract([context]) }
  if (typeof types === 'string') types = [types]
  if (Array.isArray(types)) {
    types.forEach((type) => {
      let loader = [context].concat({
        loader: type + '-loader',
        sourceMap: source
      })
      loaders[type] = exports.stylesExtract(loader)
    })
  }
  return loaders
}
