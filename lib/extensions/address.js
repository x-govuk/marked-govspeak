const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-address',

    level: 'block',

    start (src) {
      return src.match(/\$A\n(?!\s)/)?.index
    },

    tokenizer (src) {
      return blockTokenizer(this.lexer, src, 'govspeak-address', '$A')
    },

    renderer ({ tokens }) {
      const className = classGenerator('address', options)
      return `<address class="${className}">\n  ${this.parser.parse(tokens)}\n</address>`
    }
  }
}
