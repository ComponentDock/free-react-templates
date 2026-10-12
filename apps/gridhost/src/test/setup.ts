import '@testing-library/jest-dom/vitest'

// jsdom ships no matchMedia implementation; the app reads it for the
// reduce-motion query, so tests get a writable default they can spy on.
Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

// jsdom's scrollTo is an unimplemented stub that logs noise; the back-to-top
// control and the smooth-scroll paths need a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})
