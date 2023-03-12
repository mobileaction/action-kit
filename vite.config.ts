import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

import { peerDependencies, dependencies } from './package.json';

export default defineConfig({
  plugins: [vue(), svgLoader(), dts()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'action-kit',
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
});
