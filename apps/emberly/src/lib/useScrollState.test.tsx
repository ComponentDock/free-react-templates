import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readScroll, useScrollState } from './useScrollState'

function setScroll(y: number, height: number, viewport: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: y })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: viewport })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: height,
  })
}

afterEach(() => {
  setScroll(0, 0, 768)
})

describe('readScroll', () => {
  it('reports the offset and the rounded fraction already passed', () => {
    setScroll(400, 6433, 900)
    expect(readScroll()).toEqual({ y: 400, progress: 7 })
  })

  it('never divides by zero on a document shorter than the viewport', () => {
    setScroll(0, 500, 900)
    expect(readScroll()).toEqual({ y: 0, progress: 0 })
  })

  it('caps the bar at a hundred percent', () => {
    setScroll(5000, 1000, 900)
    expect(readScroll().progress).toBe(100)
  })
})

describe('useScrollState', () => {
  it('re-reads on the passive scroll event and unhooks on unmount', () => {
    setScroll(120, 2000, 800)
    const { result, unmount } = renderHook(() => useScrollState())
    expect(result.current).toEqual({ y: 120, progress: 10 })

    setScroll(400, 2000, 800)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toEqual({ y: 400, progress: 33 })

    const remove = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    remove.mockRestore()
  })
})
