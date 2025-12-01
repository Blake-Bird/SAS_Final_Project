// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite config tuned for a fullscreen presentation app
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
