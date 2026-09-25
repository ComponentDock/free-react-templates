import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for jsdom
class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    MockIntersectionObserver.instances.push(this)
  }

  observe() {}
  unobserve() {}
  disconnect() {}

  triggerIntersecting(entry?: Partial<IntersectionObserverEntry>) {
    const defaultEntry: IntersectionObserverEntry = {
      boundingClientRect: entry?.boundingClientRect ?? ({} as DOMRectReadOnly),
      intersectionRatio: entry?.intersectionRatio ?? 1,
      intersectionRect: entry?.intersectionRect ?? ({} as DOMRectReadOnly),
      isIntersecting: entry?.isIntersecting ?? true,
      rootBounds: entry?.rootBounds ?? null,
      target: entry?.target ?? ({} as Element),
      time: entry?.time ?? 0,
    }
    this.callback(
      [defaultEntry] as IntersectionObserverEntry[],
      this as unknown as IntersectionObserver,
    )
  }
}

// Make the mock available globally
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

// Also mock Performance.now for Counter component
if (!globalThis.performance?.now) {
  Object.defineProperty(performance, 'now', {
    writable: true,
    value: () => Date.now(),
  })
}
