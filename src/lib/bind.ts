import type { Handle } from '@sveltejs/kit'
import { transform } from './utils/transform'

export const bind = (attributes: Record<string, string>) =>
  (({ event, resolve }) =>
    resolve(event, {
      transformPageChunk: ({ html }) => transform(html, attributes)
    })) satisfies Handle
