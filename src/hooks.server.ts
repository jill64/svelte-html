import { apply } from '$lib'
import { hooks } from '@jill64/npm-demo-layout'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit(
  'https://71f93ebf020a1518b7c518aee46c7bed@o4505814639312896.ingest.sentry.io/4506168368627712'
)

export const handle = onHandle(
  sequence(hooks, ({ resolve, event }) =>
    resolve(event, {
      transformPageChunk: apply({
        lang: 'en',
        prefix: 'https://example.com'
      })
    })
  )
)

export const handleError = onError()
