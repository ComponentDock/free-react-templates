import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for jsdom (not available in jsdom)
const existingIO = globalThis.IntersectionObserver
if (!existingIO) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).IntersectionObserver = class MockIO {
    private cb: IntersectionObserverCallback
    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb
    }
    observe() {
      this.cb(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
    unobserve() {}
    disconnect() {}
  }
}
