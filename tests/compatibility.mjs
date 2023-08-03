import test from 'ava'
import { marked } from 'marked'
import govspeak from '../index.js'

marked.setOptions({ govspeakGemCompatibility: true })
marked.use({ extensions: govspeak })

test('Renders address', t => {
  const result = marked('$A\nLine 1  \nLine 2\n$A')
  t.is(result, `<address class="address">
  <p>Line 1<br>Line 2</p>

</address>`)
})

test('Renders button', t => {
  const result = marked('{button}[Click me](https://gov.uk){/button}')
  t.is(result, '<p><a class="gem-c-button govuk-button" href="https://gov.uk" role="button">Click me</a></p>\n')
})

test('Renders start button', t => {
  const result = marked('{button start}[Click me](https://gov.uk){/button}')
  t.is(result, '<p><a class="gem-c-button govuk-button govuk-button--start" href="https://gov.uk" role="button">Click me<svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false"><path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/></svg></a></p>\n')
})

test('Renders call to action', t => {
  const result = marked('$CTA\nCall to action\n$CTA')
  t.is(result, `<div class="call-to-action">
  <p>Call to action</p>

</div>`)
})

test('Renders contact', t => {
  const result = marked('$C\nPhone  \nEmail\n$C')
  t.is(result, `<div class="contact">
  <p>Phone<br>Email</p>

</div>`)
})

test('Renders form download', t => {
  const result = marked('$D\n[Download (PDF, 14KB)](https://example.com/file.pdf)\n$D')
  t.is(result, `<div class="form-download">
  <p><a href="https://example.com/file.pdf">Download (PDF, 14KB)</a></p>

</div>`)
})

test('Renders example', t => {
  const result = marked('$E\nExample\n$E')
  t.is(result, `<div class="example">
  <p>Example</p>

</div>`)
})

test('Renders information callout', t => {
  const result = marked('^information^')
  t.is(result, `<div class="application-notice info-notice" role="note" aria-label="Information">
  <p>information</p>
</div>`)
})

test('Renders information', t => {
  const result = marked('$I\ninformation\n$I')
  t.is(result, `<div class="information">
  <p>information</p>

</div>`)
})

test('Renders place', t => {
  const result = marked('$P\nThis is a place\n$P')
  t.is(result, `<div class="place">
  <p>This is a place</p>

</div>`)
})

test('Renders stat headline', t => {
  const result = marked('{stat-headline}\n*13.8bn* years since the big bang{/stat-headline}')
  t.is(result, `<div class="stat-headline">
  <p><em>13.8bn</em> years since the big bang</p>

</div>`)
})

test('Renders steps', t => {
  const result = marked('s1. Add numbers.\ns2. Check numbers.\ns3. Love numbers.')
  t.is(result, `<ol class="steps">
  <li>Add numbers.</li>
  <li>Check numbers.</li>
  <li>Love numbers.</li>
</ol>`)
})

test('Renders warning callout', t => {
  const result = marked('%warning%')
  t.is(result, `<div class="application-notice help-notice" role="note" aria-label="Warning">
  <p>warning</p>
</div>`)
})
