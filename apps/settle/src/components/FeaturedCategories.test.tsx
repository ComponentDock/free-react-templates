import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCategories } from './FeaturedCategories'
import { CATEGORIES } from '../data'

describe('FeaturedCategories', () => {
  it('renders the heading and four category cards with explore links', () => {
    const { container } = render(<FeaturedCategories />)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured Category' })).toBeInTheDocument()

    const cards = container.querySelectorAll('section a')
    expect(cards).toHaveLength(CATEGORIES.length)

    for (const category of CATEGORIES) {
      expect(screen.getByRole('heading', { level: 3, name: category.title })).toBeInTheDocument()
    }

    // Each card links to the shop and shows "Explore Now".
    expect(screen.getAllByText('Explore Now')).toHaveLength(4)
    cards.forEach((card) => expect(card).toHaveAttribute('href', '#shop'))

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute(
      'src',
      `https://picsum.photos/seed/${CATEGORIES[0]!.seed}/600/760`,
    )
  })
})
