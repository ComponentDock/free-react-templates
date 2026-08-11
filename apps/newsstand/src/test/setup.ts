import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom does not implement window.scrollTo (Rail scroll-to-top button).
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
})
