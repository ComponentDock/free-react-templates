import '@testing-library/jest-dom/vitest'

/**
 * jsdom ships no `window.matchMedia`, and this page asks it one question — whether the visitor has
 * asked for reduced motion — from more than one component. Install a settled `matches: false` list
 * so a component under test can also replace it with `vi.spyOn(window, 'matchMedia')`.
 */
function mediaQueryList(query: string, matches: boolean): MediaQueryList {
  return {
    matches,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  } as MediaQueryList
}

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  writable: true,
  value: (query: string) => mediaQueryList(query, false),
})
