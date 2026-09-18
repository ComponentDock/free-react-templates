import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver globally — jsdom doesn't provide it
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class MockIntersectionObserver {
  root = null
  rootMargin = ''
  scrollMargin = ''
  thresholds = [0]
  private cb: IntersectionObserverCallback
  constructor(cb: IntersectionObserverCallback) {
    this.cb = cb
  }
  observe(target: Element) {
    this.cb(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (typeof IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver
}
