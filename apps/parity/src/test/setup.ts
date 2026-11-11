import '@testing-library/jest-dom/vitest'
import { resetMatchMedia } from './match-media'

// jsdom ships no window.matchMedia, and the table's load-time breakpoint reads it.
resetMatchMedia()
beforeEach(resetMatchMedia)
