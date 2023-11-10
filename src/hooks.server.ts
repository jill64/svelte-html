import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { apply } from '$lib'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(PUBLIC_SENTRY_DSN)

export const handle = onHandle(({ resolve, event }) =>
  resolve(event, {
    transformPageChunk: apply({
      lang: 'en',
      prefix: 'https://example.com'
    })
  })
)

export const handleError = onError()
