import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tickets } from './Tickets'

describe('Tickets', () => {
  it('renders the heading, eyebrow and all four tiers', () => {
    render(<Tickets />)
    expect(screen.getByText('Limited Availability')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Your Tickets' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Early Bird' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Regular' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'VIP' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Team' })).toBeInTheDocument()
  })

  it('shows prices and the sold-out state for Early Bird', () => {
    render(<Tickets />)
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getAllByText('$499').length).toBeGreaterThan(0)
    expect(screen.getByText('$899')).toBeInTheDocument()
    expect(screen.getByText('$1899')).toBeInTheDocument()

    expect(screen.getAllByText('Sold Out').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /sold out/i })).toBeDisabled()
  })

  it('highlights the Regular tier as Most Popular with a working CTA', () => {
    render(<Tickets />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get regular pass/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get vip pass/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get team pass/i })).toBeInTheDocument()
  })

  it('renders the trust strip with icon items', () => {
    render(<Tickets />)
    for (const item of ['Secure checkout', '30-day refund policy', 'Instant confirmation']) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})
