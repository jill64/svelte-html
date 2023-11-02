<script lang="ts">
  import { browser } from '$app/environment'

  $: if (browser) {
    const html = document.getElementsByTagName('html')[0]

    Object.entries($$props).forEach(([key, value]) => {
      if (html.getAttribute(key) !== value) {
        value ? html.setAttribute(key, value) : html.removeAttribute(key)
      }
    })
  }
</script>
