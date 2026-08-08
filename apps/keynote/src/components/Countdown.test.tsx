import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-08T09:00:00-07:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the four countdown units with computed values', () => {
    render(<Countdown />)
    expect(screen.getByText('41')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(3)
    for (const label of ['Days', 'Hours', 'Mins', 'Secs']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('ticks down every second', () => {
    render(<Countdown />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getAllByText('59')).toHaveLength(2)
  })

  it('clears the interval on unmount', () => {
    const { unmount } = render(<Countdown />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.queryByText('41')).not.toBeInTheDocument()
  })
})
