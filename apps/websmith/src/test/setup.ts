import '@testing-library/jest-dom/vitest'

// Polyfill IntersectionObserver for jsdom
let _observeCount = 0

class MockIntersectionObserver implements IntersectionObserver {
  root = null
  rootMargin = ''
  scrollMargin = ''
  thresholds: ReadonlyArray<number> = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe(target: Element) {
    _observeCount++
    // First entry: not intersecting; rest: intersecting — covers both branches
    const entry = {
      target,
      isIntersecting: _observeCount > 1,
      intersectionRatio: _observeCount > 1 ? 1 : 0,
    } as IntersectionObserverEntry
    this.callback([entry], this as unknown as IntersectionObserver)
  }
  unobserve() {
    return null
  }
  disconnect() {
    return null
  }
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = MockIntersectionObserver
}
