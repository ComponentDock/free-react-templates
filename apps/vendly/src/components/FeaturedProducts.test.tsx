import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'
import { PRODUCTS } from '../data'

describe('FeaturedProducts', () => {
  it('renders the heading with a violet top bar and five product cards', () => {
    const { container } = render(<FeaturedProducts />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Featured Products' })
    expect(heading).toBeInTheDocument()

    /* The 40×2px brand bar sits above the heading. */
    const bar = container.querySelector('span[aria-hidden="true"]')
    expect(bar).toHaveClass('bg-brand', 'h-[2px]', 'w-10')

    const cards = container.querySelectorAll('article')
    expect(cards.length).toBe(PRODUCTS.length)

    for (const product of PRODUCTS) {
      expect(screen.getAllByRole('link', { name: product.name }).length).toBeGreaterThan(0)
      expect(screen.getAllByText(product.tagline).length).toBeGreaterThan(0)
    }
    /* Two Corater cards → both prices are violet and bold. */
    expect(screen.getAllByText('$50').length).toBe(PRODUCTS.length)
    for (const price of screen.getAllByText('$50')) {
      expect(price).toHaveClass('text-brand', 'font-bold')
    }

    /* Every card image is present with the product alt (Corater appears
       twice in the original's placeholder set — match by src, not order). */
    for (const product of PRODUCTS) {
      const images = screen.getAllByRole('img', { name: product.name })
      expect(images.length).toBeGreaterThanOrEqual(1)
      expect(images.some((img) => img.getAttribute('src') === product.image)).toBe(true)
    }
  })
})
