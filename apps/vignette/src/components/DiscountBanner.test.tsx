import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiscountBanner } from './DiscountBanner'

describe('DiscountBanner', () => {
  it('renders three promotional offers', () => {
    render(<DiscountBanner />)
    expect(screen.getByText('Free Shipping & Returns')).toBeInTheDocument()
    expect(screen.getByText('20% Discount for all dresses')).toBeInTheDocument()
    expect(screen.getByText('20% Discount for students')).toBeInTheDocument()
  })

  it('renders the BUY NOW link', () => {
    render(<DiscountBanner />)
    expect(screen.getByRole('link', { name: /BUY NOW/i })).toBeInTheDocument()
  })

  it('renders discount codes', () => {
    render(<DiscountBanner />)
    const codes = screen.getAllByText('USE CODE: Vignette')
    expect(codes).toHaveLength(2)
  })
})
