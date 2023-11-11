export const htmlCode = (
  attributes: {
    key: string
    value: string
  }[]
) => /*html*/ `<!DOCTYPE html>

<html ${attributes
  .filter(({ key }) => key)
  .map(({ key, value }) => `${key}="${value}"`)
  .join(' ')}>
    <!-- ... -->
</html>`
