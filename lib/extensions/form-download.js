const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-form-download',

    level: 'block',

    start(src) {
      return src.match(/\$D\n(?!\s)/)?.index
    },

    tokenizer(src) {
      return blockTokenizer(this.lexer, src, 'govspeak-form-download', '$D')
    },

    renderer({ tokens }) {
      const className = classGenerator('form-download', options)
      return `<div class="${className}">\n  ${this.parser.parse(
        tokens
      )}\n</div>`
    }
  }
}
