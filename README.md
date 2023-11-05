<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-html

[![ci.yml](https://github.com/jill64/svelte-html/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-html/actions/workflows/ci.yml) [![codecov-coverage](https://codecov.io/gh/jill64/svelte-html/graph/badge.svg)](https://codecov.io/gh/jill64/svelte-html) [![github-pages](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fjill64.github.io%2Fsvelte-html%2F)](https://jill64.github.io/svelte-html/)

🏷️ Declarative attribute binding for the root html element

## [Demo](https://jill64.github.io/svelte-html/)

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
