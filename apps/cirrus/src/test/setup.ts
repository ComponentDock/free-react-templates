import { vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver globally for jsdom — fires the callback
// so components (e.g. Stats) get their count-up effect triggered in tests.
// Fires twice: first to start counting, second to exercise the started.current guard.
{
  const MockClass = function (
    this: {
      cb: IntersectionObserverCallback
      observe(el: Element): void
      disconnect(): void
      unobserve(_el: Element): void
      takeRecords(): IntersectionObserverEntry[]
      root: null
      rootMargin: string
      thresholds: number[]
      scrollMargin: string
    },
    cb: IntersectionObserverCallback,
  ) {
    this.cb = cb
    this.root = null
    this.rootMargin = ''
    this.thresholds = [0]
    this.scrollMargin = '0px'
    this.takeRecords = () => [] as IntersectionObserverEntry[]
    this.disconnect = vi.fn()
    this.unobserve = vi.fn()
    this.observe = (target: Element) => {
      this.cb(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
      // Fire again to exercise the started.current guard branch
      this.cb(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
  } as unknown as { new (cb: IntersectionObserverCallback): IntersectionObserver }

  vi.stubGlobal('IntersectionObserver', MockClass)
}
