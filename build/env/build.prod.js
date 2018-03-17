const utils = require('../utils')

module.exports = config => {
  return utils.extend(config, {
    watch: false,
    style: {
      filename: '[name].[contenthash:7].css',
      minify: true
    },
    sourceMap: false
  })
}
