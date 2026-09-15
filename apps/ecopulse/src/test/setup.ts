import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for jsdom
class MockIntersectionObserver {
  callbackRef: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callbackRef = callback
  }
  observe = vi.fn(() => {
    setTimeout(() => {
      this.callbackRef(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }, 0)
  })
  unobserve = vi.fn()
  disconnect = vi.fn()
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
