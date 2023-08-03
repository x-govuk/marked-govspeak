const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = {
  name: 'govspeak-information',
  level: 'block',
  start (src) {
    return src.match(/\$I\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-information', '$I')
  },
  renderer (token) {
    return `<div class="${classGenerator.bind(this)('information')}">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
