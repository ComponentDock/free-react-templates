import '@testing-library/jest-dom/vitest'

// jsdom does not provide IntersectionObserver; stub it so Counter hooks
// can mount without crashing during tests.
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver
}
