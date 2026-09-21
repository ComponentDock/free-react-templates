import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature items', () => {
    render(<Features />)
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
    expect(screen.getByText('Return Policy')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText('Free shipping on all orders over $50')).toBeInTheDocument()
    expect(screen.getByText('Hassle-free returns within 30 days')).toBeInTheDocument()
  })
})
