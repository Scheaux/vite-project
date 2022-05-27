import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-project/',
  root: 'src',
  build: {
    outDir: '../dist',
  },
});
