import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCountUp } from './useCountUp'
import { mockReducedMotion } from '../test/match-media'

interface FakeEntry {
  isIntersecting: boolean
  target: Element
}

function stubObserver() {
  const captured: { fire?: (entries: FakeEntry[]) => void } = {}

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: (entries: FakeEntry[]) => void) {
        captured.fire = callback
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )

  return captured
}

function stubFrames() {
  let frames = 0
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames += 1
    callback(frames === 1 ? 1000 : 2000)
    return frames
  })
  vi.stubGlobal('cancelAnimationFrame', () => {})
}

describe('useCountUp', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('stays at zero until the element enters the viewport', () => {
    const { result } = renderHook(() => useCountUp(10))

    act(() => {
      result.current.ref(document.createElement('span'))
    })

    expect(result.current.value).toBe(0)
  })

  it('ignores an entry that has not intersected', () => {
    const observer = stubObserver()
    stubFrames()
    const { result } = renderHook(() => useCountUp(10))

    act(() => {
      result.current.ref(document.createElement('span'))
    })
    act(() => {
      observer.fire?.([{ isIntersecting: false, target: document.body }])
    })

    expect(result.current.value).toBe(0)
  })

  it('counts up to the target across animation frames', () => {
    const observer = stubObserver()
    stubFrames()
    const { result } = renderHook(() => useCountUp(100, 1000))

    act(() => {
      result.current.ref(document.createElement('span'))
    })
    act(() => {
      observer.fire?.([{ isIntersecting: true, target: document.body }])
    })

    expect(result.current.value).toBe(100)
  })

  it('jumps straight to the target with reduced motion', () => {
    mockReducedMotion()
    const { result } = renderHook(() => useCountUp(42))

    act(() => {
      result.current.ref(document.createElement('span'))
    })

    expect(result.current.value).toBe(42)
  })

  it('detaches the animation frame on unmount', () => {
    const cancel = vi.fn()
    vi.stubGlobal('cancelAnimationFrame', cancel)

    const { result, unmount } = renderHook(() => useCountUp(10))
    act(() => {
      result.current.ref(document.createElement('span'))
    })
    unmount()

    expect(cancel).toHaveBeenCalled()
  })
})
