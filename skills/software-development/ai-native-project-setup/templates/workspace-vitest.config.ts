import { defineConfig } from 'vitest/config'

// Per-workspace config. globals:true is REQUIRED for Testing Library
// auto-cleanup — without it the DOM leaks between tests and you get
// spurious "Found multiple elements" failures.
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
})
