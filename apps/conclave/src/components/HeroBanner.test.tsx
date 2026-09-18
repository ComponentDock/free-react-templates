import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the date line, heading, and Buy Ticket button', () => {
    render(<HeroBanner />)
    expect(screen.getByText('20-22 January, 2025, Buffalo City')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /UX Conference 2025/ }),
    ).toBeInTheDocument()
    const buyTicket = screen.getByRole('link', { name: 'Buy Ticket' })
    expect(buyTicket).toHaveAttribute('href', '#pricing')
  })

  it('renders the background image', () => {
    render(<HeroBanner />)
    const bgDiv = document.querySelector('[style*="conclave-hero"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
