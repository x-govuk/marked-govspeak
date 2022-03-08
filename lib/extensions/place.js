const blockTokenizer = require('../block-tokenizer')

module.exports = {
  name: 'govspeak-place',
  level: 'block',
  start (src) {
    return src.match(/\$C\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-place', '$P')
  },
  renderer (token) {
    return `<div class="govspeak-place">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
