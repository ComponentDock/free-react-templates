import { vi } from 'vitest'

export interface MockObserver {
  elements: Element[]
  fire: (isIntersecting: boolean, target: Element) => void
}

/** Replaces `IntersectionObserver` with a controllable stub (jsdom has none). */
export function installIO(): MockObserver[] {
  const instances: MockObserver[] = []

  class MockIO {
    elements: Element[] = []
    root = null
    rootMargin = ''
    thresholds = [0]
    private cb: IntersectionObserverCallback

    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb
      instances.push({
        elements: this.elements,
        fire: (isIntersecting: boolean, target: Element) => {
          this.cb([{ isIntersecting, target } as IntersectionObserverEntry], this as never)
        },
      })
    }

    observe(el: Element) {
      this.elements.push(el)
    }
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  vi.stubGlobal('IntersectionObserver', MockIO)
  return instances
}

const nativeMatchMedia = window.matchMedia

/** Answers `matchMedia` by exact query string; call `resetMedia()` afterwards. */
export function stubMedia(answers: Record<string, boolean> = {}) {
  window.matchMedia = ((query: string) => ({
    matches: answers[query] === true,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

export function resetMedia() {
  window.matchMedia = nativeMatchMedia
}

/** jsdom ships `readyState === 'complete'`; the preloader needs the other state. */
export function setReadyState(state: DocumentReadyState) {
  Object.defineProperty(document, 'readyState', { configurable: true, value: state })
}

/** A manual `requestAnimationFrame` queue so counter frames can be driven. */
export function installRaf(): { flush: (timestamp: number) => void; pending: () => number } {
  const queue: FrameRequestCallback[] = []

  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    queue.push(cb)
    return queue.length
  })
  vi.stubGlobal('cancelAnimationFrame', () => {})

  return {
    flush: (timestamp: number) => {
      const cb = queue.shift()
      cb?.(timestamp)
    },
    pending: () => queue.length,
  }
}
