/**
 * A controllable `window.matchMedia`. The page asks two questions — whether the
 * viewport crossed 861 px and whether motion is reduced — and the menu hook
 * subscribes to the first one's `change` event, which jsdom does not implement.
 */

export interface MediaMock {
  /** Flip the `(min-width: 861px)` answer and notify the subscribers. */
  fire: (matches: boolean) => void
  restore: () => void
}

export function installMatchMedia(input: { desktop?: boolean; reduce?: boolean } = {}): MediaMock {
  const original = window.matchMedia
  const listeners = new Set<(event: MediaQueryListEvent) => void>()
  let desktop = input.desktop ?? false
  const reduce = input.reduce ?? false

  window.matchMedia = ((query: string) => ({
    get matches() {
      return query.includes('min-width') ? desktop : reduce
    },
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: (_type: string, callback: unknown) => {
      listeners.add(callback as (event: MediaQueryListEvent) => void)
    },
    removeEventListener: (_type: string, callback: unknown) => {
      listeners.delete(callback as (event: MediaQueryListEvent) => void)
    },
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia

  return {
    fire(matches: boolean) {
      desktop = matches
      for (const listener of listeners) listener({ matches } as MediaQueryListEvent)
    },
    restore() {
      window.matchMedia = original
    },
  }
}

/** Neutralize an in-page anchor's navigation so a click only runs React's handler. */
export function stopAnchorNavigation(element: Element) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}
