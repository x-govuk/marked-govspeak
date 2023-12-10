const classGenerator = require('../class-generator.js')

module.exports = function (options) {
  return {
    name: 'govspeak-button',

    level: 'inline',

    start (src) {
      return src.match(/{button(?!\s)/)?.index
    },

    tokenizer (src) {
      if (!src.startsWith('{button')) {
        return
      }

      let isStartButton = false
      let openLength = 8
      const closeLength = 9

      if (src.startsWith('{button start}')) {
        isStartButton = true
        openLength = 14
      }

      const nextIndex = src.indexOf('{/button}', 2)
      if (nextIndex !== -1) {
        const token = {
          type: 'govspeak-button',
          raw: src.slice(0, nextIndex + closeLength),
          text: src.slice(openLength, nextIndex).trim(),
          isStartButton,
          tokens: []
        }
        this.lexer.inlineTokens(token.text, token.tokens)
        return token
      }
    },

    renderer ({ isStartButton, tokens }) {
      if (isStartButton) {
        const className = classGenerator('button--start', options)
        return `<a class="${className}" href="${tokens[0].href}" role="button">${tokens[0].text}<svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/></svg></a>`
      }

      const className = classGenerator('button', options)
      return `<a class="${className}" href="${tokens[0].href}" role="button">${tokens[0].text}</a>`
    }
  }
}
