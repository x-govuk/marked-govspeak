const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = {
  name: 'govspeak-call-to-action',
  level: 'block',
  start (src) {
    return src.match(/\$CTA(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-call-to-action', '$CTA')
  },
  renderer (token) {
    return `<div class="${classGenerator.bind(this)('call-to-action')}">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
