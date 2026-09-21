import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'

/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock useState to control initial countdown value
let mockInitialState: { days: number; hours: number; minutes: number; seconds: number } | null =
  null
vi.mock('react', async () => {
  const actual = await vi.importActual<typeof import('react')>('react')
  return {
    ...actual,
    useState: (initial: any) => {
      if (mockInitialState && typeof initial === 'object' && 'days' in initial) {
        return actual.useState(mockInitialState)
      }
      return actual.useState(initial)
    },
  }
})

import { HotDeal } from './HotDeal'
/* eslint-enable @typescript-eslint/no-explicit-any */

describe('HotDeal', () => {
  afterEach(() => {
    vi.useRealTimers()
    mockInitialState = null
  })

  it('renders deal heading and price', () => {
    render(<HotDeal />)
    expect(screen.getByText('Deal Of The Week')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<HotDeal />)
    expect(screen.getByText('Clothings Hot')).toBeInTheDocument()
    expect(screen.getByText('Shoe Collection')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
  })

  it('renders countdown timer units', () => {
    render(<HotDeal />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders shop now button', () => {
    render(<HotDeal />)
    expect(screen.getByRole('button', { name: /Shop now/i })).toBeInTheDocument()
  })

  it('renders featured product name', () => {
    render(<HotDeal />)
    expect(screen.getByText('Multi-pocket Chest Bag Black')).toBeInTheDocument()
  })

  it('renders sale label', () => {
    render(<HotDeal />)
    expect(screen.getByText('Sale Of')).toBeInTheDocument()
  })

  it('countdown timer decrements seconds', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    expect(screen.getByText('18')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('17')).toBeInTheDocument()
  })

  it('countdown timer handles second rollover to minute', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    act(() => {
      vi.advanceTimersByTime(18000)
    })
    expect(screen.getByText('00')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getAllByText('59').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('49')).toBeInTheDocument()
  })

  it('countdown timer handles minute rollover to hour', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    act(() => {
      vi.advanceTimersByTime(3018000)
    })
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getAllByText('59').length).toBeGreaterThanOrEqual(1)
  })

  it('countdown timer handles hour rollover to day', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    act(() => {
      vi.advanceTimersByTime(6618000)
    })
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('23')).toBeInTheDocument()
  })

  it('countdown timer stops at zero when days go negative', () => {
    vi.useFakeTimers()
    mockInitialState = { days: 0, hours: 0, minutes: 0, seconds: 1 }
    render(<HotDeal />)
    expect(screen.getByText('01')).toBeInTheDocument()
    // Advance 1 second: seconds goes to -1, minutes < 0 → 59, hours < 0 → 23, days < 0 → return {0,0,0,0}
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getAllByText('00').length).toBeGreaterThanOrEqual(1)
    // Advance more — should stay at zero
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.queryByText(/^-/)).not.toBeInTheDocument()
  })
})
