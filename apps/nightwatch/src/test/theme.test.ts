import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { THEME_KEY, useTheme } from '../lib/theme'

afterEach(() => {
  document.documentElement.classList.remove('dark')
  localStorage.clear()
})

describe('useTheme', () => {
  it('starts light when the pre-paint script did not add the class', () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('light')
  })

  it('reads the class the pre-paint script already applied', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('dark')
  })

  it('flips the class and persists the choice both ways', () => {
    const { result } = renderHook(() => useTheme())

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
  })
})
