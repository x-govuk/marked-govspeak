/**
 * Render Govspeak markup
 *
 * @param {object} [options] - Options for the extension
 * @returns {object} A MarkedExtension to be passed to `marked.use()`
 */
module.exports = function (options = {}) {
  return {
    extensions: [
      require('./lib/extensions/address')(options),
      require('./lib/extensions/button')(options),
      require('./lib/extensions/call-to-action')(options),
      require('./lib/extensions/contact')(options),
      require('./lib/extensions/form-download')(options),
      require('./lib/extensions/example')(options),
      require('./lib/extensions/information')(options),
      require('./lib/extensions/information-callout')(options),
      require('./lib/extensions/place')(options),
      require('./lib/extensions/stat-headline')(options),
      require('./lib/extensions/steps').steps(options),
      require('./lib/extensions/steps').step(options),
      require('./lib/extensions/warning-callout')(options)
    ]
  }
}
