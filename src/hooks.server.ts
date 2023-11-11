import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { apply } from '$lib'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { onRender } from '@jill64/svelte-dark-theme'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit(PUBLIC_SENTRY_DSN)

export const handle = onHandle(
  sequence(onRender(), ({ resolve, event }) =>
    resolve(event, {
      transformPageChunk: apply({
        lang: 'en',
        prefix: 'https://example.com'
      })
    })
  )
)

export const handleError = onError()
