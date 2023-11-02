import type { ResolveOptions } from '@sveltejs/kit'
import { transform as fn } from './utils/transform'

export const transform =
  (attributes: Record<string, string>): ResolveOptions['transformPageChunk'] =>
  ({ html }) =>
    fn(html, attributes)
