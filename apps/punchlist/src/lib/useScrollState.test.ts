import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readScroll, useScrollState } from './useScrollState'
import { useActiveSection } from './useActiveSection'

const originalObserver = globalThis.IntersectionObserver

afterEach(() => {
  globalThis.IntersectionObserver = originalObserver
})

describe('readScroll', () => {
  it('reports the offset and the rounded percentage passed', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
    expect(readScroll()).toEqual({ y: 500, progress: 50 })
  })

  it('never divides by zero on a document that does not scroll', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 800,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 })
    expect(readScroll()).toEqual({ y: 0, progress: 0 })
  })
})

describe('useScrollState', () => {
  it('updates on a passive scroll and detaches on unmount', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 3000,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })

    const remove = vi.spyOn(window, 'removeEventListener')
    const { result, unmount } = renderHook(() => useScrollState())
    expect(result.current.y).toBe(0)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 1000 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.y).toBe(1000)
    expect(result.current.progress).toBe(50)

    unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})

type Entry = { isIntersecting: boolean; intersectionRatio: number; target: Element }

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  disconnected = false
  constructor(readonly callback: (entries: Entry[]) => void) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {
    this.disconnected = true
  }
}

describe('useActiveSection', () => {
  it('stays null when IntersectionObserver is missing', () => {
    const { result } = renderHook(() => useActiveSection(['rates']))
    expect(result.current).toBeNull()
  })

  it('marks the most visible band and ignores the rest', () => {
    FakeObserver.instances = []
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    document.body.innerHTML = '<section id="rates"></section><section id="work"></section>'
    const { result, unmount } = renderHook(() => useActiveSection(['rates', 'work', 'faq']))

    const observer = FakeObserver.instances[0]!
    expect(observer.observed).toHaveLength(2)

    act(() => {
      observer.callback([
        { isIntersecting: false, intersectionRatio: 0.9, target: { id: 'rates' } as Element },
        { isIntersecting: true, intersectionRatio: 0.3, target: { id: 'work' } as Element },
        { isIntersecting: true, intersectionRatio: 0.7, target: { id: 'faq' } as Element },
        { isIntersecting: true, intersectionRatio: 0.2, target: { id: 'work' } as Element },
      ])
    })
    expect(result.current).toBe('faq')

    act(() => {
      observer.callback([
        { isIntersecting: true, intersectionRatio: 0.1, target: { id: 'rates' } as Element },
      ])
    })
    expect(result.current).toBe('rates')

    act(() => {
      observer.callback([
        { isIntersecting: true, intersectionRatio: 0.2, target: { id: '' } as Element },
      ])
    })
    expect(result.current).toBe('rates')

    unmount()
    expect(observer.disconnected).toBe(true)
    document.body.innerHTML = ''
  })
})
