<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let name: string;

	let sresp: string
	onMount(async () => {
		const response = await axios.get('http://localhost:7000/checkserver')
		sresp = response.data
	})
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2 class="bg-green-400">{sresp}</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
