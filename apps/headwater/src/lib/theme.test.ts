import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, afterEach, vi } from 'vitest'
import { applyTheme, readTheme, useTheme } from './theme'

const original = window.matchMedia

function stubMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches }),
  })
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.className = ''
  stubMatchMedia(true)
})

afterEach(() => {
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: original })
})

describe('readTheme', () => {
  it('honours a stored dark choice', () => {
    window.localStorage.setItem('theme', 'dark')
    expect(readTheme()).toBe('dark')
  })

  it('honours a stored light choice even when the system is dark', () => {
    window.localStorage.setItem('theme', 'light')
    expect(readTheme()).toBe('light')
  })

  it('follows a dark system preference when nothing is stored', () => {
    expect(readTheme()).toBe('dark')
  })

  it('falls back to light on a light system preference', () => {
    stubMatchMedia(false)
    expect(readTheme()).toBe('light')
  })

  it('falls back to light without matchMedia', () => {
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: undefined })
    expect(readTheme()).toBe('light')
  })
})

describe('applyTheme', () => {
  it('adds and removes the dark class on the document element', () => {
    applyTheme('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    applyTheme('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})

describe('useTheme', () => {
  it('applies and stores the toggled theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
    expect(result.current.isDark).toBe(true)

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('light')
    expect(result.current.isDark).toBe(false)
    expect(window.localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
