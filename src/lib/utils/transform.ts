import { parseAttributes } from './parseAttributes'

export const transform = (
  html: string,
  attributes: Record<string, string>
): string =>
  html.replace(/<html(.*?)>/, (_, p1) => {
    const attr = Object.entries({
      ...parseAttributes(p1 ? p1 : ''),
      ...attributes
    })
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')

    const str = attr ? ` ${attr}` : ''

    return `<html${str}>`
  })
