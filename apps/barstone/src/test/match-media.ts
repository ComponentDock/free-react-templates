/**
 * A controllable stand-in for `window.matchMedia`. Every query starts out reporting
 * `matches: false`, so the page renders its moving presentation; a test that needs the visitor's
 * reduced-motion answer installs the opposite state for that one query.
 */
const registry = new Map<string, boolean>()

function createQuery(query: string): MediaQueryList {
  if (!registry.has(query)) {
    registry.set(query, false)
  }

  return {
    get matches() {
      return registry.get(query) ?? false
    },
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  } as unknown as MediaQueryList
}

/** Puts a fresh, all-false stub back, so one test's preference never leaks into the next. */
export function resetMatchMedia(): void {
  registry.clear()

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => createQuery(query),
  })
}

/** Answers the given query with `matches: true` for the rest of the test file. */
export function mockReducedMotion(): void {
  registry.set('(prefers-reduced-motion: reduce)', true)
}
