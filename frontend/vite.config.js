import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/static/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5174,
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
});

