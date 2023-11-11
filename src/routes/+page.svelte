<script lang="ts">
  import SvelteHtml from '$lib/SvelteHtml.svelte'
  import { ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { PlusIcon, XIcon } from 'svelte-feather-icons'
  import Highlight from 'svelte-highlight'
  import html from 'svelte-highlight/languages/xml'
  import github from 'svelte-highlight/styles/github'
  import githubDark from 'svelte-highlight/styles/github-dark'
  import GitHubLogo from './GitHubLogo.svelte'
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

<ThemeManager />

<svelte:head>
  {@html $theme === 'dark' ? githubDark : github}
</svelte:head>

<SvelteHtml
  {...Object.fromEntries(attributes.map(({ key, value }) => [key, value]))}
/>

<header>
  <div>
    <h1>@jill64/svelte-html</h1>
    <p style:font-size="large">
      🏷️ Declarative attribute binding for the root html element
    </p>
  </div>
  <a href="https://github.com/jill64/svelte-html">
    <GitHubLogo />
  </a>
</header>

<p>Open the Dev Tool and check that the html tag attributes have changed.</p>

<main>
  <div class="preview">
    <section class="preview-box">
      svelte
      <Highlight class="code" language={html} code={svelteCode(attributes)} />
    </section>
    <section class="preview-box">
      html
      <Highlight class="code" language={html} code={htmlCode(attributes)} />
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
  :global(body) {
    font-family: sans-serif;
    padding: 0 1rem;
    border-color: #ccc;
  }

  :global(code.hljs) {
    border-radius: 0.25rem;
    border: 1px solid #ccc;
  }

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
    :global(body) {
      background-color: #1c1c1c;
      border-color: #333;
      color: #eee;
    }

    :global(code.hljs) {
      border: 1px solid #222;
    }

    input,
    button {
      border: 1px solid #777;
    }

    button:hover {
      background-color: #333;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
