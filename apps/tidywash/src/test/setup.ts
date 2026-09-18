import '@testing-library/jest-dom/vitest'

// jsdom does not provide IntersectionObserver — mock it for Counter component
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class {
    callback: IntersectionObserverCallback
    constructor(cb: IntersectionObserverCallback) {
      this.callback = cb
    }
    observe(target: Element) {
      // Fire with isIntersecting: false first (branch coverage), then true
      this.callback(
        [{ isIntersecting: false, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
      this.callback(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver
}
