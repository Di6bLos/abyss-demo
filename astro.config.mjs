import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Di6bLos.github.io',
	base: '/abyss-demo/',
	vite: {
		server: {
			fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
			}
		}
	}
});
