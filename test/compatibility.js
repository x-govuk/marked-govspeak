const assert = require('assert/strict')
const { describe, it } = require('node:test')
const { marked } = require('marked')
const govspeak = require('../index.js')

describe('Govspeak with RubyGem compatibility', () => {
  marked.use(
    govspeak({
      govspeakGemCompatibility: true
    })
  )

  it('Renders address', () => {
    assert.equal(
      marked('$A\nLine 1  \nLine 2\n$A'),
      '<address class="address">\n  <p>Line 1<br>Line 2</p>\n\n</address>'
    )
  })

  it('Renders button', () => {
    assert.equal(
      marked('{button}[Click me](https://gov.uk){/button}'),
      '<p><a class="gem-c-button govuk-button" href="https://gov.uk" role="button">Click me</a></p>\n'
    )
  })

  it('Renders start button', () => {
    assert.equal(
      marked('{button start}[Click me](https://gov.uk){/button}'),
      '<p><a class="gem-c-button govuk-button govuk-button--start" href="https://gov.uk" role="button">Click me<svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/></svg></a></p>\n'
    )
  })

  it('Renders call to action', () => {
    assert.equal(
      marked('$CTA\nCall to action\n$CTA'),
      '<div class="call-to-action">\n  <p>Call to action</p>\n\n</div>'
    )
  })

  it('Renders contact', () => {
    assert.equal(
      marked('$C\nPhone  \nEmail\n$C'),
      '<div class="contact">\n  <p>Phone<br>Email</p>\n\n</div>'
    )
  })

  it('Renders form download', () => {
    assert.equal(
      marked('$D\n[Download (PDF, 14KB)](https://example.com/file.pdf)\n$D'),
      '<div class="form-download">\n  <p><a href="https://example.com/file.pdf">Download (PDF, 14KB)</a></p>\n\n</div>'
    )
  })

  it('Renders example', () => {
    assert.equal(
      marked('$E\nExample\n$E'),
      '<div class="example">\n  <p>Example</p>\n\n</div>'
    )
  })

  it('Renders information callout', () => {
    assert.equal(
      marked('^information^'),
      '<div class="application-notice info-notice" role="note" aria-label="Information">\n  <p>information</p>\n</div>'
    )
  })

  it('Renders information', () => {
    assert.equal(
      marked('$I\ninformation\n$I'),
      '<div class="information">\n  <p>information</p>\n\n</div>'
    )
  })

  it('Renders place', () => {
    assert.equal(
      marked('$P\nThis is a place\n$P'),
      '<div class="place">\n  <p>This is a place</p>\n\n</div>'
    )
  })

  it('Renders stat headline', () => {
    assert.equal(
      marked(
        '{stat-headline}\n*13.8bn* years since the big bang{/stat-headline}'
      ),
      '<div class="stat-headline">\n  <p><em>13.8bn</em> years since the big bang</p>\n\n</div>'
    )
  })

  it('Renders steps', () => {
    assert.equal(
      marked('s1. Add numbers.\ns2. Check numbers.\ns3. Love numbers.'),
      '<ol class="steps">\n  <li>Add numbers.</li>\n  <li>Check numbers.</li>\n  <li>Love numbers.</li>\n</ol>'
    )
  })

  it('Renders warning callout', () => {
    assert.equal(
      marked('%warning%'),
      '<div class="application-notice help-notice" role="note" aria-label="Warning">\n  <p>warning</p>\n</div>'
    )
  })
})
