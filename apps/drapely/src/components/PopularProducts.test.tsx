import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('lists six products in source order', () => {
    render(<PopularProducts />)

    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(names).toEqual([
      'Fog Runner',
      'Cobalt Heels',
      'Washed Denim Jacket',
      'Olive Leather Tote',
      'Stone Linen Shirt',
      'Amber Puffer',
    ])
  })

  it('shows the discounted original prices struck through', () => {
    render(<PopularProducts />)

    const discounted = screen.getAllByText('$46.00')
    expect(discounted).toHaveLength(4)
    expect(discounted.every((node) => node.tagName === 'DEL')).toBe(true)
  })

  it('shows a five-star rating on the rated product only', () => {
    render(<PopularProducts />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)

    const rated = cards.filter((card) => within(card).queryByRole('img', { name: /Rated/ }))
    expect(rated).toHaveLength(1)
    expect(
      within(rated[0] as HTMLElement).getByRole('img', { name: 'Rated 5 out of 5' }),
    ).toBeInTheDocument()
  })
})
