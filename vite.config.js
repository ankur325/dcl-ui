// vite.config.js

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import NodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            NodeGlobalsPolyfillPlugin({
                process: true,
                buffer: true,
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                buffer: require.resolve('buffer/'),  // ensure this is resolving to the correct location
                stream: require.resolve('stream-browserify'), // using stream-browserify as a polyfill
            }
        },
        optimizeDeps: {
            esbuildOptions: {
                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        process: true,
                        buffer: true,
                    }),
                ],
                define: {
                    global: 'globalThis',
                },
            },
        },
        define: {
            'process.env': {},
            global: 'globalThis',
        },
        build: {
            rollupOptions: {
                plugins: [
                    NodePolyfills(),
                ],
            },
        },
        server: {
            port: 8080,
            proxy: {
                '/api': {
                    target: 'http://localhost:26640',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/rpc': {
                    target: 'http://localhost:26657',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/rpc/, ''),
                    ws: true
                },
                '/websocket': {
                    target: 'http://localhost:26657',
                    changeOrigin: true,
                    ws: true,
                    upgrade: true
                }
            }
        }
    };
});