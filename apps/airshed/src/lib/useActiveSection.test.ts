import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { useActiveSection } from './useActiveSection'

type Entry = { isIntersecting: boolean; intersectionRatio: number; target: { id: string } }

const original = globalThis.IntersectionObserver

class FakeObserver {
  static instances: FakeObserver[] = []
  readonly observed: Element[] = []
  disconnected = false
  constructor(
    readonly callback: (entries: Entry[]) => void,
    readonly options?: IntersectionObserverInit,
  ) {
    FakeObserver.instances.push(this)
  }
  observe(node: Element) {
    this.observed.push(node)
  }
  disconnect() {
    this.disconnected = true
  }
}

function withSections(ids: readonly string[]) {
  document.body.innerHTML = ids.map((id) => `<section id="${id}"></section>`).join('')
}

afterEach(() => {
  FakeObserver.instances = []
  globalThis.IntersectionObserver = original
  document.body.innerHTML = ''
})

describe('useActiveSection', () => {
  it('marks the most visible band as it scrolls into view', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    withSections(['a', 'b'])
    const { result } = renderHook(() => useActiveSection(['a', 'b']))

    const observer = FakeObserver.instances[0]!
    expect(observer.observed).toHaveLength(2)
    expect(observer.options?.rootMargin).toBe('-40% 0px -50% 0px')

    act(() => {
      observer.callback([
        { isIntersecting: false, intersectionRatio: 0, target: { id: 'a' } },
        { isIntersecting: true, intersectionRatio: 0.4, target: { id: 'b' } },
        { isIntersecting: true, intersectionRatio: 0.8, target: { id: 'a' } },
      ])
    })

    expect(result.current).toBe('a')
  })

  it('keeps the higher-ratio band when a later entry is less visible', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    withSections(['a', 'b'])
    const { result } = renderHook(() => useActiveSection(['a', 'b']))

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, intersectionRatio: 0.9, target: { id: 'a' } },
        { isIntersecting: true, intersectionRatio: 0.2, target: { id: 'b' } },
      ])
    })

    expect(result.current).toBe('a')
  })

  it('ignores entries with nothing intersecting and targets without an id', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    withSections(['a'])
    const { result } = renderHook(() => useActiveSection(['a']))

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: false, intersectionRatio: 0, target: { id: 'a' } },
      ])
    })
    expect(result.current).toBeNull()

    act(() => {
      FakeObserver.instances[0]!.callback([
        { isIntersecting: true, intersectionRatio: 0.5, target: { id: '' } },
      ])
    })
    expect(result.current).toBeNull()
  })

  it('skips ids that are not on the page and disconnects on unmount', () => {
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver
    withSections(['a'])
    const { unmount } = renderHook(() => useActiveSection(['a', 'missing']))

    expect(FakeObserver.instances[0]!.observed).toHaveLength(1)
    unmount()
    expect(FakeObserver.instances[0]!.disconnected).toBe(true)
  })

  it('does nothing without IntersectionObserver', () => {
    globalThis.IntersectionObserver = undefined as unknown as typeof IntersectionObserver
    withSections(['a'])
    const { result } = renderHook(() => useActiveSection(['a']))
    expect(result.current).toBeNull()
  })
})
