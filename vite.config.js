import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},

	plugins: [react()],
	base:"https://DamianCode28.github.io/Lista-ToDo"
});
