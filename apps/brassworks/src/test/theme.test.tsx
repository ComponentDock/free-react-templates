import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  COOKIE_KEY,
  THEME_KEY,
  applyTheme,
  hasAnsweredCookies,
  preferredTheme,
  rememberCookies,
  useTheme,
} from '../theme'

function mockPrefersDark(matches: boolean) {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches,
        media: query,
        onchange: null,
        addEventListener() {},
        removeEventListener() {},
        addListener() {},
        removeListener() {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  )
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
  vi.restoreAllMocks()
})

describe('preferredTheme', () => {
  it('lets a stored choice win, whichever way the OS leans', () => {
    expect(preferredTheme('dark', false)).toBe('dark')
    expect(preferredTheme('light', true)).toBe('light')
  })

  it('falls back to the OS preference when nothing is stored', () => {
    expect(preferredTheme(null, true)).toBe('dark')
    expect(preferredTheme(null, false)).toBe('light')
    expect(preferredTheme('sepia', true)).toBe('dark')
  })
})

describe('applyTheme', () => {
  it('drives the root class in both directions', () => {
    applyTheme('dark')
    expect(document.documentElement).toHaveClass('dark')

    applyTheme('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })
})

describe('useTheme', () => {
  it('defaults to light, toggles the root class and stores the choice', () => {
    mockPrefersDark(false)
    const { result } = renderHook(() => useTheme())

    expect(result.current.dark).toBe(false)
    expect(document.documentElement).not.toHaveClass('dark')

    act(() => result.current.toggle())
    expect(result.current.dark).toBe(true)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(THEME_KEY)).toBe('dark')

    act(() => result.current.toggle())
    expect(result.current.dark).toBe(false)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(THEME_KEY)).toBe('light')
  })

  it('follows a dark OS preference on a first visit', () => {
    mockPrefersDark(true)
    const { result } = renderHook(() => useTheme())

    expect(result.current.dark).toBe(true)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('lets a stored light choice override a dark OS preference', () => {
    mockPrefersDark(true)
    window.localStorage.setItem(THEME_KEY, 'light')
    const { result } = renderHook(() => useTheme())

    expect(result.current.dark).toBe(false)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})

describe('cookie choice', () => {
  it('is unset on a first visit and remembered afterwards', () => {
    expect(hasAnsweredCookies()).toBe(false)

    rememberCookies()
    expect(hasAnsweredCookies()).toBe(true)
    expect(window.localStorage.getItem(COOKIE_KEY)).toBe('answered')
  })
})
