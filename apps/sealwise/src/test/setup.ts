import '@testing-library/jest-dom/vitest'

// jsdom's scrollTo is an unimplemented stub that logs noise; in-page anchor clicks would hit it.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})

// jsdom ships no `matchMedia` in this environment; every component asks it a
// question, so a false-by-default implementation is the deterministic baseline.
if (typeof window.matchMedia !== 'function') {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}
