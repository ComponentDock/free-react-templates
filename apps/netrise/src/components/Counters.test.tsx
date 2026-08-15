import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'
import { counters } from '../data'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
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

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

describe('Counters', () => {
  afterEach(() => {
    MockIntersectionObserver.instances = []
    vi.unstubAllGlobals()
  })

  it('renders the subheading and all four counters starting at zero', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(<Counters />)
    expect(screen.getByText('More than 100,000 websites hosted')).toBeInTheDocument()
    for (const counter of counters) {
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
    expect(screen.getAllByText('0')).toHaveLength(4)
    act(() => {
      MockIntersectionObserver.instances[0]!.trigger(false)
    })
    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('shows the formatted values once the band scrolls into view', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    render(<Counters />)
    expect(screen.getAllByText('0')).toHaveLength(4)
    act(() => {
      MockIntersectionObserver.instances[0]!.trigger(true)
    })
    expect(screen.getByText('2,000')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('32,000')).toBeInTheDocument()
    expect(screen.getByText('31,998')).toBeInTheDocument()
  })
})
