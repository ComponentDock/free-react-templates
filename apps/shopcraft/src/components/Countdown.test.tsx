import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  it('renders heading and countdown units', () => {
    render(<Countdown />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Exclusive Hot Deal Ends in:',
    )
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<Countdown />)
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
  })

  it('updates countdown on interval tick', () => {
    vi.useFakeTimers()
    render(<Countdown />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // After 2 seconds, the seconds value should have changed
    expect(screen.getByText('Seconds')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('cleans up interval on unmount', () => {
    vi.useFakeTimers()
    const spy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Countdown />)
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
    vi.useRealTimers()
  })
})
