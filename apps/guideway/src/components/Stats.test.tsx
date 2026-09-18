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
  it('renders all stat labels and zeroed counters', () => {
    render(<Stats />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
    expect(screen.getByText('Awards Received')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('animates counters to final values when scrolled into view', async () => {
    installFakeTimers()
    render(<Stats />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(true)
      }
    })

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2100)
    })

    expect(screen.getByText('705')).toBeInTheDocument()
    expect(screen.getByText('809')).toBeInTheDocument()
    expect(screen.getByText('335')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
  })

  it('keeps counters at zero when IntersectionObserver never intersects', async () => {
    installFakeTimers()
    render(<Stats />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(false)
      }
    })

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2100)
    })

    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('observes one element per statistic and survives unmount', () => {
    const { unmount } = render(<Stats />)
    expect(MockIntersectionObserver.instances).toHaveLength(4)
    unmount()
  })
})
