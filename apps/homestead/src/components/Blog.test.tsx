import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders three entries with image, title, meta row and excerpt', () => {
    const { container } = render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogPosts.length)
    expect(container.querySelectorAll('img').length).toBe(blogPosts.length)

    for (const post of blogPosts) {
      const article = articles[blogPosts.indexOf(post)]
      expect(article).toHaveTextContent(post.title)
      expect(article).toHaveTextContent(post.date)
      expect(article).toHaveTextContent(post.author)
      expect(article).toHaveTextContent(String(post.comments))
      expect(article).toHaveTextContent(post.excerpt)
    }
  })
})
