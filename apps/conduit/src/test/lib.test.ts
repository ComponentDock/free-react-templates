import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { THEME_KEY, useTheme } from '../lib/theme'
import { carouselGeometry, perView, useCarousel } from '../lib/carousel'
import { resizeTo } from './helpers'

describe('useTheme', () => {
  it('starts light and persists an explicit dark choice', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')

    act(() => result.current.toggle())

    expect(result.current.theme).toBe('dark')
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
  })

  it('reads a pre-painted dark class back and toggles to light', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')

    act(() => result.current.toggle())

    expect(result.current.theme).toBe('light')
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
  })
})

describe('perView', () => {
  it('shows three cards at lg, two at sm and one on a phone', () => {
    expect(perView(390)).toBe(1)
    expect(perView(639)).toBe(1)
    expect(perView(640)).toBe(2)
    expect(perView(1023)).toBe(2)
    expect(perView(1024)).toBe(3)
  })
})

describe('carouselGeometry', () => {
  it('has nowhere to move at three per view, so no dots and no arrows', () => {
    expect(carouselGeometry(3, 1440)).toEqual({ perView: 3, maxIndex: 0, dots: 0 })
  })

  it('builds two dots at two per view and three at one', () => {
    expect(carouselGeometry(3, 768)).toEqual({ perView: 2, maxIndex: 1, dots: 2 })
    expect(carouselGeometry(3, 390)).toEqual({ perView: 1, maxIndex: 2, dots: 3 })
  })

  it('never reports a negative index when there are fewer slides than columns', () => {
    expect(carouselGeometry(1, 1440).maxIndex).toBe(0)
  })
})

describe('useCarousel', () => {
  it('moves one slide width at a time and clamps at both ends', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const { result } = renderHook(() => useCarousel(3))

    expect(result.current.index).toBe(0)
    expect(result.current.offset).toBe(0)

    act(() => result.current.next())
    expect(result.current.index).toBe(1)
    expect(result.current.offset).toBe(100)

    act(() => result.current.next())
    act(() => result.current.next())
    expect(result.current.index).toBe(2)

    act(() => result.current.previous())
    expect(result.current.index).toBe(1)

    act(() => result.current.goTo(0))
    expect(result.current.index).toBe(0)

    act(() => result.current.goTo(9))
    expect(result.current.index).toBe(2)

    act(() => result.current.goTo(-4))
    expect(result.current.index).toBe(0)

    act(() => result.current.previous())
    expect(result.current.index).toBe(0)
  })

  it('re-measures on resize and pulls the index back into range', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const { result } = renderHook(() => useCarousel(3))

    act(() => result.current.goTo(2))
    expect(result.current.index).toBe(2)

    act(() => resizeTo(1440))

    expect(result.current.perView).toBe(3)
    expect(result.current.maxIndex).toBe(0)
    expect(result.current.index).toBe(0)
    expect(result.current.dots).toBe(0)
  })
})
