import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Discount } from './Discount'

describe('Discount', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the headline, sale label, countdown units and SHOP NOW link', () => {
    render(<Discount />)

    expect(screen.getByRole('heading', { level: 2, name: 'Summer 2030' })).toBeInTheDocument()
    expect(screen.getByText('SALE 50%')).toBeInTheDocument()
    for (const label of ['Days', 'Hours', 'Mins', 'Secs']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Shop Now' })).toBeInTheDocument()
  })

  it('keeps ticking the countdown as time passes', () => {
    render(<Discount />)

    const seconds = screen.getByTestId('countdown-seconds')
    expect(seconds.textContent).toMatch(/^\d+$/)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByTestId('countdown-seconds').textContent).toMatch(/^\d+$/)
  })
})
