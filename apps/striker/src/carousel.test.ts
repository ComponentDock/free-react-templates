import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCarousel, windowed } from './carousel'

describe('carousel helpers', () => {
  it('windowed returns items starting at start with their original indexes', () => {
    const items = ['a', 'b', 'c', 'd'] as const
    expect(windowed(items, 2, 3)).toEqual([
      { item: 'c', index: 2 },
      { item: 'd', index: 3 },
      { item: 'a', index: 0 },
    ])
  })

  it('windowed clamps to the list length when size is larger', () => {
    const items = ['a', 'b'] as const
    expect(windowed(items, 0, 5)).toHaveLength(2)
  })

  it('useCarousel cycles next and prev with wrap-around', () => {
    const { result } = renderHook(() => useCarousel(3))

    expect(result.current.start).toBe(0)
    act(() => result.current.next())
    expect(result.current.start).toBe(1)
    act(() => result.current.next())
    act(() => result.current.next())
    expect(result.current.start).toBe(0)
    act(() => result.current.prev())
    expect(result.current.start).toBe(2)
  })
})
