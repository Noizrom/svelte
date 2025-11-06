import sveltePreprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [tailwindcss(), autoprefixer()]
		}
	})
};
