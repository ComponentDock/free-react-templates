import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['apps/*', 'packages/*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      include: ['apps/*/src/**', 'packages/*/src/**'],
      // entry point, configs, CSS, and test files are excluded
      exclude: [
        '**/*.test.*',
        '**/__tests__/**',
        '**/test/**',
        '**/main.tsx',
        '**/*.config.*',
        '**/*.css',
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
})
