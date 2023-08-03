const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = {
  name: 'govspeak-address',
  level: 'block',
  start (src) {
    return src.match(/\$A\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-address', '$A')
  },
  renderer (token) {
    return `<address class="${classGenerator.bind(this)('address')}">
  ${this.parser.parse(token.tokens)}
</address>`
  }
}
