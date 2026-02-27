import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

// Tailwind v4 with first-party Vite plugin
export default defineConfig({
	plugins: [
		svelte(),
		tailwindcss() // First-party Tailwind v4 Vite plugin
	]
});
