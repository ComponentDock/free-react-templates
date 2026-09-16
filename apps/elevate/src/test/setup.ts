import '@testing-library/jest-dom/vitest'

// jsdom does not implement IntersectionObserver — provide a mock that
// fires the callback asynchronously (via microtask) to match browser timing.
const observers: Array<{
  callback: IntersectionObserverCallback
  target: Element
}> = []

class MockIntersectionObserver implements IntersectionObserver {
  root = null
  rootMargin = ''
  scrollMargin = ''
  thresholds: readonly number[] = []
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe(target: Element) {
    observers.push({ callback: this.callback, target })
    // Fire asynchronously — closer to real browser behavior
    queueMicrotask(() => {
      this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this)
    })
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.assign(globalThis, { IntersectionObserver: MockIntersectionObserver })

// Fake requestAnimationFrame so animation loops (counters, auto-advance)
// complete deterministically under vi.useFakeTimers().
let rafId = 0
const rafCallbacks = new Map<number, FrameRequestCallback>()
Object.assign(globalThis, {
  requestAnimationFrame: (cb: FrameRequestCallback) => {
    const id = ++rafId
    rafCallbacks.set(id, cb)
    setTimeout(() => {
      const fn = rafCallbacks.get(id)
      if (fn) {
        rafCallbacks.delete(id)
        fn(performance.now())
      }
    }, 16)
    return id
  },
  cancelAnimationFrame: (id: number) => {
    rafCallbacks.delete(id)
  },
})
