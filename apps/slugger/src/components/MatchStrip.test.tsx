import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { MatchStrip } from './MatchStrip'

describe('MatchStrip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-01-01T00:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the teams, league, round, and countdown units', () => {
    render(<MatchStrip />)
    expect(screen.getByRole('heading', { name: 'Sluggers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jacksonville' })).toBeInTheDocument()
    expect(screen.getByText('Baseball Champions League')).toBeInTheDocument()
    expect(screen.getByText('Semi-Final')).toBeInTheDocument()
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Buy Tickets' })).toBeInTheDocument()
  })

  it('ticks the countdown down every second', () => {
    render(<MatchStrip />)
    const before = screen.getAllByText(/^\d+$/).map((element) => element.textContent)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    const after = screen.getAllByText(/^\d+$/).map((element) => element.textContent)
    expect(after).not.toEqual(before)
  })
})
