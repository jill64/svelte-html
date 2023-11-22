import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = clientInit(
  'https://71f93ebf020a1518b7c518aee46c7bed@o4505814639312896.ingest.sentry.io/4506168368627712'
)

export const handleError = onError()
