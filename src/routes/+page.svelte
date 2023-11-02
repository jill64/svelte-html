<script lang="ts">
  import SvelteHtml from '$lib/SvelteHtml.svelte'

  let attributes = [
    {
      key: 'lang',
      value: 'en'
    },
    {
      key: 'prefix',
      value: 'og: http://ogp.me/ns#'
    }
  ]
</script>

<SvelteHtml
  {...Object.fromEntries(attributes.map(({ key, value }) => [key, value]))}
/>
<h1>@jill64/svelte-html</h1>
<p>Open the Dev Tool and check that the html tag attributes have changed.</p>
<main>
  {#each attributes as { key, value }, index}
    <button
      style:font-size="large"
      on:click={() => {
        attributes = attributes
          .slice(0, index)
          .concat(attributes.slice(index + 1))
      }}
    >
      X
    </button>
    <input bind:value={key} />
    <span>=</span>
    <input bind:value title={key} />
  {/each}
  <button
    style:font-size="xx-large"
    style:display="flex"
    style:justify-self="center"
    on:click={() => {
      attributes = [...attributes, { key: '', value: '' }]
    }}
  >
    ＋
  </button>
</main>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #222;
      color: #eee;
    }
  }
  main {
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-content: center;
    font-size: x-large;
  }
  input {
    color: inherit;
    background-color: inherit;
    border: 1px solid;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: inherit;
  }
  button {
    color: inherit;
    background-color: inherit;
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
</style>
