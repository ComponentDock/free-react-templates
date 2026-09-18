import '@testing-library/jest-dom/vitest'

// Mock requestAnimationFrame to fire callbacks immediately in tests
Object.defineProperty(globalThis, 'requestAnimationFrame', {
  writable: true,
  value: (cb: FrameRequestCallback) => {
    cb(performance.now())
    return 0
  },
})

// Mock performance.now for animation tests
let perfNow = 0
Object.defineProperty(globalThis, 'performance', {
  writable: true,
  value: {
    ...performance,
    now: () => {
      perfNow += 100
      return perfNow
    },
  },
})
