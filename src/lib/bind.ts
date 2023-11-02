import type { Handle } from '@sveltejs/kit'
import { transform } from './utils/transform'

/**
 * @deprecated
 * Use `transform`
 * ```js
 * // hooks.server.js
 * import { bind } from '@jill64/svelte-html'
 *
 * export const handle = (({ event, resolve }) =>
 *  resolve(event, {
 *    transformPageChunk: ({ html }) => transform(html, {
 *      // ...attributes
 *    })
 *  }))
 * ```
 */
export const bind = (attributes: Record<string, string>) =>
  (({ event, resolve }) =>
    resolve(event, {
      transformPageChunk: ({ html }) => transform(html, attributes)
    })) satisfies Handle
