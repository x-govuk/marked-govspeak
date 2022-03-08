module.exports = {
  name: 'govspeak-warning-callout',
  level: 'inline',
  start (src) {
    return src.match(/%(?!\s)/)?.index
  },
  tokenizer (src) {
    if (!src.startsWith('%')) {
      return
    }

    const nextIndex = src.indexOf('%', 2)
    if (nextIndex !== -1) {
      return {
        type: 'govspeak-warning-callout',
        raw: src.slice(0, nextIndex + 2),
        text: this.lexer.inlineTokens(src.slice(1, nextIndex))
      }
    }
  },
  renderer (token) {
    return `<div class="govspeak-warning-callout" role="note" aria-label="Warning">
      <p>${this.parser.parseInline(token.text)}</p>
    </div>`
  }
}
