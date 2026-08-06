import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['apps/*', 'packages/*'],
    // The suite has grown to 366 test files running in parallel workers;
    // heavy App renders in jsdom can exceed the 5s default under CPU
    // contention (observed as flaky "Test timed out" failures in the
    // pre-push gate). 15s gives legitimately slow renders headroom.
    // NOTE: this root value only applies to the root project — each
    // workspace's vitest.config.ts must set its own `testTimeout: 15000`
    // (all apps/* and packages/* configs carry it).
    testTimeout: 15000,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      include: ['apps/*/src/**', 'packages/*/src/**'],
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
