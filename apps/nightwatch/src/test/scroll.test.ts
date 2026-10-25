import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  prefersReducedMotion,
  scrollMetrics,
  scrollToTop,
  useScrollMetrics,
} from '../lib/scroll'
import { restoreMedia, setScroll, stubMedia } from './helpers'

afterEach(() => {
  restoreMedia()
  vi.restoreAllMocks()
  setScroll(0, 0)
})

describe('scrollMetrics', () => {
  it('splits progress, header shadow and back-to-top thresholds', () => {
    expect(scrollMetrics(0, 4000, 1000)).toEqual({ progress: 0, shadow: false, top: false })
    expect(scrollMetrics(60, 4000, 1000).shadow).toBe(true)
    expect(scrollMetrics(301, 4000, 1000).top).toBe(true)
    expect(scrollMetrics(1500, 4000, 1000).progress).toBeCloseTo(50)
  })

  it('never exceeds one hundred percent and stays at zero on a short page', () => {
    expect(scrollMetrics(9000, 4000, 1000).progress).toBe(100)
    expect(scrollMetrics(400, 800, 1000).progress).toBe(0)
  })
})

describe('prefersReducedMotion', () => {
  it('reads the media query result', () => {
    expect(prefersReducedMotion()).toBe(false)
    stubMedia(true)
    expect(prefersReducedMotion()).toBe(true)
  })
})

describe('scrollToTop', () => {
  it('uses a smooth scroll unless motion is reduced', () => {
    const spy = vi.spyOn(window, 'scrollTo')

    scrollToTop()
    expect(spy).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' })

    stubMedia(true)
    scrollToTop()
    expect(spy).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('useScrollMetrics', () => {
  it('tracks the window while mounted and detaches on unmount', () => {
    const { result, unmount } = renderHook(() => useScrollMetrics())

    expect(result.current).toEqual({ progress: 0, shadow: false, top: false })

    setScroll(2000, 5000, 1000)
    expect(result.current.progress).toBeCloseTo(50)
    expect(result.current.shadow).toBe(true)
    expect(result.current.top).toBe(true)

    unmount()
    setScroll(0, 5000, 1000)
    expect(result.current.top).toBe(true)
  })
})
