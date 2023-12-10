const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-contact',

    level: 'block',

    start (src) {
      return src.match(/\$C\n(?!\s)/)?.index
    },

    tokenizer (src) {
      return blockTokenizer(this.lexer, src, 'govspeak-contact', '$C')
    },

    renderer ({ tokens }) {
      const className = classGenerator('contact', options)
      return `<div class="${className}">\n  ${this.parser.parse(tokens)}\n</div>`
    }
  }
}
