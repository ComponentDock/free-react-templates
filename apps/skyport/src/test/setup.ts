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
