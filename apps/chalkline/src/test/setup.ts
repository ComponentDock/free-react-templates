import '@testing-library/jest-dom/vitest'
import { resetMatchMedia } from './match-media'

// jsdom's scrollTo is an unimplemented stub that logs noise; the in-page anchor
// clicks in these tests would hit it, so it gets a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})

// jsdom ships no window.matchMedia at all, so the page's motion preference —
// and the tests that flip it — need one. Installing it here also hands every
// test a matchMedia that can be spied on.
resetMatchMedia()
beforeEach(resetMatchMedia)

// jsdom ships no IntersectionObserver either; the counter hook must be able to
// mount, so a no-op observer that never fires stands in by default. Tests that
// need it to fire stub their own.
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver
}
