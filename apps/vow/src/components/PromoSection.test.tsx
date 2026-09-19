import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoSection } from './PromoSection'

describe('PromoSection', () => {
  it('renders the section title', () => {
    render(<PromoSection />)
    expect(screen.getByText('promo prices')).toBeInTheDocument()
    expect(screen.getByText('only the best')).toBeInTheDocument()
  })

  it('renders 3 promo cards with Shop Now links', () => {
    render(<PromoSection />)
    const shopLinks = screen.getAllByText('Shop Now')
    expect(shopLinks).toHaveLength(3)
  })

  it('displays discount information', () => {
    render(<PromoSection />)
    expect(screen.getAllByText('-30% off')).toHaveLength(2)
    expect(screen.getByText('-25% off')).toBeInTheDocument()
  })
})
