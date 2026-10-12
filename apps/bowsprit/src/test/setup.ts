import '@testing-library/jest-dom/vitest'
import { resetMatchMedia } from './match-media'

// jsdom ships no matchMedia implementation; every test starts from the narrow
// default so a breakpoint one test drives never leaks into the next.
resetMatchMedia()
beforeEach(resetMatchMedia)

// jsdom's scrollTo is an unimplemented stub that logs noise; the in-page anchor
// clicks in these tests would hit it, so it gets a quiet writable replacement.
Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  writable: true,
  value: () => {},
})
