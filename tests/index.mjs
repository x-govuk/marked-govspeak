import test from 'ava'
import { marked } from 'marked'
import govspeak from '../index.js'

marked.use({extensions: govspeak})

test('Renders address', t => {
  const result = marked('$A\nLine 1  \nLine 2\n$A')
  t.is(result, `<address class="govspeak-address h-adr">
  <p>Line 1<br>Line 2</p>

</address>`)
})

test.todo('Renders button')

test.todo('Renders start button')

test('Renders contact', t => {
  const result = marked('$C\nPhone  \nEmail\n$C')
  t.is(result, `<div class="govspeak-contact">
  <p>Phone<br>Email</p>

</div>`)
})

test('Renders call to action', t => {
  const result = marked('$CTA\nCall to action\n$CTA')
  t.is(result, `<div class="govspeak-call-to-action">
  <p>Call to action</p>

</div>`)
})

test('Renders example', t => {
  const result =  marked('$E\nExample\n$E')
  t.is(result, `<div class="govspeak-example">
  <p>Example</p>

</div>`)
})

test.todo('Renders form download')

test('Renders information callout', t => {
  const result = marked('^information^')
  t.is(result, `<div class="govspeak-information-callout" role="note" aria-label="Information">
  <p>information</p>
</div>`)
})

test('Renders information', t => {
  const result = marked('$I\ninformation\n$I')
  t.is(result, `<div class="govspeak-information">
  <p>information</p>

</div>`)
})

test.todo('Renders stat headline')

test('Renders warning callout', t => {
  const result = marked('%warning%')
  t.is(result, `<div class="govspeak-warning-callout" role="note" aria-label="Warning">
  <p>warning</p>
</div>`)
})
