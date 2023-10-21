// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Divide node_modules into their respective packages (efficient code splitting)
            return id.split('/')[2]
          }
        },
      },
    },
  },
  server: {
    proxy: {
      // If you need to proxy API requests to Fastify during development
      '/api': 'http://localhost:3001',
    },
  },
});
