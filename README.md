<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-html


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/@jill64/svelte-html"><img src="https://img.shields.io/npm/v/@jill64/svelte-html" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-html"><img src="https://img.shields.io/npm/l/@jill64/svelte-html" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-html"><img src="https://img.shields.io/npm/dm/@jill64/svelte-html" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-html"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-html" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-html/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-html/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-html.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-html.jill64.dev" alt="website" /></a>
<!----- END GHOST DOCS BADGES ----->


🏷️ Declarative attribute binding for the root html element

## [Demo](https://svelte-html.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/svelte-html
```

## Usage

By passing a key-value set to the `<SvelteHTML />` component, attributes are bind to the root html element.

```svelte
<script>
  import { SvelteHTML } from '@jill64/svelte-html'
</script>

<SvelteHTML lang="en" prefix="example" />
```

↓

```html
<html lang="en" prefix="example">
  <!-- ... -->
</html>
```

## SSR

Attribute binding with `<SvelteHTML>` is only applied on the client.
To assign arbitrary attributes during SSR, use the `apply` function in the `handle` hook.

```js
// hooks.server.js
import { apply } from '@jill64/svelte-html'

export const handle = async ({ event, resolve }) => {
  // ...
  return resolve(event, {
    transformPageChunk: apply({
      lang: 'en',
      prefix: 'example'
    })
  })
}
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
