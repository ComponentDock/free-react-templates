import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading with a subtitle', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Choose Your Package' })).toBeInTheDocument()
    expect(screen.getByText(/transparent pricing, no hidden extras/i)).toBeInTheDocument()
  })

  it('shows three package cards with prices, lists, and order buttons', () => {
    render(<Pricing />)

    const expectations: Array<[string, string]> = [
      ['Basic', '$79.00'],
      ['Premium', '$89.00'],
      ['Luxury', '$99.00'],
    ]
    for (const [name, price] of expectations) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByText(price)).toBeInTheDocument()
      expect(screen.getAllByText('Standard Package')).toHaveLength(3)
    }

    for (const item of ['Basic Hair Cut', 'Basic Body Massage', 'Luxury Snacks']) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Order Now' })).toHaveLength(3)
  })

  it('highlights the Premium card as the active package', () => {
    render(<Pricing />)

    const premium = screen.getByRole('heading', { name: 'Premium' }).closest('[data-active="true"]')
    expect(premium).not.toBeNull()
    expect(screen.queryByText('Basic')?.closest('[data-active="true"]')).toBeNull()
  })
})
