export const svelteCode = (
  attributes: {
    key: string
    value: string
  }[]
) => /*html*/ `<script>
  import { SvelteHTML } from '@jill64/svelte-html'
</script>

<SvelteHTML ${attributes
  .filter(({ key }) => key)
  .map(({ key, value }) => `${key}="${value}"`)
  .join(' ')} />`
