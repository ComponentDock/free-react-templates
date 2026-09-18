import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    testTimeout: 15000,
  },
})
