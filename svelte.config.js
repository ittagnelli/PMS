/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		router: true,
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			entries: ['*']
		},
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			}
		},
	}
};

export default config;

