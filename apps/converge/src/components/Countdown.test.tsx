import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  it('renders all time units', () => {
    render(<Countdown />)
    expect(screen.getByTestId('days')).toBeInTheDocument()
    expect(screen.getByTestId('hours')).toBeInTheDocument()
    expect(screen.getByTestId('minutes')).toBeInTheDocument()
    expect(screen.getByTestId('seconds')).toBeInTheDocument()
  })

  it('renders unit labels', () => {
    render(<Countdown />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('counts down each second', async () => {
    vi.useFakeTimers()
    const target = new Date(Date.now() + 5000)
    render(<Countdown targetDate={target} />)
    const seconds = screen.getByTestId('seconds')
    expect(seconds.textContent).toBe('05')

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(seconds.textContent).toBe('03')

    vi.useRealTimers()
  })

  it('shows 00:00:00:00 when target is past', () => {
    const past = new Date(Date.now() - 10000)
    render(<Countdown targetDate={past} />)
    expect(screen.getByTestId('days').textContent).toBe('00')
    expect(screen.getByTestId('hours').textContent).toBe('00')
    expect(screen.getByTestId('minutes').textContent).toBe('00')
    expect(screen.getByTestId('seconds').textContent).toBe('00')
  })
})
