const blockTokenizer = require('../block-tokenizer')

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
    return `<div class="govspeak-example">
      ${this.parser.parse(token.tokens)}
    </div>`
  }
}
