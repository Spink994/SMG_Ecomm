/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// I had to create my own type and extend defineCOnfig before i could inpue test: in the configuration - https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {},
		}),
		VitePWA({
			workbox: {
				// options for workbox
				runtimeCaching: [
					// Define caching strategies for your e-commerce app's assets here
					{
						urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'images-cache',
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
							},
						},
					},
				],
			},
		}),
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
