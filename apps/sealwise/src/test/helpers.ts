import { act } from '@testing-library/react'

export const nativeHeight = window.innerHeight

/** Drive every scroll-driven state in one call. Wrap it in `act` at the call site. */
export function setScroll(scrollY: number, scrollHeight: number, innerHeight = nativeHeight) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: innerHeight })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

type MediaListener = (event: MediaQueryListEvent) => void

export interface MediaControl {
  emit: (reduced: boolean) => void
  listeners: () => number
}

/**
 * `matchMedia` answers both questions the app asks, and keeps its change
 * listeners so a test can flip the preference the way a reader would.
 */
export function installMedia({ reduce = false, dark = false } = {}): MediaControl {
  const listeners = new Set<MediaListener>()
  const answers = (query: string) => {
    if (query.includes('prefers-reduced-motion')) {
      return reduce
    }
    return query.includes('prefers-color-scheme: dark') ? dark : false
  }

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      get matches() {
        return answers(query)
      },
      media: query,
      onchange: null,
      addEventListener: (_: string, listener: MediaListener) => listeners.add(listener),
      removeEventListener: (_: string, listener: MediaListener) => listeners.delete(listener),
      addListener: (listener: MediaListener) => listeners.add(listener),
      removeListener: (listener: MediaListener) => listeners.delete(listener),
      dispatchEvent: () => false,
    }),
  })

  return {
    emit: (reduced: boolean) =>
      act(() => {
        listeners.forEach((listener) => listener({ matches: reduced } as MediaQueryListEvent))
      }),
    listeners: () => listeners.size,
  }
}

export interface ObserverControl {
  /** One entry that is not yet in view — the `some(...)` false path. */
  miss: () => void
  intersect: () => void
  disconnected: () => boolean
  observed: () => number
}

/** A deterministic IntersectionObserver: nothing intersects until a test says so. */
export function installObserver(): ObserverControl {
  let observed = 0
  let disconnected = false
  let callback: IntersectionObserverCallback | null = null

  class FakeObserver implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds = [0.1]
    readonly scrollMargin = '0px'

    constructor(cb: IntersectionObserverCallback) {
      callback = cb
    }

    observe() {
      observed += 1
    }

    unobserve() {}

    disconnect() {
      disconnected = true
    }

    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: FakeObserver,
  })

  return {
    miss: () =>
      act(() => {
        callback?.(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }),
    intersect: () =>
      act(() => {
        callback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      }),
    disconnected: () => disconnected,
    observed: () => observed,
  }
}

export function setViewport(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}
