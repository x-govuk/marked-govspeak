const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

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
    return `<div class="${classGenerator.bind(this)('stat-headline')}">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
