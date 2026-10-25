import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readScroll, useScrollState } from './useScrollState'

function setMetrics(scrollY: number, scrollHeight: number, innerHeight = 1000) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: innerHeight })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
}

afterEach(() => {
  setMetrics(0, 0)
})

describe('readScroll', () => {
  it('reports the pixel offset and the percentage passed', () => {
    setMetrics(500, 2000)
    expect(readScroll()).toEqual({ y: 500, progress: 50 })
  })

  it('never divides by zero on a document shorter than the viewport', () => {
    setMetrics(0, 200)
    expect(readScroll()).toEqual({ y: 0, progress: 0 })
  })

  it('clamps at 100 %', () => {
    setMetrics(4000, 2000)
    expect(readScroll().progress).toBe(100)
  })
})

describe('useScrollState', () => {
  it('re-reads the metrics on every scroll', () => {
    setMetrics(0, 3000)
    const { result } = renderHook(() => useScrollState())
    expect(result.current).toEqual({ y: 0, progress: 0 })

    act(() => {
      setMetrics(1000, 3000)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toEqual({ y: 1000, progress: 50 })
  })

  it('removes its listener on unmount', () => {
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollState())
    unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    remove.mockRestore()
  })
})
