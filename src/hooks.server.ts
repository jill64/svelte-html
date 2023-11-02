import { transform } from '$lib'

export const handle = ({ resolve, event }) =>
  resolve(event, {
    transformPageChunk: transform({
      lang: 'zh',
      prefix: 'https://example.com'
    })
  })
