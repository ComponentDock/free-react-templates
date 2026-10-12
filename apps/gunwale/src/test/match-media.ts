/**
 * A controllable stand-in for `window.matchMedia`. Every query starts out
 * reporting `matches: false`; a test that needs a breakpoint installs a recorder
 * for that query and fires the change itself, so the page's two queries — the
 * wide row's and the drawer's resize rule — can be driven independently.
 */
import { act } from '@testing-library/react'

type ChangeListener = (event: MediaQueryListEvent) => void

interface QueryState {
  matches: boolean
  listeners: Set<ChangeListener>
}

const registry = new Map<string, QueryState>()

function createQuery(query: string): MediaQueryList {
  const state = registry.get(query) ?? { matches: false, listeners: new Set<ChangeListener>() }

  registry.set(query, state)

  return {
    get matches() {
      return state.matches
    },
    media: query,
    onchange: null,
    addEventListener: (_: string, listener: ChangeListener) => {
      state.listeners.add(listener)
    },
    removeEventListener: (_: string, listener: ChangeListener) => {
      state.listeners.delete(listener)
    },
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  } as unknown as MediaQueryList
}

function install(): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => createQuery(query),
  })
}

export interface MatchMediaControl {
  /** Fires a change event for the query with the given match state. */
  change: (matches: boolean) => void
}

/** Puts a fresh, all-false stub back, so one test's breakpoint never leaks into the next. */
export function resetMatchMedia(): void {
  registry.clear()
  install()
}

/** Installs a recorder for one query so a test can drive that breakpoint itself. */
export function mockMatchMedia(query: string, initial: boolean): MatchMediaControl {
  const state = registry.get(query) ?? { matches: false, listeners: new Set<ChangeListener>() }

  state.matches = initial
  registry.set(query, state)

  return {
    // Wrapped in `act`, because the change lands in React state the test is about
    // to read back out of the DOM.
    change: (matches: boolean) => {
      act(() => {
        state.matches = matches

        for (const listener of state.listeners) {
          listener({ matches } as MediaQueryListEvent)
        }
      })
    },
  }
}
