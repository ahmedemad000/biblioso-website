import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // Always use root for development and Vercel
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
  }
})