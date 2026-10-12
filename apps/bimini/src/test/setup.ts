import '@testing-library/jest-dom/vitest'

// jsdom's scrollTo is an unimplemented stub that logs noise; the in-page anchor
// clicks in these tests would hit it, so it gets a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})
