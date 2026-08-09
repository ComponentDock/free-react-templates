import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'

describe('CategoryGrid', () => {
  it('renders the heading and six category cards with image, name, count, and link', () => {
    render(<CategoryGrid />)
    expect(screen.getByRole('heading', { name: 'Shop by Category' })).toBeInTheDocument()

    const cards = [
      ['Running', '48 products'],
      ['Sneakers', '86 products'],
      ['Basketball', '32 products'],
      ['Casual', '64 products'],
      ['Boots', '28 products'],
      ['Sandals', '24 products'],
    ] as const

    const section = document.querySelector('#shop')!
    expect(section).toBeTruthy()

    for (const [name, count] of cards) {
      const card = screen.getByRole('link', { name: new RegExp(`${name}`) })
      expect(card).toHaveAttribute('href', '#shop')
      expect(within(card).getByRole('img', { name })).toBeInTheDocument()
      expect(within(card).getByText(count)).toBeInTheDocument()
      expect(within(card).getByText('Shop Now')).toBeInTheDocument()
    }

    expect(screen.getAllByText('Shop Now')).toHaveLength(6)
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()
  })
})
