const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-call-to-action',

    level: 'block',

    start(src) {
      return src.match(/\$CTA(?!\s)/)?.index
    },

    tokenizer(src) {
      return blockTokenizer(this.lexer, src, 'govspeak-call-to-action', '$CTA')
    },

    renderer({ tokens }) {
      const className = classGenerator('call-to-action', options)
      return `<div class="${className}">\n  ${this.parser.parse(
        tokens
      )}\n</div>`
    }
  }
}
