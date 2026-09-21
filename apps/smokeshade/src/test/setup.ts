import '@testing-library/jest-dom/vitest'

// Mock requestAnimationFrame for Counter animation
// Fire callback synchronously but limit recursion depth
let rafDepth = 0
Object.defineProperty(globalThis, 'requestAnimationFrame', {
  writable: true,
  value: (cb: FrameRequestCallback) => {
    rafDepth++
    if (rafDepth <= 100) {
      cb(performance.now())
    }
    return rafDepth
  },
})
Object.defineProperty(globalThis, 'cancelAnimationFrame', {
  writable: true,
  value: () => {},
})

// Reset depth before each test
import { beforeEach } from 'vitest'
beforeEach(() => {
  rafDepth = 0
})
