import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for jsdom (used by Counter component)
// The mock stores callbacks and provides a trigger method for tests.
const observers = new Map<IntersectionObserverCallback, MockIntersectionObserver>()

class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    observers.set(callback, this)
  }

  observe(_el: Element) {
    // Simulate immediate intersection for tests
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }

  unobserve() {}
  disconnect() {
    observers.delete(this.callback)
  }
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})
