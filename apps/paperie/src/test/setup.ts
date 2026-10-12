import '@testing-library/jest-dom/vitest'

// jsdom's scrollTo is an unimplemented stub that logs noise; the in-page anchor
// clicks in these tests would hit it, so it gets a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})

// jsdom ships no window.matchMedia at all, so the page's reduced-motion guard —
// and the tests that flip it — need one. It stays writable (and therefore
// spy-able) so a test can hand the app the opposite answer.
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
