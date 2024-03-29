const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-information-callout',

    level: 'block',

    start(src) {
      return src.match(/\^(?!\s)/)?.index
    },

    tokenizer(src) {
      if (!src.startsWith('^')) {
        return
      }

      const nextIndex = src.indexOf('^', 2)
      if (nextIndex !== -1) {
        return {
          type: 'govspeak-information-callout',
          raw: src.slice(0, nextIndex + 2),
          text: this.lexer.inlineTokens(src.slice(1, nextIndex))
        }
      }
    },

    renderer({ text }) {
      const className = classGenerator('information-callout', options)
      return `<div class="${className}" role="note" aria-label="Information">\n  <p>${this.parser.parseInline(
        text
      )}</p>\n</div>`
    }
  }
}
