import '@testing-library/jest-dom/vitest'

// jsdom's scrollTo is an unimplemented stub that logs noise; in-page anchor clicks would hit it.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})
