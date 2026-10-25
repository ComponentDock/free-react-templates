import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useReveal } from './useReveal'

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

function installObserver() {
  FakeObserver.instances = []
  vi.stubGlobal('IntersectionObserver', FakeObserver)
  return FakeObserver
}

afterEach(() => {
  vi.unstubAllGlobals()
  FakeObserver.instances = []
})

describe('useReveal', () => {
  it('shows the content when there is no IntersectionObserver (jsdom)', () => {
    const { result } = renderHook(() => useReveal<HTMLDivElement>())
    expect(result.current.shown).toBe(true)
  })

  it('starts hidden and resolves once the band intersects', () => {
    const Observer = installObserver()
    const { result } = renderHook(() => useReveal<HTMLDivElement>())

    expect(result.current.shown).toBe(false)
    const observer = Observer.instances[0]!
    const target = document.createElement('div')
    act(() => {
      observer.callback([{ isIntersecting: false, target, intersectionRatio: 0 }])
    })
    expect(result.current.shown).toBe(false)

    act(() => {
      observer.callback([{ isIntersecting: true, target, intersectionRatio: 0.4 }])
    })
    expect(result.current.shown).toBe(true)
    expect(observer.disconnected).toBe(true)
  })

  it('never starts an observer under reduced motion', () => {
    const Observer = installObserver()
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    const { result } = renderHook(() => useReveal<HTMLDivElement>())
    expect(result.current.shown).toBe(true)
    expect(Observer.instances).toHaveLength(0)
  })

  it('disconnects on unmount', () => {
    const Observer = installObserver()
    const { unmount } = renderHook(() => useReveal<HTMLDivElement>())
    unmount()
    expect(Observer.instances[0]!.disconnected).toBe(true)
  })
})
