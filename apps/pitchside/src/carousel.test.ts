import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCarousel } from './carousel'

describe('useCarousel', () => {
  it('cycles next and prev with wrap-around', () => {
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
