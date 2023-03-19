import cloudflare from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: cloudflare()
	},
    
};

export default config;
