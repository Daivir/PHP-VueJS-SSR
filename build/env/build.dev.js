const utils = require('../utils')

module.exports = config => {
  return utils.extend(config, {
    watch: true,
    style: {
      filename: '[name].css',
      minify: false
    },
    sourceMap: true
  })
}
