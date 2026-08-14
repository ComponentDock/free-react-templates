import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

/* Mandatory injectUiSource() helper: Tailwind v4.3's vite plugin silently
   drops RELATIVE @source paths, so classes used only in packages/ui (e.g.
   inline-flex, h-10) never get generated — shared Button/ButtonLink lose
   their flex centering. Injecting an absolute @source derived from this
   config's own directory is portable across machines/CI. Never remove. */
function injectUiSource() {
  const ui = resolve(__dirname, '../../packages/ui/src')
  return {
    name: 'inject-ui-source',
    enforce: 'pre',
    transform(code: string, id: string) {
      if (
        id.endsWith('/src/index.css') &&
        code.includes("@import 'tailwindcss'") &&
        !code.includes('@source')
      ) {
        return { code: "@source '" + ui + "'; " + code, map: null }
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectUiSource(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
