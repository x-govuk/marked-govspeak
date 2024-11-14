const defaultClassNames = require('./class-names').default
const gemCompatibleClassNames = require('./class-names').compatible

/**
 * Get class name for given component
 *
 * @param {string} component - Component name, i.e. 'button'
 * @param {object} [options] - Extension options
 * @returns {string} Class name, i.e. 'govuk-button'
 */
module.exports = function (component, options = {}) {
  const classNames = options.govspeakGemCompatibility
    ? gemCompatibleClassNames
    : defaultClassNames

  return classNames[component] ?? ''
}
