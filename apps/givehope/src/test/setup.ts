import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock IntersectionObserver for Counters component
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

let lastObserver: MockIntersectionObserver | null = null

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: function (callback: IntersectionObserverCallback) {
    lastObserver = new MockIntersectionObserver(callback)
    return lastObserver
  },
})

export function __getLastObserver() {
  return lastObserver
}
