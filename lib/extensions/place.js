const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-place',

    level: 'block',

    start (src) {
      return src.match(/\$C\n(?!\s)/)?.index
    },

    tokenizer (src) {
      return blockTokenizer(this.lexer, src, 'govspeak-place', '$P')
    },

    renderer ({ tokens }) {
      const className = classGenerator('place', options)
      return `<div class="${className}">\n  ${this.parser.parse(tokens)}\n</div>`
    }
  }
}
