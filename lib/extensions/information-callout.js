module.exports = {
  name: 'govspeak-information-callout',
  level: 'block',
  start (src) {
    return src.match(/\^(?!\s)/)?.index
  },
  tokenizer (src) {
    if (!src.startsWith('^')) {
      return
    }

    const nextIndex = src.indexOf('^', 2)
    if (nextIndex !== -1) {
      return {
        type: 'govspeak-information-callout',
        raw: src.slice(0, nextIndex + 2),
        text: this.lexer.inlineTokens(src.slice(1, nextIndex))
      }
    }
  },
  renderer (token) {
    return `<div class="govspeak-information-callout" role="note" aria-label="Information">
  <p>${this.parser.parseInline(token.text)}</p>
</div>`
  }
}
