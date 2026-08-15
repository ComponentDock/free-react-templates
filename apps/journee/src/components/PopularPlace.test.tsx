import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { bookNowLabel, popularCards, popularParagraph } from '../data'
import { PopularPlace } from './PopularPlace'

describe('PopularPlace', () => {
  it('renders three popular place cards with book-now links', () => {
    render(<PopularPlace />)
    expect(screen.getByRole('heading', { name: /Most Popular/ })).toBeInTheDocument()
    expect(screen.getAllByText(popularParagraph).length).toBeGreaterThanOrEqual(1)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(popularCards.length)
    articles.forEach((article, index) => {
      const card = popularCards[index]!
      expect(within(article).getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(within(article).getByText(card.paragraph)).toBeInTheDocument()
      expect(within(article).getByRole('link', { name: bookNowLabel })).toBeInTheDocument()
    })
    expect(screen.getAllByRole('link', { name: bookNowLabel })).toHaveLength(popularCards.length)
  })
})
