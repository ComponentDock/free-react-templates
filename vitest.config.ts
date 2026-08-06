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
      // Enable coverage from the CONFIG instead of the `--coverage` CLI flag.
      // With the CLI flag, `configOverride.coverage` is set and every project
      // instance builds its coverage provider from the ROOT project's coverage
      // config (cli-api initCoverageProvider) — all projects then share the
      // same `coverage/.tmp` directory and each one deletes it after merging
      // (`cleanAfterRun`), racing the others. Observed as intermittent
      // "ENOENT: .../coverage/.tmp/coverage-*.json" crashes at the end of
      // `npm run test:coverage`. Config-based enabling keeps a single (root)
      // provider, so the shared .tmp directory has exactly one owner.
      enabled: true,
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
