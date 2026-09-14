import { describe, expect, it } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrolled } from './useScrolled'

describe('useScrolled', () => {
  it('returns false when scrollY is below threshold', () => {
    const { result } = renderHook(() => useScrolled(50))
    expect(result.current).toBe(false)
  })

  it('returns true when scrollY exceeds threshold', () => {
    const { result } = renderHook(() => useScrolled(50))
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })

  it('returns false when scrollY is exactly at threshold', () => {
    const { result } = renderHook(() => useScrolled(50))
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(false)
  })
})
