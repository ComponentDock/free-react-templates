import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { carouselGeometry, perView, useCarousel } from '../lib/carousel'
import {
  prefersReducedMotion,
  scrollMetrics,
  scrollToTop,
  useScrollMetrics,
} from '../lib/scroll'
import { resizeTo, restoreMedia, setScroll, stubMedia } from './helpers'

afterEach(() => {
  restoreMedia()
})

describe('scrollMetrics', () => {
  it('reports the three thresholds and the progress fraction', () => {
    expect(scrollMetrics(0, 2000, 1000)).toEqual({
      progress: 0,
      shadow: false,
      stuck: false,
      top: false,
    })

    expect(scrollMetrics(60, 2000, 1000)).toMatchObject({ shadow: true, stuck: false, top: false })
    expect(scrollMetrics(120, 2000, 1000)).toMatchObject({ stuck: true, top: false })
    expect(scrollMetrics(400, 2000, 1000)).toMatchObject({ stuck: true, top: true })
  })

  it('caps the bar at 100 % and stays at zero when nothing scrolls', () => {
    expect(scrollMetrics(1200, 1000, 800).progress).toBe(100)
    expect(scrollMetrics(500, 800, 800).progress).toBe(0)
  })
})

describe('prefersReducedMotion and scrollToTop', () => {
  it('uses smooth scrolling by default and auto when motion is reduced', () => {
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: scrollTo })

    expect(prefersReducedMotion()).toBe(false)
    scrollToTop()
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    stubMedia(true)
    expect(prefersReducedMotion()).toBe(true)
    scrollToTop()
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})

describe('useScrollMetrics', () => {
  it('follows the scroll listener and cleans up after itself', () => {
    const { result, unmount } = renderHook(() => useScrollMetrics())

    act(() => setScroll(500, 2000, 1000))
    expect(result.current.progress).toBe(50)
    expect(result.current.top).toBe(true)

    act(() => setScroll(0, 2000, 1000))
    expect(result.current.progress).toBe(0)
    expect(result.current.shadow).toBe(false)

    unmount()
  })
})

describe('perView', () => {
  it('is three at lg, two at sm and one on a phone', () => {
    expect(perView(390)).toBe(1)
    expect(perView(639)).toBe(1)
    expect(perView(640)).toBe(2)
    expect(perView(1023)).toBe(2)
    expect(perView(1024)).toBe(3)
  })
})

describe('carouselGeometry', () => {
  it('never occupies more columns than there are slides', () => {
    expect(carouselGeometry(2, 1440)).toEqual({ perView: 2, maxIndex: 0, dots: 0 })
    expect(carouselGeometry(2, 768)).toEqual({ perView: 2, maxIndex: 0, dots: 0 })
    expect(carouselGeometry(2, 390)).toEqual({ perView: 1, maxIndex: 1, dots: 2 })
  })

  it('keeps one column for an empty carousel instead of reporting zero', () => {
    expect(carouselGeometry(0, 1440)).toEqual({ perView: 1, maxIndex: 0, dots: 0 })
  })
})

describe('useCarousel', () => {
  it('moves one slide at a time and clamps at both ends', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const { result } = renderHook(() => useCarousel(2))

    expect(result.current.offset).toBe(0)

    act(() => result.current.next())
    expect(result.current.index).toBe(1)
    expect(result.current.offset).toBe(100)

    act(() => result.current.next())
    expect(result.current.index).toBe(1)

    act(() => result.current.previous())
    expect(result.current.index).toBe(0)

    act(() => result.current.previous())
    expect(result.current.index).toBe(0)

    act(() => result.current.goTo(9))
    expect(result.current.index).toBe(1)

    act(() => result.current.goTo(-3))
    expect(result.current.index).toBe(0)
  })

  it('re-measures on resize and pulls the index back into range', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const { result } = renderHook(() => useCarousel(2))

    act(() => result.current.goTo(1))
    expect(result.current.index).toBe(1)

    act(() => resizeTo(1440))

    expect(result.current.perView).toBe(2)
    expect(result.current.maxIndex).toBe(0)
    expect(result.current.index).toBe(0)
    expect(result.current.dots).toBe(0)
  })
})
