import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components/*',
			$data: 'src/data/*',
			$routes: 'src/routes/*',
			$utils: 'src/utils/*',
			$styles: 'src/styles/*',
			$lib: 'src/lib/*'
		}
	}
};

export default config;