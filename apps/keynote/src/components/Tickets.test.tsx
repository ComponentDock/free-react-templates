import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tickets } from './Tickets'

describe('Tickets', () => {
  it('renders the heading and all four tiers', () => {
    render(<Tickets />)
    expect(screen.getByRole('heading', { name: /Secure Your Spot/i })).toBeInTheDocument()
    for (const tier of ['Early Access', 'Builder', 'Researcher', 'Enterprise']) {
      expect(screen.getByRole('heading', { name: tier })).toBeInTheDocument()
    }
  })

  it('shows prices, notes and badges', () => {
    render(<Tickets />)
    expect(screen.getByText('$599')).toBeInTheDocument()
    expect(screen.getAllByText('$999')).toHaveLength(2)
    expect(screen.getByText('$1,499')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
    expect(screen.getByText('Sold Out')).toBeInTheDocument()
    expect(screen.getByText('Popular')).toBeInTheDocument()
    expect(screen.getByText(/Limited to first 500 registrants/i)).toBeInTheDocument()
  })

  it('renders a Get Tickets button for available tiers', () => {
    render(<Tickets />)
    expect(screen.getAllByRole('link', { name: /Get Tickets/i })).toHaveLength(3)
  })
})
