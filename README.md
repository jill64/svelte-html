<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-html

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-html)](https://npmjs.com/package/@jill64/svelte-html) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-html)](https://npmjs.com/package/@jill64/svelte-html) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-html)](https://npmjs.com/package/@jill64/svelte-html) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-html)](https://npmjs.com/package/@jill64/svelte-html) [![ci.yml](https://github.com/jill64/svelte-html/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-html/actions/workflows/ci.yml)

🏷️ Declarative attribute binding for the root html element

## Install

```sh
npm i @jill64/svelte-html
```

<!----- END GHOST DOCS HEADER ----->

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
To assign arbitrary attributes during SSR, use the `transform` function in the `handle` hook.

```js
// hooks.server.js
import { transform } from '@jill64/svelte-html'

export const handle = async ({ event, resolve }) => {
  // ...
  return resolve(event, {
    transformPageChunk: transform({
      lang: 'en',
      prefix: 'example'
    })
  })
}
```
