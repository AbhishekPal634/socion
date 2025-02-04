import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			plugins: [nodePolyfills()],
		},
	},
	define: {
		'process.env': {},
	},
});
