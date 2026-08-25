import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    testTimeout: 15000,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/test/**', 'src/main.tsx', '**/*.css'],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
})
