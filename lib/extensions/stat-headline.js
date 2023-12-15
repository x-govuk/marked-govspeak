const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-stat-headline',

    level: 'block',

    start(src) {
      return src.match(/{stat(?!\s)/)?.index
    },

    tokenizer(src) {
      return blockTokenizer(
        this.lexer,
        src,
        'govspeak-stat-headline',
        '{stat-headline}',
        '{/stat-headline}'
      )
    },

    renderer({ tokens }) {
      const className = classGenerator('stat-headline', options)
      return `<div class="${className}">\n  ${this.parser.parse(
        tokens
      )}\n</div>`
    }
  }
}
