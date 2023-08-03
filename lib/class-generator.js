const defaultClassNames = require('./class-names').default
const gemCompatibleClassNames = require('./class-names').compatible

module.exports = function (component) {
  const classNames = this.parser.options.govspeakGemCompatibility ? gemCompatibleClassNames : defaultClassNames

  return classNames[component] ?? ''
}
