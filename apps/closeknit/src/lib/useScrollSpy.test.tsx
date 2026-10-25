import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useScrollSpy } from './useScrollSpy'

class Observer {
  static last: Observer | null = null
  callback: IntersectionObserverCallback
  observed: Element[] = []
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }
  observe(element: Element) {
    this.observed.push(element)
  }
  disconnect() {
    this.observed = []
  }
  unobserve() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

const IDS = ['feed', 'circles']

function entry(id: string, isIntersecting: boolean, ratio: number) {
  return {
    isIntersecting,
    intersectionRatio: ratio,
    target: { id },
  } as unknown as IntersectionObserverEntry
}

afterEach(() => {
  Observer.last = null
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

describe('useScrollSpy', () => {
  it('returns an empty id when no observer exists', () => {
    const { result } = renderHook(() => useScrollSpy(IDS))
    expect(result.current).toBe('')
  })

  it('emphasises the most visible intersecting band', () => {
    document.body.innerHTML = '<div id="feed"></div><div id="circles"></div>'
    vi.stubGlobal('IntersectionObserver', Observer)
    const { result } = renderHook(() => useScrollSpy(IDS))

    expect(Observer.last?.observed).toHaveLength(2)

    act(() => {
      Observer.last?.callback(
        [entry('feed', false, 0.9), entry('circles', true, 0.2), entry('feed', true, 0.6)],
        Observer.last as unknown as IntersectionObserver,
      )
    })

    expect(result.current).toBe('feed')
  })

  it('keeps the previous id when nothing intersects', () => {
    document.body.innerHTML = '<div id="feed"></div>'
    vi.stubGlobal('IntersectionObserver', Observer)
    const { result } = renderHook(() => useScrollSpy(['feed']))

    act(() => {
      Observer.last?.callback(
        [entry('feed', true, 0.5)],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(result.current).toBe('feed')

    act(() => {
      Observer.last?.callback(
        [entry('feed', false, 0.1)],
        Observer.last as unknown as IntersectionObserver,
      )
    })
    expect(result.current).toBe('feed')
  })

  it('observes only the ids that exist on the page', () => {
    document.body.innerHTML = '<div id="feed"></div>'
    vi.stubGlobal('IntersectionObserver', Observer)
    renderHook(() => useScrollSpy(['feed', 'missing']))

    expect(Observer.last?.observed).toHaveLength(1)
  })
})
