import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://di6blos.github.io',
	base: '/abyss-demo/',
	output: 'static',
	vite: {
		server: {
			fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
			}
		}
	}
});
