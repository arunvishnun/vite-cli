// vite.config.js
import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import Fastify from 'fastify';

export default defineConfig({
  plugins: [React(), SWC()],
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
