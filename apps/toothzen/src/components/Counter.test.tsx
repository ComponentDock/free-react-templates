import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    globalThis.requestAnimationFrame = ((cb: FrameRequestCallback) => {
      return setTimeout(() => cb(performance.now()), 16) as unknown as number
    }) as typeof requestAnimationFrame
    globalThis.cancelAnimationFrame = ((id: number) =>
      clearTimeout(id)) as typeof cancelAnimationFrame
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the three stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Year Experience')).toBeInTheDocument()
    expect(screen.getByText('Our Staff')).toBeInTheDocument()
    expect(screen.getByText('Services Provided')).toBeInTheDocument()
  })

  it('renders three counter values starting at 0', () => {
    render(<Counter />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(3)
  })

  it('counts up when IntersectionObserver fires', () => {
    render(<Counter />)

    const mockIO = globalThis.IntersectionObserver as unknown as {
      instances: { trigger: (v: boolean) => void }[]
    }

    // Trigger once (starts animation)
    act(() => {
      for (const inst of mockIO.instances) inst.trigger(true)
    })

    // Trigger again (started.current is true, condition is false — covers false branch)
    act(() => {
      for (const inst of mockIO.instances) inst.trigger(true)
    })

    // Advance timers to let animation complete
    act(() => {
      vi.advanceTimersByTime(2100)
    })

    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
  })
})
