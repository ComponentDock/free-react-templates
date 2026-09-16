import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders four time units', () => {
    const target = new Date(Date.now() + 86400000)
    render(<Countdown targetDate={target} />)

    expect(screen.getByRole('timer', { name: /countdown/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/days/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/hours/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/minutes/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/seconds/i)).toBeInTheDocument()
  })

  it('displays numeric values in each circle', () => {
    const target = new Date(Date.now() + 86400000 + 3600000 + 60000 + 1000)
    render(<Countdown targetDate={target} />)

    expect(screen.getByLabelText(/days/i).textContent).toBe('01')
    expect(screen.getByLabelText(/hours/i).textContent).toBe('01')
    expect(screen.getByLabelText(/minutes/i).textContent).toBe('01')
    expect(screen.getByLabelText(/seconds/i).textContent).toBe('01')
  })

  it('updates every second', () => {
    const target = new Date(Date.now() + 55000)
    render(<Countdown targetDate={target} />)

    expect(screen.getByLabelText(/seconds/i).textContent).toBe('55')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByLabelText(/seconds/i).textContent).toBe('54')
  })

  it('shows zeroed values when target is in the past', () => {
    const target = new Date(Date.now() - 1000)
    render(<Countdown targetDate={target} />)

    expect(screen.getByLabelText(/days/i).textContent).toBe('00')
    expect(screen.getByLabelText(/hours/i).textContent).toBe('00')
    expect(screen.getByLabelText(/minutes/i).textContent).toBe('00')
    expect(screen.getByLabelText(/seconds/i).textContent).toBe('00')
  })

  it('responds to target date changes', () => {
    const target1 = new Date(Date.now() + 100000)
    const { rerender } = render(<Countdown targetDate={target1} />)
    expect(screen.getByLabelText(/seconds/i).textContent).not.toBe('00')

    const target2 = new Date(Date.now() - 1)
    rerender(<Countdown targetDate={target2} />)
    expect(screen.getByLabelText(/seconds/i).textContent).toBe('00')
  })
})
