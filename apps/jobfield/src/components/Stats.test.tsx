import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Stats } from './Stats'

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

describe('Stats', () => {
  it('renders four statistics with labels and zeroed counters', () => {
    render(<Stats />)

    for (const label of ['Active Jobs', 'Companies', 'Successful Hires', 'User Rating']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getAllByText('0+')).toHaveLength(2)
    expect(screen.getByText('0K+')).toBeInTheDocument()
    expect(screen.getByText('0.0')).toBeInTheDocument()
  })

  it('animates the counters from zero when scrolled into view', async () => {
    installFakeTimers()
    render(<Stats />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(true)
      }
    })
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1700)
    })

    expect(screen.getByText('2,500+')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
  })

  it('does not animate counters that are not intersecting', async () => {
    installFakeTimers()
    render(<Stats />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(false)
      }
    })
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1700)
    })

    expect(screen.getAllByText('0+')).toHaveLength(2)
    expect(screen.getByText('0K+')).toBeInTheDocument()
    expect(screen.getByText('0.0')).toBeInTheDocument()
  })

  it('observes one element per statistic and survives unmount', () => {
    const { unmount } = render(<Stats />)
    expect(MockIntersectionObserver.instances).toHaveLength(4)

    unmount()
    expect(MockIntersectionObserver.instances).toHaveLength(4)
  })
})
