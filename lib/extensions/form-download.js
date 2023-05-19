const blockTokenizer = require('../block-tokenizer')

module.exports = {
  name: 'govspeak-form-download',
  level: 'block',
  start (src) {
    return src.match(/\$D\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-form-download', '$D')
  },
  renderer (token) {
    return `<div class="govspeak-form-download">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
