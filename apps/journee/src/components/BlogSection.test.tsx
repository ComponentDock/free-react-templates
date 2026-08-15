import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogCards, blogImages, blogParagraph, blogTitle } from '../data'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders three blog cards with photo, title, paragraph, and meta', () => {
    const { container } = render(<BlogSection />)
    expect(screen.getByRole('heading', { name: blogTitle })).toBeInTheDocument()
    expect(screen.getByText(blogParagraph)).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogCards.length)
    articles.forEach((article, index) => {
      const card = blogCards[index]!
      expect(within(article).getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(within(article).getByText(card.paragraph)).toBeInTheDocument()
      expect(within(article).getByText(card.date)).toBeInTheDocument()
      expect(within(article).getByText(card.likes)).toBeInTheDocument()
      expect(within(article).getByText(card.comments)).toBeInTheDocument()
    })
    expect(container.querySelectorAll('img')).toHaveLength(blogImages.length)
  })
})
