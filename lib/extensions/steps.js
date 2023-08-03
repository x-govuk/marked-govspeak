const classGenerator = require('../class-generator.js')

module.exports.steps = {
  name: 'govspeak-steps',
  level: 'block',
  start (src) {
    return src.match(/\s*(?:s\d+\.\s.*(?:\n|$))+/)?.index
  },
  tokenizer (src) {
    const rule = /^\s*(?:s\d+\.\s.*(?:\n|$))+/
    const match = rule.exec(src)
    if (match) {
      const token = {
        type: 'govspeak-steps',
        raw: match[0],
        text: match[0].trim(),
        tokens: []
      }
      this.lexer.inline(token.text, token.tokens)

      return token
    }
  },
  renderer (token) {
    return `<ol class="${classGenerator.bind(this)('steps')}">${this.parser.parseInline(token.tokens)}\n</ol>`
  }
}

module.exports.step = {
  name: 'govspeak-step',
  level: 'inline',
  start (src) {
    return src.match(/s(\d+)\./)?.index
  },
  tokenizer (src) {
    const rule = /s(\d+)\.\s(.*)(?:\n|$)/
    const match = rule.exec(src)

    if (match) {
      const token = {
        type: 'govspeak-step',
        raw: match[0],
        li: this.lexer.inlineTokens(match[2].trim())
      }

      return token
    }
  },
  renderer (token) {
    return `\n  <li>${this.parser.parseInline(token.li)}</li>`
  },
  childTokens: ['li']
}
