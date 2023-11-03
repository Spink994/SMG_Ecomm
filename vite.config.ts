/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { rollup, InputOptions, OutputOptions } from 'rollup';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// I had to create my own type and extend defineCOnfig before i could inpue test: in the configuration - https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

const CompileTsServiceWorker = () => ({
	name: 'compile-typescript-service-worker',
	async writeBundle(_options, _outputBundle) {
		const inputOptions: InputOptions = {
			input: 'src/service-worker.ts',
			plugins: [rollupPluginTypescript(), nodeResolve()],
		};
		const outputOptions: OutputOptions = {
			dir: 'dist',

			// file: 'service-worker.js',
			format: 'es',
		};
		const bundle = await rollup(inputOptions);
		await bundle.write(outputOptions);
		await bundle.close();
	},
});
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {},
		}),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				importScripts: ['./sw-functional.js'],
				globIgnores: ['**/node_modules/**/*', '**/service-worker.js'],
			},
		}),

		CompileTsServiceWorker(),
	],
	test: {
		coverage: {
			provider: 'c8', // or 'istanbul'
			reporter: ['text'], // text | json | html
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			assets: `${path.resolve(__dirname, './src/assets/')}`,
			components: `${path.resolve(__dirname, './src/components/')}`,
			pages: `${path.resolve(__dirname, './src/pages/')}`,
			'@redux': `${path.resolve(__dirname, './src/redux/')}`,
		},
	},
} as VitestConfigExport);
