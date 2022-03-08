const blockTokenizer = require('../block-tokenizer')

module.exports = {
  name: 'govspeak-contact',
  level: 'block',
  start (src) {
    return src.match(/\$C\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-contact', '$C')
  },
  renderer (token) {
    return `<div class="govspeak-contact">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
