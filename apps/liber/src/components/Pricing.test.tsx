import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading and all three pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText(/Purchase Whatever You Want/i)).toBeInTheDocument()
    expect(screen.getByText('PDF')).toBeInTheDocument()
    expect(screen.getByText('E-Book')).toBeInTheDocument()
    expect(screen.getByText('Print Copy')).toBeInTheDocument()
  })

  it('displays prices and purchase buttons for each tier', () => {
    render(<Pricing />)
    expect(screen.getByText('79.99')).toBeInTheDocument()
    expect(screen.getByText('99.99')).toBeInTheDocument()
    expect(screen.getByText('59.99')).toBeInTheDocument()
    const purchaseButtons = screen.getAllByRole('link', { name: /Purchase Now/i })
    expect(purchaseButtons).toHaveLength(3)
  })
})
