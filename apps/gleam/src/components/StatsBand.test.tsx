import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { StatsBand } from './StatsBand'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(_element: Element): void {}

  unobserve(_element: Element): void {}

  disconnect(): void {
    this.disconnected = true
  }

  trigger(entries: Array<Partial<IntersectionObserverEntry>>): void {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
  MockIntersectionObserver.instances = []
})

describe('StatsBand', () => {
  it('shows final values immediately when IntersectionObserver is unavailable (jsdom)', () => {
    render(<StatsBand />)

    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Homes Cleaned')).toBeInTheDocument()
    expect(screen.getByText('Five-Star Reviews')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument()
  })

  it('counts up to the target when the stat scrolls into view', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<StatsBand />)
    expect(screen.getAllByText('0+')).toHaveLength(3)
    expect(screen.getByText('0%')).toBeInTheDocument()

    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: false }])
    })
    expect(screen.getAllByText('0+')).toHaveLength(3)
    expect(screen.getByText('0%')).toBeInTheDocument()

    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })
    act(() => {
      vi.advanceTimersByTime(600)
    })
    expect(screen.queryByText('5000+')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(600)
    })
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(observer.disconnected).toBe(true)
  })

  it('does not restart the count-up on a second intersection', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<StatsBand />)
    const observer = MockIntersectionObserver.instances[0]!
    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })
    act(() => {
      vi.advanceTimersByTime(1200)
    })
    act(() => {
      observer.trigger([{ isIntersecting: true }])
    })
    expect(screen.getByText('5000+')).toBeInTheDocument()
  })

  it('disconnects observers on unmount', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    const { unmount } = render(<StatsBand />)
    const observers = [...MockIntersectionObserver.instances]
    unmount()
    for (const observer of observers) {
      expect(observer.disconnected).toBe(true)
    }
  })
})
