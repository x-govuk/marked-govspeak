const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-information',

    level: 'block',

    start (src) {
      return src.match(/\$I\n(?!\s)/)?.index
    },

    tokenizer (src) {
      return blockTokenizer(this.lexer, src, 'govspeak-information', '$I')
    },

    renderer ({ tokens }) {
      const className = classGenerator('information', options)
      return `<div class="${className}">\n  ${this.parser.parse(tokens)}\n</div>`
    }
  }
}
