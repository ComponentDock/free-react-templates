import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { perViewFor, usePerView } from './perView'

describe('perViewFor', () => {
  it('shows one card on a phone', () => {
    expect(perViewFor(390)).toBe(1)
    expect(perViewFor(767)).toBe(1)
  })

  it('shows two cards from 768 px', () => {
    expect(perViewFor(768)).toBe(2)
    expect(perViewFor(1023)).toBe(2)
  })

  it('shows three cards from 1024 px', () => {
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(1440)).toBe(3)
  })
})

describe('usePerView', () => {
  it('re-reads the breakpoint when the window is resized', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const { result } = renderHook(() => usePerView())
    expect(result.current).toBe(1)

    act(() => {
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: 800 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(2)

    act(() => {
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1280 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(3)
  })
})
