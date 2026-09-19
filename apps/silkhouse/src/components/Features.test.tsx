import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features section', () => {
    render(<Features />)
    expect(screen.getByRole('region', { name: /features/i })).toBeInTheDocument()
  })

  it('renders 4 feature items', () => {
    render(<Features />)
    expect(screen.getByText('Fast & Free Delivery')).toBeInTheDocument()
    expect(screen.getByText('Return Policy')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText('Free delivery on all orders over $50')).toBeInTheDocument()
    expect(screen.getByText('Easy returns within 30 days')).toBeInTheDocument()
    expect(screen.getByText('Online support around the clock')).toBeInTheDocument()
    expect(screen.getByText('100% secure payment processing')).toBeInTheDocument()
  })
})
