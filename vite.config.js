// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import PostCSS plugins
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Ensure Tailwind CSS is included
        autoprefixer(),
      ],
    },
  },
})
