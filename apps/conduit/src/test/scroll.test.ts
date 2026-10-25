import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  prefersReducedMotion,
  scrollMetrics,
  scrollToTop,
  useScrollMetrics,
} from '../lib/scroll'
import { setScroll, stubMedia, restoreMedia } from './helpers'

describe('scrollMetrics', () => {
  it('turns a scroll position into a percentage, a shadow flag and a top flag', () => {
    expect(scrollMetrics(500, 2000, 1000)).toEqual({ progress: 50, shadow: true, top: true })
  })

  it('clamps at 100 % and reports zero progress when nothing scrolls', () => {
    expect(scrollMetrics(4000, 2000, 1000).progress).toBe(100)
    expect(scrollMetrics(0, 800, 800).progress).toBe(0)
  })

  it('switches the shadow past 50 px and the disc past 300 px, not at them', () => {
    expect(scrollMetrics(50, 2000, 1000)).toMatchObject({ shadow: false, top: false })
    expect(scrollMetrics(51, 2000, 1000)).toMatchObject({ shadow: true, top: false })
    expect(scrollMetrics(300, 2000, 1000)).toMatchObject({ top: false })
    expect(scrollMetrics(301, 2000, 1000)).toMatchObject({ top: true })
  })
})

describe('prefersReducedMotion and scrollToTop', () => {
  it('asks the media query and scrolls smoothly when motion is welcome', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    expect(prefersReducedMotion()).toBe(false)
    scrollToTop()

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('scrolls without animation when motion is reduced', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })
    stubMedia(true)

    expect(prefersReducedMotion()).toBe(true)
    scrollToTop()

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
    restoreMedia()
  })
})

describe('useScrollMetrics', () => {
  it('reads the document on mount and follows every scroll event', () => {
    const { result } = renderHook(() => useScrollMetrics())

    expect(result.current).toEqual({ progress: 0, shadow: false, top: false })

    act(() => setScroll(600, 2600, 600))

    expect(result.current.shadow).toBe(true)
    expect(result.current.top).toBe(true)
    expect(result.current.progress).toBe(30)
  })
})
