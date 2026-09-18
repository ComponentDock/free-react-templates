import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferSection } from './OfferSection'

describe('OfferSection', () => {
  it('renders the product title with Hot badge', () => {
    render(<OfferSection />)
    expect(screen.getByText('White T-shirt')).toBeInTheDocument()
    expect(screen.getByText('Hot')).toBeInTheDocument()
  })

  it('renders pricing information', () => {
    render(<OfferSection />)
    expect(screen.getByText('$25.90')).toBeInTheDocument()
    expect(screen.getByText('$15.90')).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<OfferSection />)
    expect(screen.getByRole('link', { name: /Shop Now/i })).toBeInTheDocument()
  })

  it('renders the free shipping notice', () => {
    render(<OfferSection />)
    expect(screen.getByText(/Free shipping until/)).toBeInTheDocument()
  })
})
