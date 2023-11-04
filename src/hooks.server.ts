import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { transform } from '$lib'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(PUBLIC_SENTRY_DSN)

export const handle = onHandle(({ resolve, event }) =>
  resolve(event, {
    transformPageChunk: transform({
      lang: 'zh',
      prefix: 'https://example.com'
    })
  })
)

export const handleError = onError()
