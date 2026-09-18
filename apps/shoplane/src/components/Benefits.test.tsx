import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Benefits } from './Benefits'

describe('Benefits', () => {
  it('renders all four benefits', () => {
    render(<Benefits />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Cash on Delivery')).toBeInTheDocument()
    expect(screen.getByText('45 Days Return')).toBeInTheDocument()
    expect(screen.getByText('Opening All Week')).toBeInTheDocument()
  })

  it('renders benefit descriptions', () => {
    render(<Benefits />)
    expect(screen.getByText('Free shipping on all orders over $50')).toBeInTheDocument()
    expect(screen.getByText('Pay when you receive your order')).toBeInTheDocument()
    expect(screen.getByText('Easy returns within 45 days')).toBeInTheDocument()
    expect(screen.getByText('8AM - 09PM')).toBeInTheDocument()
  })
})
