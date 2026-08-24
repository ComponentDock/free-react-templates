import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading "You\'ll be in good company"', () => {
    render(<Brands />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/You'll be in good company/)
  })

  it('renders 6 brand placeholders', () => {
    render(<Brands />)
    const brands = [
      'Brand Alpha',
      'Brand Beta',
      'Brand Gamma',
      'Brand Delta',
      'Brand Epsilon',
      'Brand Zeta',
    ]
    for (const name of brands) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the "Meet Our Customers" button', () => {
    render(<Brands />)
    expect(screen.getByRole('link', { name: 'Meet Our Customers' })).toBeInTheDocument()
  })
})
