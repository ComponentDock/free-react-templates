import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Programs Completed')).toBeInTheDocument()
    expect(screen.getByText('Success Rate')).toBeInTheDocument()
  })

  it('starts counters at zero', () => {
    render(<StatsCounter />)
    const section = screen.getByText('Happy Clients').closest('section')!
    expect(section).toHaveTextContent('0')
  })

  it('animates counters when in viewport', async () => {
    render(<StatsCounter />)
    // Flush microtasks (observer callback) + advance timers (animation)
    await act(async () => {
      await Promise.resolve()
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('cleans up observer on unmount', () => {
    const { unmount } = render(<StatsCounter />)
    unmount()
  })
})
