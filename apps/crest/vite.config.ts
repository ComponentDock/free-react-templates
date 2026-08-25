import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

function injectUiSource() {
  const uiPath = path.resolve(__dirname, '../../packages/ui/src')
  return {
    name: 'inject-ui-source',
    config() {
      return {
        css: {
          preprocessorOptions: {
            css: {
              additionalData: `@source "${uiPath}";\n`,
            },
          },
        },
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectUiSource(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
