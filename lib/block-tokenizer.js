/**
 * Parse a Govspeak Markdown block
 *
 * @param {import('marked').Lexer} lexer - Marked lexer
 * @param {string} src - Source text to be parsed
 * @param {string} name - Extension name, i.e. `govspeak-example`
 * @param {string} open - Opening tag, i.e. $E
 * @param {string} [close] - Closing tag, i.e. $E
 * @returns {object|undefined} Tokens
 */
module.exports = function (lexer, src, name, open, close) {
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
    lexer.blockTokens(token.text, token.tokens)
    return token
  }
}
