# Govspeak Markdown · [![test](https://github.com/x-govuk/marked-govspeak/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/marked-govspeak/actions/workflows/test.yml)

[Govspeak](https://github.com/alphagov/govspeak) Markdown extensions for [Marked](https://github.com/markedjs/marked).

## Requirements

Node.js v16 or later.

## Installation

```shell
npm install @x-govuk/marked-govspeak
```

## Usage

Import `govspeak` and and add these extensions to marked with `marked.use()`:

```js
import { marked } from 'marked'
import govspeak from '@x-govuk/marked-govspeak'

marked.use({ extensions: govspeak })
```

When you call `marked`, the generated HTML will include the classes to style the Govspeak Markdown extensions. For example:

```js
marked('%This is a warning callout%')
```

will output:

```html
<div class="govspeak-warning-callout" role="note" aria-label="Warning">
  <p>This is a warning callout</p>
</div>
```

To enable the styling you will need to add the following to your Sass file:

```scss
@import "node_modules/@x-govuk/marked-govspeak/govspeak/all";
```

## Differences from the Govspeak Ruby gem

Unlike [the Govspeak gem](https://github.com/alphagov/govspeak), this package is not used to publish any part of GOV.UK. For that reason, it doesn’t support the following extensions:

* bar charts
* cross domain tracking on buttons
* embedded content and attachment links
* tables that use Kramdown syntax

This package also provides its own set of CSS styles, based on [those used by GOV.UK Publishing Components](https://github.com/alphagov/govuk_publishing_components/tree/main/app/assets/stylesheets/govuk_publishing_components/components/govspeak).

The class names used also differ, each prefixed with `govspeak-`. Therefore a `govspeak` or `gem-c-govspeak` class is not needed on any parent container.

## Supported extensions

### Address

```md
$A
HM Revenue and Customs
Bradford
BD98 1YY
$A
```

```html
<div class="govspeak-address">
  <div class="adr org fn">
    <p>
      HM Revenue and Customs<br>
      Bradford<br>
      BD98 1YY
    </p>
  </div>
</div>
```

### Buttons

An accessible way to add button links into content.

#### Default button

```md
{button}[Continue](https://gov.uk/random){/button}
```

```html
<a class="govuk-button" href="https://gov.uk/random" role="button">
  Continue
</a>
```

#### Start button

To turn a button into a [‘Start now’ button](https://design-system.service.gov.uk/components/button/#start-buttons), you can pass `start` to the button tag:

```md
{button start}[Start Now](https://gov.uk/random){/button}
```

```html
<a class="govuk-button govuk-button--start" href="https://gov.uk/random" role="button">
  Start Now
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" role="presentation" focusable="false"><path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path></svg>
</a>
```

### Callouts

#### Information callout

```md
^This is useful information that’s worth knowing.^
```

```html
<div class="govspeak-information-callout" role="note" aria-label="Information">
  <p>This is useful information that’s worth knowing.</p>
</div>
```

#### Warning callout

```md
%You will be fined or put in prison if you don’t do this thing.%
```

```html
<div class="govspeak-warning-callout" role="note" aria-label="Warning">
  <p>You will be fined or put in prison if you don’t do this thing.</p>
</div>
```

#### Example callout

```md
$E
Open the pod bay doors.
$E
```

```html
<div class="govspeak-example">
  <p>Open the pod bay doors.</p>
</div>
```

### Call to action

```md
$CTA
This is a call to action
$CTA
```

```html
<div class="govspeak-call-to-action">
  <p>This is a call to action</p>
</div>
```

### Contact

```md
$C
Financial Conduct Authority
<consumer.queries@fca.org.uk>
Telephone: 0800 111 6768
Monday to Friday, 8am to 6pm
Saturday, 9am to 1pm
[Find out about call charges](/call-charges)
$C
```

```html
<div class="govspeak-contact">
  <p>Financial Conduct Authority<br>
    <a href="mailto:consumer.queries@fca.org.uk">consumer.queries@fca.org.uk</a><br>
    Telephone: 0800 111 6768<br>
    Monday to Friday, 8am to 6pm<br>
    Saturday, 9am to 1pm<br>
    <a href="/call-charges">Find out about call charges</a>
  </p>
</div>
```

### Download link

```md
$D
[Download ‘Jobcentre Plus form for employment’ (PDF, 43KB)](/example.pdf)
$D
```

```html
<div class="govspeak-form-download">
  <p><a href="/example.pdf">Download ‘Jobcentre Plus form for employment’ (PDF, 43KB)</a></p>
</div>
```

### Place

```md
$P
This is a place.
$P
```

```html
<div class="govspeak-place">
  <p>This is a place.</p>
</div>
```

### Information

```md
$I
This is information.
$I
```

```html
<div class="govspeak-information">
  <p>This is information.</p>
</div>
```

### Statistic headline

```md
{stat-headline}
*13.8bn* years since the big bang
{/stat-headline}
```

```html
<div class="govspeak-stat-headline">
  <p><em>13.8bn</em> years since the big bang</p>
</div>
```

### Steps

```md
s1. Add numbers.
s2. Check numbers.
s3. Love numbers.
```

```html
<ol class="govuk-steps">
  <li>Add numbers.</li>
  <li>Check numbers.</li>
  <li>Love numbers.</li>
</ol>
```
