import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: '@jill64/svelte-html' })
  ).toBeVisible()

  const lang2 = await page.locator('html').getAttribute('lang')
  expect(lang2).toBe('en')

  const prefix2 = await page.locator('html').getAttribute('prefix')
  expect(prefix2).toBe('og: http://ogp.me/ns#')

  await page.getByRole('textbox', { name: 'lang' }).fill('ja')

  const lang3 = await page.locator('html').getAttribute('lang')
  expect(lang3).toBe('ja')
})
