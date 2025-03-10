import { expect, test } from 'bun:test'
import { transform } from './transform'

test('transform', () => {
  expect(transform('<html>', {})).toBe('<html>')

  expect(transform('<html>', { lang: 'en' })).toBe('<html lang="en">')

  expect(transform('<a>', { lang: 'en' })).toBe('<a>')

  expect(transform('<html lang="test">', { lang: 'en' })).toBe(
    '<html lang="en">'
  )

  expect(transform('<html>', { prefix: 'og: http://ogp.me/ns#' })).toBe(
    '<html prefix="og: http://ogp.me/ns#">'
  )

  expect(
    transform("<html lang='test'>", {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    })
  ).toBe('<html lang="en" prefix="og: http://ogp.me/ns#">')

  expect(
    transform('<html>', { lang: 'en', prefix: 'og: http://ogp.me/ns#' })
  ).toBe('<html lang="en" prefix="og: http://ogp.me/ns#">')
})
