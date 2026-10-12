import '@testing-library/jest-dom/vitest'
import { resetMatchMedia } from './match-media'

// jsdom ships no matchMedia implementation; the stub answers every query with
// `matches: false` until a test asks for a breakpoint of its own, so no width a
// test drives can leak into the next one.
resetMatchMedia()
beforeEach(resetMatchMedia)

// jsdom's scrollTo is an unimplemented stub that logs noise; the in-page anchor
// clicks in these tests would hit it, so it gets a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})
