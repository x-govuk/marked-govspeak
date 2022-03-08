const blockTokenizer = require('../block-tokenizer')

module.exports = {
  name: 'govspeak-stat-headline',
  level: 'block',
  start (src) {
    return src.match(/{stat(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-stat-headline', '{stat-headline}', '{/stat-headline}')
  },
  renderer (token) {
    return `<div class="govspeak-stat-headline">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
