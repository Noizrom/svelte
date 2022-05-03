import App from './App.svelte';
import './tailwind.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;