import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide headline', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Nest Protect: 2nd Gen Smoke + CO Alarm')).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<HeroBanner />)
    const indicators = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(indicators).toHaveLength(3)
  })

  it('navigates to a slide when indicator is clicked', () => {
    render(<HeroBanner />)
    const indicators = screen.getAllByRole('button', { name: /Go to slide/ })
    const secondIndicator = indicators[1]
    expect(secondIndicator).toBeDefined()
    fireEvent.click(secondIndicator!)
    expect(screen.getByText('Smart Home Devices That Will Change Your Life')).toBeInTheDocument()
  })

  it('auto-advances slides', () => {
    render(<HeroBanner />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Smart Home Devices That Will Change Your Life')).toBeInTheDocument()
  })

  it('renders category badge, date, and comments', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Gadgets')).toBeInTheDocument()
    expect(screen.getByText('March 14, 2018')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })
})
