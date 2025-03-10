import { expect, test } from 'bun:test'
import { parseAttributes } from './parseAttributes'

test('parseAttributes', () => {
  expect(parseAttributes('<html>')).toEqual({})
  expect(parseAttributes('<html lang="en">')).toEqual({ lang: 'en' })
  expect(
    parseAttributes(`<html lang="ja" prefix='og: http://ogp.me/ns#'>`)
  ).toEqual({
    lang: 'ja',
    prefix: 'og: http://ogp.me/ns#'
  })
})
