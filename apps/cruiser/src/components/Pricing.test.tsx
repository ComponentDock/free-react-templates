import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plans' })).toBeInTheDocument()
  })

  it('renders all 3 pricing tiers with names and prices', () => {
    render(<Pricing />)

    const tiers = [
      { name: 'Basic', price: '$29' },
      { name: 'Premium', price: '$79' },
      { name: 'Professional', price: '$149' },
    ]

    for (const tier of tiers) {
      expect(screen.getByRole('heading', { level: 3, name: tier.name })).toBeInTheDocument()
      expect(screen.getByText(tier.price)).toBeInTheDocument()
    }
  })

  it('renders monthly period text', () => {
    render(<Pricing />)
    const periods = screen.getAllByText('/month')
    expect(periods).toHaveLength(3)
  })

  it('renders Get Started buttons for each tier', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists for each tier', () => {
    render(<Pricing />)
    expect(screen.getByText('Access to online tutorials')).toBeInTheDocument()
    expect(screen.getByText('Everything in Basic')).toBeInTheDocument()
    expect(screen.getByText('Everything in Premium')).toBeInTheDocument()
  })
})
