import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogTitle, blogPosts } from '../data'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(blogTitle)
  })

  it('renders all blog post cards', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.category)).toBeInTheDocument()
    }
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks.length).toBe(blogPosts.length)
  })

  it('renders exactly 3 blog posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogPosts.length)
  })
})
