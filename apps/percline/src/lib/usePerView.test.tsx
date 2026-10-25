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
  it('is 3 / 2 / 1 across the reference breakpoints', () => {
    expect(perViewFor(1440)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(760)).toBe(2)
    expect(perViewFor(640)).toBe(2)
    expect(perViewFor(390)).toBe(1)
  })
})

describe('usePerView', () => {
  it('follows the viewport as it is resized', () => {
    setWidth(390)
    const { result } = renderHook(() => usePerView())
    expect(result.current).toBe(1)

    act(() => {
      setWidth(760)
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(2)

    act(() => {
      setWidth(1440)
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(3)
  })
})
