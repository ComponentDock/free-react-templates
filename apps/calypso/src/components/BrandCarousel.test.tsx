import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandCarousel } from './BrandCarousel'

describe('BrandCarousel', () => {
  it('renders the section', () => {
    render(<BrandCarousel />)
    expect(screen.getByTestId('brand-carousel')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<BrandCarousel />)
    expect(screen.getByText('Trusted By')).toBeInTheDocument()
  })

  it('renders all six brand items', () => {
    render(<BrandCarousel />)
    const brands = [
      'Brand Alpha',
      'Brand Beta',
      'Brand Gamma',
      'Brand Delta',
      'Brand Epsilon',
      'Brand Zeta',
    ]
    brands.forEach((brand) => {
      expect(screen.getByText(brand)).toBeInTheDocument()
    })
  })
})
