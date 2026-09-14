import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferBanner } from './OfferBanner'

describe('OfferBanner', () => {
  it('renders the offer heading', () => {
    render(<OfferBanner />)
    expect(screen.getByText('Italian Pizza Offer')).toBeInTheDocument()
  })

  it('displays the discount percentage', () => {
    render(<OfferBanner />)
    expect(screen.getByText('50% OFF')).toBeInTheDocument()
  })

  it('renders a Read More button', () => {
    render(<OfferBanner />)
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders the offer image', () => {
    render(<OfferBanner />)
    expect(screen.getByAltText('Italian pizza special offer')).toBeInTheDocument()
  })
})
