import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogList } from './BlogList'
import { posts, viewAllArticlesLabel } from '../data'

describe('BlogList', () => {
  it('renders six article rows alternating white and ink', () => {
    render(<BlogList />)

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)

    articles.forEach((article, index) => {
      const dark = index % 2 === 1
      expect(article).toHaveClass(dark ? 'bg-ink' : 'bg-white')
      const image = article.querySelector('img')
      expect(image).not.toBeNull()
      if (dark) {
        expect(image?.parentElement).toHaveClass('md:order-last')
      }
    })
  })

  it('shows meta, title and author block for every post', () => {
    render(<BlogList />)

    for (const post of posts) {
      expect(screen.getAllByText(post.date).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.comments).length).toBeGreaterThan(0)
      expect(screen.getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByRole('img', { name: post.author }).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.role).length).toBeGreaterThan(0)
    }
  })

  it('renders the centered "View all articles" link with a chevron', () => {
    render(<BlogList />)

    const link = screen.getByRole('link', { name: viewAllArticlesLabel })
    expect(link).toHaveClass('text-ink', 'font-medium')
    expect(link.querySelector('svg')).not.toBeNull()
  })
})
