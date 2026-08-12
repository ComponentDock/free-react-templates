import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Counter } from './Counter'

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = []

  readonly root = null
  readonly rootMargin = ''
  readonly scrollMargin = ''
  readonly thresholds = [0.3]

  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  trigger(entries: Partial<IntersectionObserverEntry>[]): void {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

const finalStats: Array<[string, string]> = [
  ['305', 'Area Population'],
  ['1090', 'Total Properties'],
  ['209', 'Average House'],
  ['67', 'Total Branches'],
]

describe('Counter', () => {
  afterEach(() => {
    MockIntersectionObserver.instances = []
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('renders four stats that count up when scrolled into view', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<Counter />)

    // Numbers start at zero before the section is observed as visible.
    expect(screen.getAllByText('0')).toHaveLength(4)

    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })

    act(() => {
      vi.advanceTimersByTime(1600)
    })

    for (const [value, label] of finalStats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('does not animate while the section is not intersecting', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<Counter />)

    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: false }])
    })
    act(() => {
      vi.advanceTimersByTime(1600)
    })

    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('ignores an empty entries array', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<Counter />)

    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([])
    })
    act(() => {
      vi.advanceTimersByTime(1600)
    })

    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('falls back to final values when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)

    render(<Counter />)

    for (const [value, label] of finalStats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
