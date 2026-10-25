import { act } from '@testing-library/react'
import { vi } from 'vitest'

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

export function setRect(
  element: Element,
  rect: { top: number; bottom: number; height?: number; left?: number; right?: number; width?: number },
) {
  const full = { height: 0, left: 0, right: 0, width: 0, x: 0, y: 0, ...rect }
  element.getBoundingClientRect = () =>
    ({ ...full, toJSON: () => full }) as unknown as DOMRect
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
      addEventListener: (_type: string, handler: MediaListener) => {
        listeners.add(handler)
      },
      removeEventListener: (_type: string, handler: MediaListener) => {
        listeners.delete(handler)
      },
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })

  return {
    emit: (reduced: boolean) => {
      act(() => {
        listeners.forEach((handler) =>
          handler({ matches: reduced, media: '(prefers-reduced-motion: reduce)' } as MediaQueryListEvent),
        )
      })
    },
    listeners: () => listeners.size,
  }
}

export interface MockObserver {
  callback: IntersectionObserverCallback
  options: IntersectionObserverInit | undefined
  observed: Element[]
  disconnected: boolean
  trigger: (entries: Partial<IntersectionObserverEntry>[]) => void
}

let observers: MockObserver[] = []

/** A controllable IntersectionObserver, since jsdom ships none. */
export function installMockIntersectionObserver() {
  observers = []
  class Mock {
    callback: IntersectionObserverCallback
    options: IntersectionObserverInit | undefined
    observed: Element[] = []
    disconnected = false

    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      this.callback = callback
      this.options = options
      const self = this as unknown as MockObserver
      self.observed = this.observed
      self.options = options
      self.trigger = (entries) => {
        act(() => {
          this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
        })
        self.disconnected = this.disconnected
      }
      observers.push(self)
    }

    observe(element: Element) {
      this.observed.push(element)
    }

    unobserve() {}

    disconnect() {
      this.disconnected = true
    }

    takeRecords() {
      return []
    }
  }

  vi.stubGlobal('IntersectionObserver', Mock)
  return {
    get observers() {
      return observers
    },
  }
}

export function removeMockIntersectionObserver() {
  vi.unstubAllGlobals()
  observers = []
}
