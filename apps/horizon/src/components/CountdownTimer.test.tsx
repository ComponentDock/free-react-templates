import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { CountdownTimer } from './CountdownTimer'

describe('CountdownTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four time units', () => {
    vi.setSystemTime(new Date('2026-06-15T12:00:00'))
    render(<CountdownTimer targetDate="2026/07/01" />)

    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('has a timer role with accessible label', () => {
    vi.setSystemTime(new Date('2026-06-15T12:00:00'))
    render(<CountdownTimer targetDate="2026/07/01" />)

    expect(screen.getByRole('timer', { name: /countdown timer/i })).toBeInTheDocument()
  })

  it('displays a positive number of remaining days', () => {
    vi.setSystemTime(new Date('2026-06-15T12:00:00'))
    render(<CountdownTimer targetDate="2026/07/01" />)

    const daysSpan = screen.getByText('Days').closest('div')!.querySelector('span:first-child')!
    const days = Number.parseInt(daysSpan.textContent!, 10)
    expect(days).toBeGreaterThan(0)
    expect(days).toBeLessThanOrEqual(16)
  })

  it('displays zeroed values when target date has passed', () => {
    vi.setSystemTime(new Date('2030-01-01T00:00:00'))
    render(<CountdownTimer targetDate="2027/01/01" />)

    const timers = screen.getAllByText('00')
    expect(timers.length).toBe(4)
  })

  it('updates the countdown when time advances', () => {
    vi.setSystemTime(new Date('2026-06-30T23:59:50'))
    render(<CountdownTimer targetDate="2026/07/01" />)

    const getSeconds = () => {
      const timer = screen.getByRole('timer')
      const spans = timer.querySelectorAll('span')
      return Number.parseInt(spans[6]!.textContent!, 10)
    }

    const initial = getSeconds()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    const after = getSeconds()
    expect(after).toBe(initial - 5)
  })
})
