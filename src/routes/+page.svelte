<script lang="ts">
  import SvelteHtml from '$lib/SvelteHtml.svelte'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { xml as html } from '@jill64/npm-demo-layout/highlight/languages'
  import { PlusIcon, XIcon } from 'svelte-feather-icons'
  import { htmlCode } from './htmlCode'
  import { svelteCode } from './svelteCode'

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

<p>Open the Dev Tool and check that the html tag attributes have changed.</p>

<main>
  <div class="preview">
    <section class="preview-box">
      svelte
      <HighlightSvelte code={svelteCode(attributes)} />
    </section>
    <section class="preview-box">
      html
      <Highlight language={html} code={htmlCode(attributes)} />
    </section>
  </div>
  <div class="panel">
    {#each attributes as { key, value }, index}
      <button
        style:font-size="x-large"
        on:click={() => {
          attributes = attributes
            .slice(0, index)
            .concat(attributes.slice(index + 1))
        }}
      >
        <XIcon />
      </button>
      <span class="form">
        <input bind:value={key} />
        <span class="equal">=</span>
        <input bind:value title={key} />
      </span>
    {/each}
    <button
      style:font-size="x-large"
      style:display="flex"
      style:justify-self="center"
      on:click={() => {
        attributes = [...attributes, { key: '', value: '' }]
      }}
    >
      <PlusIcon />
    </button>
  </div>
</main>

<style>
  input {
    color: inherit;
    background-color: inherit;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: inherit;
  }

  button {
    color: inherit;
    background-color: inherit;
    border: 1px solid #aaa;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  button:hover {
    background-color: #eee;
  }

  @media (prefers-color-scheme: dark) {
    input,
    button {
      border: 1px solid #777;
    }

    button:hover {
      background-color: #333;
    }
  }

  .panel {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    font-size: x-large;
  }
  .preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .preview-box {
    width: 40vw;
  }
  .form {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    .preview-box {
      width: 600px;
    }
  }
  @media screen and (max-width: 800px) {
    .form {
      grid-template-columns: auto;
    }
    .equal {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .preview-box {
      width: 80vw;
    }
    input {
      width: 70vw;
    }
  }
</style>
