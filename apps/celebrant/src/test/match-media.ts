import { vi } from 'vitest'

/**
 * Replace `window.matchMedia` for one test. The suite's `setup.ts` installs a settled
 * `matches: false` list, so a caller asks for the other answer through this helper and
 * `vi.restoreAllMocks()` in `afterEach` gives the suite its default back.
 */
export function mockMatchMedia(matches: boolean): void {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }) as MediaQueryList,
  )
}

/** The class string as tokens, so a variant cannot pass for the utility it decorates. */
export function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}
