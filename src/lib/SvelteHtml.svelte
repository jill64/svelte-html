<script lang="ts">
  import { browser } from '$app/environment'

  let prop = $props()

  $effect(() => {
    if (browser) {
      // eslint-disable-next-line
      const html = document.getElementsByTagName('html')[0]

      Object.entries(prop).forEach(([key, value]) => {
        if (html.getAttribute(key) !== value) {
          if (value) {
            html.setAttribute(key, value as string)
          } else {
            html.removeAttribute(key)
          }
        }
      })
    }
  })
</script>
