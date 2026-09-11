import { useState } from 'react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { StatsCounter, useCountUp } from './StatsCounter'

class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe(el: Element) {
    this.callback(
      [{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
  unobserve() {}
  disconnect() {}
}

// Mock that fires with isIntersecting=false first, then true
class MockIntersectionObserverDelayed {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe(el: Element) {
    // Fire with false first
    this.callback(
      [{ isIntersecting: false, target: el } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
    // Then fire with true
    this.callback(
      [{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
  unobserve() {}
  disconnect() {}
}

function getCounterValues() {
  return screen.getAllByText((_, el) => {
    return el?.textContent?.trim().match(/^\d+\+?$/) !== null
  })
}

function HookTest({ target }: { target: number }) {
  const [start, setStart] = useState(false)
  const count = useCountUp(target, start)
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setStart(true)}>Start</button>
    </div>
  )
}

describe('useCountUp hook', () => {
  let frameCb: FrameRequestCallback | null = null
  let fakeTime = 0

  beforeEach(() => {
    frameCb = null
    fakeTime = 0
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      frameCb = cb
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', () => {
      frameCb = null
    })
    vi.stubGlobal('performance', { now: () => fakeTime })
  })
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  function advanceFrames(steps: number, msPerStep = 100) {
    for (let i = 0; i < steps; i++) {
      fakeTime += msPerStep
      if (frameCb) {
        const cb = frameCb
        frameCb = null
        act(() => {
          cb(fakeTime)
        })
      }
    }
  }

  it('starts at 0 when start is false', () => {
    render(<HookTest target={100} />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('counts up to target when started', () => {
    render(<HookTest target={100} />)
    act(() => {
      screen.getByRole('button', { name: /Start/i }).click()
    })
    advanceFrames(21, 100)
    expect(screen.getByTestId('count')).toHaveTextContent('100')
  })

  it('cancels animation frame on unmount', () => {
    const cancelSpy = vi.fn()
    vi.stubGlobal('cancelAnimationFrame', cancelSpy)
    const { unmount } = render(<HookTest target={100} />)
    act(() => {
      screen.getByRole('button', { name: /Start/i }).click()
    })
    advanceFrames(1, 100)
    unmount()
    expect(cancelSpy).toHaveBeenCalled()
  })
})

describe('StatsCounter', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders all 4 counter labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })

  it('renders counter values starting at 0', () => {
    render(<StatsCounter />)
    const counters = getCounterValues()
    expect(counters.length).toBe(4)
    counters.forEach((c) => expect(c.textContent?.trim()).toBe('0+'))
  })

  it('does not start counting when not intersected', () => {
    class NoOpObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', NoOpObserver)
    render(<StatsCounter />)
    const counters = getCounterValues()
    expect(counters.length).toBe(4)
    counters.forEach((c) => expect(c.textContent?.trim()).toBe('0+'))
  })

  it('handles non-intersecting entry before intersecting', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserverDelayed)
    render(<StatsCounter />)
    const counters = getCounterValues()
    expect(counters.length).toBe(4)
  })
})
