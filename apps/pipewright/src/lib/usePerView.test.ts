import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { perViewFor, usePerView } from './usePerView'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

afterEach(() => {
  setWidth(1024)
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
})

describe('perViewFor', () => {
  it('gives three at lg, two at sm and one below', () => {
    expect(perViewFor(1440)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(1023)).toBe(2)
    expect(perViewFor(640)).toBe(2)
    expect(perViewFor(639)).toBe(1)
  })
})

describe('usePerView', () => {
  it('reads the viewport once and again on every resize', () => {
    setWidth(1440)
    const { result } = renderHook(() => usePerView())
    expect(result.current).toBe(3)

    setWidth(700)
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(2)
  })
})
