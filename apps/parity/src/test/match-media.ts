/**
 * A controllable stand-in for `window.matchMedia`. Every query starts out
 * reporting `matches: false` (a desktop load); a test that wants the narrow
 * layout installs `matches: true` for the 720 px query, and a test that wants a
 * browser without the API at all removes the function.
 */
const registry = new Map<string, boolean>()

function createQuery(query: string): MediaQueryList {
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

/** Puts a fresh, all-false stub back, so one test's viewport never leaks into the next. */
export function resetMatchMedia(): void {
  registry.clear()

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => createQuery(query),
  })
}

/** Answers the table's breakpoint with `matches: true` for the rest of the test. */
export function mockNarrow(): void {
  registry.set('(max-width: 720px)', true)
}

/** Simulates a browser that ships no `matchMedia` at all. */
export function removeMatchMedia(): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: undefined,
  })
}
