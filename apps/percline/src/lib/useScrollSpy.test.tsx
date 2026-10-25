import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useScrollSpy } from './useScrollSpy'

type Entry = { isIntersecting: boolean; target: Element; intersectionRatio: number }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly callback: (entries: Entry[]) => void
  disconnected = false

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe() {}
  disconnect() {
    this.disconnected = true
  }
}

beforeEach(() => {
  FakeObserver.instances = []
  document.body.innerHTML = '<section id="one"></section><section id="two"></section>'
})

afterEach(() => {
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

describe('useScrollSpy', () => {
  it('emphasises nothing where there is no IntersectionObserver', () => {
    const { result } = renderHook(() => useScrollSpy(['one']))
    expect(result.current).toBe('')
  })

  it('reports the most visible intersecting band and ignores the rest', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const { result } = renderHook(() => useScrollSpy(['one', 'two', 'missing']))
    const observer = FakeObserver.instances[0]!

    act(() => {
      observer.callback([])
    })
    expect(result.current).toBe('')

    const one = document.getElementById('one')!
    const two = document.getElementById('two')!

    act(() => {
      observer.callback([
        { isIntersecting: true, target: one, intersectionRatio: 0.3 },
        { isIntersecting: true, target: two, intersectionRatio: 0.7 },
        { isIntersecting: false, target: one, intersectionRatio: 0.9 },
      ])
    })
    expect(result.current).toBe('two')

    act(() => {
      observer.callback([{ isIntersecting: false, target: one, intersectionRatio: 1 }])
    })
    expect(result.current).toBe('two')
  })

  it('disconnects on unmount', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const { unmount } = renderHook(() => useScrollSpy(['one']))
    unmount()
    expect(FakeObserver.instances[0]!.disconnected).toBe(true)
  })
})
