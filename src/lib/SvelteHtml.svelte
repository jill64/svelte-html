<script lang="ts">
  import { browser } from '$app/environment'

  let prop = $props()

  $effect(() => {
    if (browser) {
      const html = document.getElementsByTagName('html')[0]

      Object.entries(prop).forEach(([key, value]) => {
        if (html.getAttribute(key) !== value) {
          value
            ? html.setAttribute(key, value as string)
            : html.removeAttribute(key)
        }
      })
    }
  })
</script>
