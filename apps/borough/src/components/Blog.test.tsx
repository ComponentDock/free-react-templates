import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders four blog cards with meta, title, author, and excerpt', () => {
    render(<Blog />)

    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(blogPosts.length)

    expect(screen.getAllByText(/Dec\. 05, 2020/)).toHaveLength(blogPosts.length)
    expect(screen.getAllByRole('link', { name: '3 Comments' })).toHaveLength(blogPosts.length)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(blogPosts.length)
    expect(screen.getAllByText('John Dorf')).toHaveLength(blogPosts.length)
    expect(screen.getAllByText('Explore The Best Restaurant in New York')).toHaveLength(
      blogPosts.length,
    )
    for (const post of blogPosts) {
      expect(screen.getAllByText(post.excerpt).length).toBeGreaterThan(0)
    }
  })
})
