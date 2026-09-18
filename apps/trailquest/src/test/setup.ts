import '@testing-library/jest-dom'

// Mock IntersectionObserver for Counter component
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    // Trigger immediately for tests
    setTimeout(() => {
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }, 0)
  }
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error - jsdom doesn't have IntersectionObserver
window.IntersectionObserver = MockIntersectionObserver
