import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { perViewFor, usePerView } from './usePerView'

const originalWidth = window.innerWidth

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width })
}

afterEach(() => {
  setWidth(originalWidth)
})

describe('perViewFor', () => {
  it('shows three slides from 1024 px', () => {
    expect(perViewFor(1440)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
  })

  it('shows two slides from 640 px', () => {
    expect(perViewFor(768)).toBe(2)
    expect(perViewFor(640)).toBe(2)
  })

  it('shows one slide below 640 px', () => {
    expect(perViewFor(390)).toBe(1)
  })
})

describe('usePerView', () => {
  it('tracks the viewport across a resize', () => {
    setWidth(1280)
    const { result } = renderHook(() => usePerView())
    expect(result.current).toBe(3)

    act(() => {
      setWidth(390)
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(1)
  })
})
