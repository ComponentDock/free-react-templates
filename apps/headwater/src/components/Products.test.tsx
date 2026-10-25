import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Products } from './Products'
import { PRODUCTS } from '../content'

describe('Products', () => {
  it('renders the head and four catalogue cards in order', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(PRODUCTS.heading)
    expect(screen.getByText(PRODUCTS.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(PRODUCTS.lede)).toBeInTheDocument()

    const cards = document.querySelectorAll('[data-product-card]')
    expect(Array.from(cards).map((card) => card.id)).toEqual([
      'product-softener',
      'product-filtration',
      'product-ro',
      'product-tankless',
    ])
  })

  it('gives every card a square image, three specs, a price and a quote link', () => {
    render(<Products />)
    for (const product of PRODUCTS.items) {
      const card = document.getElementById(product.id) as HTMLElement
      const scope = within(card)

      expect(scope.getByRole('heading', { level: 3 })).toHaveTextContent(product.name)
      expect(scope.getByText(product.blurb)).toBeInTheDocument()
      expect(card.querySelector('img')?.className).toContain('aspect-square')
      expect(card.querySelectorAll('dl div')).toHaveLength(3)
      expect(scope.getByText(product.blurb).className).toContain('text-sm')
      expect(card.textContent).toContain(product.price)
      expect(scope.getByRole('link', { name: PRODUCTS.cta })).toHaveAttribute('href', '#contact')
    }
  })

  it('prints the sample-data footnote', () => {
    render(<Products />)
    expect(screen.getByText(PRODUCTS.footnote)).toBeInTheDocument()
  })
})
