/**
 * A controllable stand-in for `window.matchMedia`. The default stub every test
 * starts from reports `matches: false`; tests that need to drive the breakpoint by
 * hand install the recorder below and fire the change themselves.
 */
import { act } from '@testing-library/react'

export const DESKTOP_QUERY = '(min-width: 768px)'

type ChangeListener = (event: MediaQueryListEvent) => void

export interface MatchMediaControl {
  /** Fires a change event with the given match state. */
  change: (matches: boolean) => void
}

function stub(initial: boolean, listeners: Set<ChangeListener>) {
  const query = {
    matches: initial,
    media: DESKTOP_QUERY,
    onchange: null,
    addEventListener: (_: string, listener: ChangeListener) => {
      listeners.add(listener)
    },
    removeEventListener: (_: string, listener: ChangeListener) => {
      listeners.delete(listener)
    },
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }

  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: () => query,
  })

  return query
}

/** Puts the narrow-viewport stub back, so one test's breakpoint never leaks into the next. */
export function resetMatchMedia(): void {
  stub(false, new Set())
}

/** Installs a recorder so a test can drive the breakpoint itself. */
export function mockMatchMedia(initial: boolean): MatchMediaControl {
  const listeners = new Set<ChangeListener>()
  const query = stub(initial, listeners)

  return {
    // Wrapped in `act`, because the change lands in React state the test is about
    // to read back out of the DOM.
    change: (matches: boolean) => {
      act(() => {
        query.matches = matches

        for (const listener of listeners) {
          listener({ matches } as MediaQueryListEvent)
        }
      })
    },
  }
}
