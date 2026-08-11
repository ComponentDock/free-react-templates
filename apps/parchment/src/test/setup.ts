import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom does not implement window.scrollTo — polyfill it so any scroll
// helpers (e.g. a future back-to-top control) do not log errors in tests.
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
})
