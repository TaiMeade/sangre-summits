import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project site under /sangre-summits/.
  // Dev (`vite serve`) stays at root so localhost works normally.
  base: command === 'build' ? '/sangre-summits/' : '/',
  plugins: [
    vue(),
    // Auto-imports Vuetify components/directives and treeshakes the bundle.
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
}))
