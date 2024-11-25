import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': process.env
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
