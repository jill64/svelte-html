export { default as SvelteHTML } from './SvelteHtml.svelte'
import type { ResolveOptions } from '@sveltejs/kit'
import { transform } from './utils/transform'

export const apply =
  (attributes: Record<string, string>): ResolveOptions['transformPageChunk'] =>
  ({ html }) =>
    transform(html, attributes)
