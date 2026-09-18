import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferBanner } from './OfferBanner'

describe('OfferBanner', () => {
  it('renders the offer headline and CTA', () => {
    render(<OfferBanner />)
    expect(screen.getByText(/All Men's Collection/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /50% Off/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Discover Now/i })).toBeInTheDocument()
  })

  it('renders the limited time text', () => {
    render(<OfferBanner />)
    expect(screen.getByText(/Limited Time Offer/i)).toBeInTheDocument()
  })
})
