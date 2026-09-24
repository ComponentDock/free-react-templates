import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    testTimeout: 15000,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/test/**', 'src/main.tsx', '**/*.css', '**/*.d.ts'],
    },
  },
})
