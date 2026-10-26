import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useMobileMenu } from './useMobileMenu'

type ChangeHandler = (event: MediaQueryListEvent) => void

const originalMatchMedia = window.matchMedia

/** A matchMedia whose change listeners the test can fire by hand. */
function stubMatchMedia() {
  const handlers: ChangeHandler[] = []
  const removeEventListener = vi.fn()

  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: (_type: string, handler: ChangeHandler) => handlers.push(handler),
    removeEventListener,
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia

  return { handlers, removeEventListener }
}

afterEach(() => {
  window.matchMedia = originalMatchMedia
  document.body.replaceChildren()
})

describe('useMobileMenu', () => {
  it('starts closed and toggles both ways', () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.open).toBe(false)

    act(() => result.current.toggle())
    expect(result.current.open).toBe(true)

    act(() => result.current.toggle())
    expect(result.current.open).toBe(false)
  })

  it('closes with close()', () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => result.current.toggle())
    act(() => result.current.close())

    expect(result.current.open).toBe(false)
  })

  it('closes on Escape and returns focus to the button', () => {
    const { result } = renderHook(() => useMobileMenu())
    const button = document.createElement('button')
    document.body.append(button)
    result.current.buttonRef.current = button

    act(() => result.current.toggle())
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })

    expect(result.current.open).toBe(false)
    expect(document.activeElement).toBe(button)
  })

  it('ignores any other key', () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => result.current.toggle())
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })

    expect(result.current.open).toBe(true)
  })

  it('stays open on a press inside the bar and closes on a press outside it', () => {
    const { result } = renderHook(() => useMobileMenu())
    const header = document.createElement('header')
    const inside = document.createElement('a')
    header.append(inside)
    document.body.append(header)
    result.current.headerRef.current = header

    act(() => result.current.toggle())
    act(() => {
      inside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })
    expect(result.current.open).toBe(true)

    act(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })
    expect(result.current.open).toBe(false)
  })

  it('closes with no header mounted (the ref is still null)', () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => result.current.toggle())
    act(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(result.current.open).toBe(false)
  })

  it('closes when the viewport crosses 861 px, and stays open when it does not', () => {
    const { handlers, removeEventListener } = stubMatchMedia()
    const { result, unmount } = renderHook(() => useMobileMenu())

    act(() => result.current.toggle())
    act(() => handlers.forEach((handler) => handler({ matches: false } as MediaQueryListEvent)))
    expect(result.current.open).toBe(true)

    act(() => handlers.forEach((handler) => handler({ matches: true } as MediaQueryListEvent)))
    expect(result.current.open).toBe(false)

    unmount()
    expect(removeEventListener).toHaveBeenCalled()
  })

  it('survives an environment without matchMedia', () => {
    // @ts-expect-error — the hook guards on the function being absent.
    window.matchMedia = undefined

    const { result } = renderHook(() => useMobileMenu())
    act(() => result.current.toggle())

    expect(result.current.open).toBe(true)
  })
})
