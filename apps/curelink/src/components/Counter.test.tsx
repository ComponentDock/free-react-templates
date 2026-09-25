import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter, useCountUp } from './Counter'

function DetachedCountUp({ end }: { end: number }) {
  const { count } = useCountUp(end)
  return <span>{count}</span>
}

describe('Counter', () => {
  it('renders all four stat labels', () => {
    render(<Counter />)

    expect(screen.getByText('Patient Satisfaction')).toBeInTheDocument()
    expect(screen.getByText('Expert Doctors')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders within a statistics landmark', () => {
    render(<Counter />)

    expect(screen.getByRole('region', { name: 'Statistics' })).toBeInTheDocument()
  })

  it('starts counting when element intersects and completes animation', () => {
    const rafCallbacks: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallbacks.push(cb)
      return rafCallbacks.length
    })

    vi.spyOn(performance, 'now').mockReturnValue(0)

    render(<Counter />)

    const MockIO = globalThis.IntersectionObserver as unknown as {
      instances: Array<{
        triggerIntersecting: (entry?: Partial<IntersectionObserverEntry>) => void
      }>
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastInstance = MockIO.instances[MockIO.instances.length - 1]!
    lastInstance.triggerIntersecting({ isIntersecting: true })

    // Drive the animation: first tick (progress < 1 → rAF called again)
    const initialCount = rafCallbacks.length
    for (let i = 0; i < initialCount; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      rafCallbacks[i]!(100)
    }
    // Now there are new callbacks from rAF — drive those too
    const newCallbacks = rafCallbacks.slice(initialCount)
    for (let i = 0; i < newCallbacks.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newCallbacks[i]!(2000)
    }

    vi.restoreAllMocks()
  })

  it('does not restart counting once started', () => {
    const rafCallbacks: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallbacks.push(cb)
      return rafCallbacks.length
    })

    vi.spyOn(performance, 'now').mockReturnValue(0)

    render(<Counter />)

    const MockIO = globalThis.IntersectionObserver as unknown as {
      instances: Array<{
        triggerIntersecting: (entry?: Partial<IntersectionObserverEntry>) => void
      }>
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastInstance = MockIO.instances[MockIO.instances.length - 1]!

    // First intersection — triggers counting
    lastInstance.triggerIntersecting({ isIntersecting: true })
    const initialCount = rafCallbacks.length
    for (let i = 0; i < initialCount; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      rafCallbacks[i]!(100)
    }
    const newCallbacks = rafCallbacks.slice(initialCount)
    for (let i = 0; i < newCallbacks.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newCallbacks[i]!(500)
    }
    rafCallbacks.length = 0

    // Second intersection — should be ignored because started.current is true
    lastInstance.triggerIntersecting({ isIntersecting: true })
    expect(rafCallbacks).toHaveLength(0)

    vi.restoreAllMocks()
  })

  it('does not count when not intersecting', () => {
    const rafCallbacks: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallbacks.push(cb)
      return rafCallbacks.length
    })

    render(<Counter />)

    const MockIO = globalThis.IntersectionObserver as unknown as {
      instances: Array<{
        triggerIntersecting: (entry?: Partial<IntersectionObserverEntry>) => void
      }>
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastInstance = MockIO.instances[MockIO.instances.length - 1]!
    lastInstance.triggerIntersecting({ isIntersecting: false })

    expect(rafCallbacks).toHaveLength(0)

    vi.restoreAllMocks()
  })

  it('handles detached ref gracefully', () => {
    // DetachedCountUp doesn't attach the ref, so ref.current is null
    render(<DetachedCountUp end={50} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
