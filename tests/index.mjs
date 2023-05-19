import test from 'ava'
import { marked } from 'marked'
import govspeak from '../index.js'

marked.use({extensions: govspeak})

test.only('Renders address', t => {
  const result = marked('$A\nLine 1  \nLine 2\n$A')
  t.is(result, `<address class="govspeak-address h-adr">
  <p>Line 1<br>Line 2</p>

</address>`)
})
test.todo('Renders button')
test.todo('Renders start button')
test.todo('Renders contact')
test.todo('Renders example')
test.todo('Renders form download')
test.todo('Renders information callback')
test.todo('Renders information')
test.todo('Renders stat headline')
test.todo('Renders warning callback')
