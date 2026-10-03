import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base: './' — относительные пути, чтобы сайт работал из любой папки на хостинге.
export default defineConfig({
  base: './',
  plugins: [react()],
});
