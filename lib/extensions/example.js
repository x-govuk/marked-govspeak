const blockTokenizer = require('../block-tokenizer')
const classGenerator = require('../class-generator.js')

module.exports = {
  name: 'govspeak-example',
  level: 'block',
  start (src) {
    return src.match(/\$E\n(?!\s)/)?.index
  },
  tokenizer: function (src) {
    return blockTokenizer.bind(this)(src, 'govspeak-example', '$E')
  },
  renderer (token) {
    return `<div class="${classGenerator.bind(this)('example')}">
  ${this.parser.parse(token.tokens)}
</div>`
  }
}
