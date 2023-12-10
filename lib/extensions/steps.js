const classGenerator = require('../class-generator.js')

module.exports.steps = function (options) {
  return {
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

    renderer ({ tokens }) {
      const className = classGenerator('steps', options)
      return `<ol class="${className}">${this.parser.parseInline(tokens)}\n</ol>`
    }
  }
}

module.exports.step = function (_options) {
  return {
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

    renderer ({ li }) {
      return `\n  <li>${this.parser.parseInline(li)}</li>`
    },

    childTokens: ['li']
  }
}
