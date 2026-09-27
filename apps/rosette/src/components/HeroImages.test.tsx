import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroImages } from './HeroImages'

describe('HeroImages', () => {
  it('renders the portrait image', () => {
    render(<HeroImages />)
    const img = screen.getByRole('img', { name: /portrait/i })
    expect(img).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(<HeroImages />)
    const img = screen.getByRole('img', { name: /products/i })
    expect(img).toBeInTheDocument()
  })

  it('uses seeded picsum URLs for deterministic images', () => {
    render(<HeroImages />)
    const portrait = screen.getByRole('img', { name: /portrait/i })
    expect(portrait).toHaveAttribute('src', 'https://picsum.photos/seed/rosette-portrait/350/450')
    const product = screen.getByRole('img', { name: /products/i })
    expect(product).toHaveAttribute('src', 'https://picsum.photos/seed/rosette-product/300/300')
  })

  it('has object-cover on both images', () => {
    render(<HeroImages />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveClass('object-cover')
    }
  })

  it('is hidden on mobile screens', () => {
    render(<HeroImages />)
    const container = screen.getByRole('img', { name: /portrait/i }).parentElement
    expect(container).toHaveClass('hidden')
  })

  it('renders decorative border elements', () => {
    const { container } = render(<HeroImages />)
    const borders = container.querySelectorAll('.border-brand\\/40')
    expect(borders.length).toBe(2)
  })
})
