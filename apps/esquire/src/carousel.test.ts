import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCarousel } from './carousel'

describe('useCarousel', () => {
  it('starts at the first slide', () => {
    const { result } = renderHook(() => useCarousel(3))
    expect(result.current.start).toBe(0)
  })

  it('advances and wraps around with next', () => {
    const { result } = renderHook(() => useCarousel(3))
    act(() => result.current.next())
    expect(result.current.start).toBe(1)
    act(() => result.current.next())
    act(() => result.current.next())
    expect(result.current.start).toBe(0)
  })

  it('goes back and wraps with prev', () => {
    const { result } = renderHook(() => useCarousel(3))
    act(() => result.current.prev())
    expect(result.current.start).toBe(2)
  })

  it('jumps to an explicit index with goTo', () => {
    const { result } = renderHook(() => useCarousel(4))
    act(() => result.current.goTo(2))
    expect(result.current.start).toBe(2)
  })
})
