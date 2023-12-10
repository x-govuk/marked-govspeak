const defaultClassNames = require('./class-names').default
const gemCompatibleClassNames = require('./class-names').compatible

/**
 * Get class name for given component
 * @param {string} component - Component name, i.e. 'button'
 * @returns {string} Class name, i.e. 'govuk-button'
 */
module.exports = function (component) {
  const classNames = this.parser.options.govspeakGemCompatibility
    ? gemCompatibleClassNames
    : defaultClassNames

  return classNames[component] ?? ''
}
