import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this)
    this.callback = callback
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }

  triggerWithUndefinedEntry() {
    this.callback(
      [undefined as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

describe('Counters', () => {
  afterEach(() => {
    MockIntersectionObserver.instances = []
    vi.unstubAllGlobals()
  })

  it('renders all four counter labels starting at zero', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(<Counters />)

    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Countries Served')).toBeInTheDocument()

    // All counters start at 0
    const zeros = screen.getAllByText('0+')
    expect(zeros.length).toBe(4)
  })

  it('animates counters when they come into view', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(<Counters />)

    // Trigger intersection for all observer instances
    act(() => {
      for (const instance of MockIntersectionObserver.instances) {
        instance.trigger(true)
      }
    })

    // Advance timers to complete animation
    act(() => {
      vi.advanceTimersByTime(2100)
    })

    expect(screen.getByText('350+')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('ignores observer callback with undefined entry', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(<Counters />)

    // Trigger with undefined entry — should not crash and counters stay at 0
    act(() => {
      for (const instance of MockIntersectionObserver.instances) {
        instance.triggerWithUndefinedEntry()
      }
    })

    const zeros = screen.getAllByText('0+')
    expect(zeros.length).toBe(4)
  })
})
