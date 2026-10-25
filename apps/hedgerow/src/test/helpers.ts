/**
 * Test harness for the two browser APIs jsdom does not provide: `matchMedia`
 * and `IntersectionObserver`. Every stub has its own reset, because
 * `vi.unstubAllGlobals()` does not restore a global assigned by hand.
 */
import { vi } from 'vitest'

const nativeMatchMedia = window.matchMedia

/** Replace matchMedia with one that answers every query the same way. */
export function stubMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
      dispatchEvent: () => false,
    }),
  })
}

export function resetMedia() {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: nativeMatchMedia,
  })
}

export interface IOHarness {
  count: () => number
  elements: (index: number) => Element[]
  fire: (index: number, isIntersecting: boolean) => void
  isDisconnected: (index: number) => boolean
  restore: () => void
}

interface ObserverRecord {
  callback: IntersectionObserverCallback
  elements: Element[]
  disconnected: boolean
}

/** Install a controllable IntersectionObserver and return handles per instance. */
export function installIO(): IOHarness {
  const native = window.IntersectionObserver
  const records: ObserverRecord[] = []

  class MockObserver {
    root = null
    rootMargin = '0px'
    thresholds = [0.1]
    private record: ObserverRecord

    constructor(callback: IntersectionObserverCallback) {
      this.record = { callback, elements: [], disconnected: false }
      records.push(this.record)
    }

    observe(element: Element) {
      this.record.elements.push(element)
    }

    unobserve() {}

    disconnect() {
      this.record.disconnected = true
    }

    takeRecords() {
      return []
    }
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: MockObserver,
  })

  return {
    count: () => records.length,
    elements: (index) => records[index]!.elements,
    fire: (index, isIntersecting) => {
      const record = records[index]!
      const entries = record.elements.map(
        (target) => ({ isIntersecting, target }) as unknown as IntersectionObserverEntry,
      )
      record.callback(entries, {} as IntersectionObserver)
    },
    isDisconnected: (index) => records[index]!.disconnected,
    restore: () => {
      if (native) {
        Object.defineProperty(window, 'IntersectionObserver', {
          configurable: true,
          writable: true,
          value: native,
        })
      } else {
        delete (window as unknown as Record<string, unknown>).IntersectionObserver
      }
    },
  }
}

/** jsdom has no IntersectionObserver at all — make that state explicit. */
export function resetIO() {
  delete (window as unknown as Record<string, unknown>).IntersectionObserver
}

/** Put an element far below the fold so the reveal layer arms itself. */
export function belowFold() {
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    top: 5000,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  } as DOMRect)
}

/** Scroll the document to a position and fire the listener once. */
export function setScroll(scrollY: number, scrollHeight: number, innerHeight: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: innerHeight })
  window.dispatchEvent(new Event('scroll'))
}
