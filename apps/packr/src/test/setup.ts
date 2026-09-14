import '@testing-library/jest-dom'

// Configurable IntersectionObserver mock
let shouldIntersect = true

export function setIntersectionObserver(shouldFire: boolean) {
  shouldIntersect = shouldFire
}

class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    if (shouldIntersect) {
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
  }
  unobserve() {}
  disconnect() {}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(globalThis as any).IntersectionObserver = MockIntersectionObserver
