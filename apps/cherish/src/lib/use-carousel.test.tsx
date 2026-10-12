import { act, renderHook } from '@testing-library/react'
import { nextIndex, prevIndex, useCarousel } from './use-carousel'

describe('nextIndex and prevIndex — the two steps', () => {
  it('steps forward, and wraps round at the end of the run', () => {
    expect(nextIndex(0, 3)).toBe(1)
    expect(nextIndex(1, 3)).toBe(2)
    expect(nextIndex(2, 3)).toBe(0)
  })

  it('steps back, and wraps round at the start of the run', () => {
    expect(prevIndex(2, 3)).toBe(1)
    expect(prevIndex(1, 3)).toBe(0)
    expect(prevIndex(0, 3)).toBe(2)
  })
})

describe('useCarousel — which card of the run is in view', () => {
  it('opens on the first card, walks both ways and wraps at both ends', () => {
    const { result } = renderHook(() => useCarousel(3))

    expect(result.current.index).toBe(0)

    act(() => {
      result.current.prev()
    })

    expect(result.current.index).toBe(2)

    act(() => {
      result.current.next()
    })

    expect(result.current.index).toBe(0)

    act(() => {
      result.current.next()
    })

    expect(result.current.index).toBe(1)

    act(() => {
      result.current.goTo(2)
    })

    expect(result.current.index).toBe(2)
  })
})
