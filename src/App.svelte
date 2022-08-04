<script lang="ts">
  import { onMount } from 'svelte'
  import { check_server } from './api.svelte'

  export let name: string

  let sresp: string

  onMount(async () => {
    sresp = await check_server()
  })
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <h2 class="bg-rose-300">{sresp}</h2>
  <p>This is a template for svelte and python fast-api as backend</p>

  <br />
  <h2 class="text-xl uppercase font-bold font-serif">
    Features of this template
  </h2>
  <div
    class="grid grid-cols-[2em_1fr] gap-2 text-left bg-gray-200 rounded-md p-2">
    <input disabled checked type="checkbox" id="feature1" />
    <label for="feature1">
      Python backend using
      <b>FastAPI</b>
    </label>
    <input checked disabled type="checkbox" id="feature2" />
    <label for="feature2">
      Uses
      <b>Pnpm</b>
      which is faster to install than yarn and npm
    </label>
    <input checked disabled type="checkbox" id="feature3" />
    <label for="feature3">
      Working Tailwind config in rollup. I don't know how
    </label>
  </div>

</main>
