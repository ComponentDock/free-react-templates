import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for StatsCounter
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  // Helper to simulate intersection
  trigger(isIntersecting = true) {
    this.callback(
      [
        {
          isIntersecting,
          intersectionRatio: isIntersecting ? 0.5 : 0,
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    )
  }
}

// Store instances for test access
let lastObserver: MockIntersectionObserver | null = null
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: function (callback: IntersectionObserverCallback) {
    lastObserver = new MockIntersectionObserver(callback)
    return lastObserver
  },
})

export function getLastObserver() {
  return lastObserver
}
