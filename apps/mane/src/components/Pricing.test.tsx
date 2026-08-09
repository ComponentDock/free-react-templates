import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and the four priced tiers', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Our Prices' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hair Style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Manicure Pedicure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Makeup' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Treatment' })).toBeInTheDocument()
  })

  it('shows the per-session price for every tier', () => {
    render(<Pricing />)

    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText('$34.50')).toBeInTheDocument()
    expect(screen.getByText('$54.50')).toBeInTheDocument()
    expect(screen.getByText('$89.50')).toBeInTheDocument()
    expect(screen.getAllByText('/ session')).toHaveLength(4)
  })

  it('renders a Get Offer button for every tier', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('link', { name: 'Get Offer' })).toHaveLength(4)
  })
})
