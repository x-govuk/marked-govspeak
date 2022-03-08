const blockTokenizer = require('../block-tokenizer')

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
    return `<address class="govspeak-address h-adr">
  ${this.parser.parse(token.tokens)}
</address>`
  }
}
