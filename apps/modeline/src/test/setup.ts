import '@testing-library/jest-dom/vitest'
import { resetMatchMedia } from './match-media'

// jsdom's scrollTo is an unimplemented stub that logs noise; in-page anchor clicks would hit it.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})

// jsdom ships no window.matchMedia at all, so the page's motion preference — and the tests that
// flip it — need one. Installing it here also hands every test a matchMedia that can be flipped.
resetMatchMedia()
beforeEach(resetMatchMedia)
