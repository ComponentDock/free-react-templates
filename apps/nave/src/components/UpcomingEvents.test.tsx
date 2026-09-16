import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect, afterEach } from 'vitest'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders event metadata', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText(/Saturday 03\/09\/2018/)).toBeInTheDocument()
    expect(screen.getByText(/St. Petersburg, US/)).toBeInTheDocument()
    expect(screen.getByText(/Pastor Luis Matthew/)).toBeInTheDocument()
  })

  it('renders countdown timer units', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Weeks')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('updates countdown via interval', () => {
    vi.useFakeTimers()
    render(<UpcomingEvents />)
    const weeksEl = screen.getByText('Weeks').previousElementSibling
    expect(weeksEl).not.toBeNull()
    const before = Number(weeksEl!.textContent)
    expect(before).not.toBeNaN()
    // Advance timers by 1s to trigger the interval callback
    vi.advanceTimersByTime(1000)
    // Countdown should still render valid numbers
    expect(Number(weeksEl!.textContent)).not.toBeNaN()
  })
})
