import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategoryCarousel } from './CategoryCarousel'
import { categoryCards, readMoreLabel } from '../data'

describe('CategoryCarousel', () => {
  it('renders the section title and six category cards', () => {
    render(<CategoryCarousel />)

    expect(
      screen.getByRole('heading', { name: 'Best Travel Experience Within the Universe.' }),
    ).toBeInTheDocument()
    for (const card of categoryCards) {
      expect(screen.getByRole('link', { name: card.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(categoryCards.length)
    expect(screen.getByText(categoryCards[0]!.date)).toBeInTheDocument()
    expect(screen.getByText(categoryCards[0]!.comments)).toBeInTheDocument()
  })
})
