import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function injectUiSource() {
  const uiSrc = fileURLToPath(new URL('../../../packages/ui/src', import.meta.url))
  return {
    name: 'inject-ui-source',
    transformIndexHtml(html: string) {
      return html
    },
    config() {
      return {
        css: {
          transformer: 'postcss',
        },
      }
    },
    transform(code: string, id: string) {
      if (id.endsWith('index.css') && !code.includes(uiSrc)) {
        return `@source "${uiSrc}";\n${code}`
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectUiSource(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
