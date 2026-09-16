import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Countdown } from './Countdown'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Countdown', () => {
  it('renders four time units', () => {
    const target = new Date(Date.now() + 86400000).toISOString()
    render(<Countdown targetDate={target} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('displays numeric values for each unit', () => {
    const target = new Date(Date.now() + 86400000 + 3600000 + 60000 + 1000).toISOString()
    render(<Countdown targetDate={target} />)
    const values = screen.getAllByTestId('countdown-value')
    expect(values).toHaveLength(4)
    values.forEach((v) => expect(v.textContent).toMatch(/^\d+$/))
  })

  it('updates values every second', () => {
    const target = new Date(Date.now() + 10000).toISOString()
    render(<Countdown targetDate={target} />)
    const before = screen.getAllByTestId('countdown-value').map((v) => v.textContent)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const after = screen.getAllByTestId('countdown-value').map((v) => v.textContent)
    expect(after).not.toEqual(before)
  })

  it('shows zeros when target date is in the past', () => {
    const target = new Date(Date.now() - 1000).toISOString()
    render(<Countdown targetDate={target} />)
    const values = screen.getAllByTestId('countdown-value')
    values.forEach((v) => expect(v.textContent).toBe('0'))
  })
})
