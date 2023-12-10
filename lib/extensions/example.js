const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-example',

    level: 'block',

    start (src) {
      return src.match(/\$E\n(?!\s)/)?.index
    },

    tokenizer (src) {
      return blockTokenizer(this.lexer, src, 'govspeak-example', '$E')
    },

    renderer ({ tokens }) {
      const className = classGenerator('example', options)
      return `<div class="${className}">\n  ${this.parser.parse(tokens)}\n</div>`
    }
  }
}
