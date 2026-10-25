import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { readScroll, useScrollState } from './useScrollState'

describe('readScroll', () => {
  it('reports the scroll offset and the rounded percentage', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })
    expect(readScroll()).toEqual({ y: 500, progress: 100 })
  })

  it('never divides by zero on an unscrollable document', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    expect(readScroll().progress).toBe(0)
  })
})

describe('useScrollState', () => {
  it('updates on a scroll event', () => {
    const { result } = renderHook(() => useScrollState())

    act(() => {
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 200 })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.y).toBe(200)
  })
})
