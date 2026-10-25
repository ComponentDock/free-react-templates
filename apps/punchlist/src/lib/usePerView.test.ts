import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readPerView, usePerView } from './usePerView'

const original = window.matchMedia

afterEach(() => {
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: original })
})

function stub(queries: Record<string, boolean>) {
  const listeners = new Map<string, () => void>()
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn((query: string) => ({
      matches: queries[query] ?? false,
      addEventListener: (_: string, listener: () => void) => listeners.set(query, listener),
      removeEventListener: (_: string, listener: () => void) => {
        if (listeners.get(query) === listener) {
          listeners.delete(query)
        }
      },
    })),
  })
  return listeners
}

describe('readPerView', () => {
  it('reads three slides at desktop width', () => {
    stub({ '(min-width: 1024px)': true, '(min-width: 640px)': true })
    expect(readPerView()).toBe(3)
  })

  it('reads two slides from 640 px', () => {
    stub({ '(min-width: 1024px)': false, '(min-width: 640px)': true })
    expect(readPerView()).toBe(2)
  })

  it('reads one slide on a phone', () => {
    stub({})
    expect(readPerView()).toBe(1)
  })

  it('falls back to three without matchMedia', () => {
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: undefined })
    expect(readPerView()).toBe(3)
  })
})

describe('usePerView', () => {
  it('re-reads the breakpoint when a query changes and cleans its listeners up', () => {
    const listeners = stub({ '(min-width: 1024px)': false, '(min-width: 640px)': false })
    const { result, unmount } = renderHook(() => usePerView())
    expect(result.current).toBe(1)

    act(() => listeners.get('(min-width: 640px)')?.())
    expect(result.current).toBe(1)

    unmount()
    expect(listeners.size).toBe(0)
  })

  it('does nothing without matchMedia', () => {
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: undefined })
    const { result } = renderHook(() => usePerView())
    expect(result.current).toBe(3)
  })
})
