import { defineConfig } from 'vite';
import path from 'path';
import alias from '@rollup/plugin-alias';

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
        },
      ],
    }),
  ],
  root: 'src',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './dist'),
    },
  },
});
