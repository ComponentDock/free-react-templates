import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-12T12:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and the four timer columns', () => {
    render(<Countdown />)

    expect(screen.getByRole('heading', { name: 'Next Event will Start in' })).toBeInTheDocument()
    expect(screen.getByText('days')).toBeInTheDocument()
    expect(screen.getByText('hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('seconds')).toBeInTheDocument()
  })

  it('counts down from the fixed offset (89d 14h 45m 30s) and ticks each second', () => {
    render(<Countdown />)

    expect(screen.getByText('89')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('29')).toBeInTheDocument()
    expect(screen.queryByText('30')).not.toBeInTheDocument()
  })

  it('clears its interval on unmount', () => {
    const { unmount } = render(<Countdown />)

    unmount()
    expect(() => vi.advanceTimersByTime(2000)).not.toThrow()
  })
})
