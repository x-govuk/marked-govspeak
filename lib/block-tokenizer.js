/**
 * Parse a Govspeak Markdown block
 *
 * @param {string} src Source text to be parsed
 * @param {*} name Extension name, i.e. `govspeak-example`
 * @param {*} open Opening tag, i.e. $E
 * @param {*} [close] Closing tag, i.e. $E
 * @returns {object} Tokens
 */
module.exports = function (src, name, open, close) {
  if (!src.startsWith(`${open}\n`)) {
    return
  }

  close = close || open
  const closeLength = close.length

  const nextIndex = src.indexOf(close, 2)
  if (nextIndex !== -1) {
    const token = {
      type: name,
      raw: src.slice(0, nextIndex + closeLength),
      text: src.slice(closeLength, nextIndex).trim(),
      tokens: []
    }
    this.lexer.blockTokens(token.text, token.tokens)
    return token
  }
}
