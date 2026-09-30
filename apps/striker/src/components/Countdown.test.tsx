import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'

/* System time pinned to 2029-12-30 so the 2030-01-01 target starts at
   exactly 2 days and every tick is deterministic. */
const target = '2030-01-01T00:00:00Z'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2029-12-30T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders five units toward the target date', () => {
    render(<Countdown target={target} />)
    for (const label of ['Weeks', 'Days', 'Hr', 'Min', 'Sec']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    // exactly 2 days remain → "02" days, "00" for the other four units
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(4)
  })

  it('ticks every second and rolls over days/hours/minutes', () => {
    render(<Countdown target={target} />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    // 2 days minus one second → 1 day, 23:59:59
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getAllByText('59')).toHaveLength(2)
  })

  it('cleans up its interval on unmount', () => {
    const { unmount } = render(<Countdown target={target} />)
    expect(vi.getTimerCount()).toBe(1)
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clamps to zero when the target is in the past', () => {
    render(<Countdown target="2020-01-01T00:00:00Z" />)
    expect(screen.getAllByText('00')).toHaveLength(5)
  })

  it('renders a decorative countdown hidden from the accessibility tree', () => {
    render(<Countdown target={target} />)
    expect(screen.getByText('Weeks').closest('[aria-hidden="true"]')).not.toBeNull()
  })
})
