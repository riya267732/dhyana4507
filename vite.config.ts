
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This shims process.env.API_KEY so your code doesn't crash in the browser
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  server: {
    port: 3000
  }
});
