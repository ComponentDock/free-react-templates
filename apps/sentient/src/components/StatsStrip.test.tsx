import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { StatsStrip } from './StatsStrip'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = [0]

  observe() {}
  unobserve() {}
  disconnect() {}

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

beforeEach(() => {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

function installFakeTimers() {
  vi.useFakeTimers({
    toFake: [
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'performance',
      'Date',
    ],
  })
}

describe('StatsStrip', () => {
  it('renders four statistics with labels and zeroed counters', () => {
    render(<StatsStrip />)

    for (const label of ['Active Users', 'Uptime SLA', 'API Calls Served', 'User Rating']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('0K+')).toBeInTheDocument()
    expect(screen.getByText('0.00%')).toBeInTheDocument()
    expect(screen.getByText('0.0M+')).toBeInTheDocument()
    expect(screen.getByText('0.0')).toBeInTheDocument()
  })

  it('animates the counters from zero when scrolled into view', async () => {
    installFakeTimers()
    render(<StatsStrip />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(true)
      }
    })
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1700)
    })

    expect(screen.getByText('128K+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
    expect(screen.getByText('2.4M+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })

  it('does not animate counters that are not intersecting', async () => {
    installFakeTimers()
    render(<StatsStrip />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(false)
      }
    })
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1700)
    })

    expect(screen.getByText('0K+')).toBeInTheDocument()
    expect(screen.getByText('0.00%')).toBeInTheDocument()
  })

  it('observes one element per statistic and survives unmount', () => {
    const { unmount } = render(<StatsStrip />)
    expect(MockIntersectionObserver.instances).toHaveLength(4)

    unmount()
    expect(MockIntersectionObserver.instances).toHaveLength(4)
  })
})
