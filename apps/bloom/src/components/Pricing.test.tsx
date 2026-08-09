import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Beauty Pricing' })).toBeInTheDocument()
  })

  it('renders the four tiers with prices and Order Now links', () => {
    render(<Pricing />)

    for (const name of ['Basic', 'Standard', 'Premium', 'Platinum']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('$24.50')).toBeInTheDocument()
    expect(screen.getByText('$39.50')).toBeInTheDocument()
    expect(screen.getByText('$54.50')).toBeInTheDocument()
    expect(screen.getByText('$89.50')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Order Now' })).toHaveLength(4)
  })
})
