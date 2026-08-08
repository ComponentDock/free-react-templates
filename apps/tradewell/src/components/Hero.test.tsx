import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, badge, and call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Invest Smarter')
    expect(heading.textContent).toContain('Trade Better')
    expect(screen.getByText('$0 Commission Trading')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Investing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Demo' })).toBeInTheDocument()
  })

  it('shows the social proof rating with review count', () => {
    render(<Hero />)

    expect(screen.getByText(/4\.9\/5/)).toBeInTheDocument()
    expect(screen.getByText(/50K\+ reviews/)).toBeInTheDocument()
  })

  it('renders a phone mockup with portfolio value, chart, and holdings', () => {
    render(<Hero />)

    const mockup = screen.getByLabelText('Portfolio preview')
    expect(within(mockup).getByText('$47,382.54')).toBeInTheDocument()
    expect(within(mockup).getByText('AAPL')).toBeInTheDocument()
    expect(within(mockup).getByText('BTC')).toBeInTheDocument()
    expect(within(mockup).getByText('NVDA')).toBeInTheDocument()
    expect(within(mockup).getByText('SPY')).toBeInTheDocument()
    expect(within(mockup).getByText('Bought 5 TSLA')).toBeInTheDocument()
  })
})
