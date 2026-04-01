import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Use a conditional base path:
  // - For GitHub Pages (when building for gh-pages) use '/biblioso-website/'
  // - For Vercel (production) use '/'
  base: process.env.VERCEL ? '/' : '/biblioso-website/',
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