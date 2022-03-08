# Govspeak Markdown · [![test](https://github.com/x-govuk/marked-govspeak/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/marked-govspeak/actions/workflows/test.yml)

[Govspeak](https://github.com/alphagov/govspeak) Markdown extensions for [Marked](https://github.com/markedjs/marked).

## WIP

- [ ] Steps extension
- [ ] Tests

## Requirements

Node.js v16 or later.

## Installation

`npm install marked-govspeak --save`

## Usage

Import `govspeak` and and add these extensions to marked with `marked.use()`:

```js
import { marked } from 'marked'
import govspeak from 'marked-govspeak'

marked.use(govspeak)
```

When you call `marked`, the generated HTML will include the classes to style the Govspeak Markdown extensions. For example:

```js
marked('%This is a warning callout%')
```

Will output:

```html
<div class="govspeak-warning-callout" role="note" aria-label="Warning">
  <p>This is a warning callout</p>
</div>
```

To enable the styling you will need to add the following to your Sass file:

```scss
@import "marked-govspeak/govspeak/all";
```
