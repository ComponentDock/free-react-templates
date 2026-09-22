import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts, blogTitle, blogSubtitle } from '../data'

describe('Blog', () => {
  it('renders the heading and subtitle', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
    expect(screen.getAllByText(blogSubtitle).length).toBeGreaterThan(0)
  })

  it('renders all three blog cards with authors', () => {
    render(<Blog />)
    expect(screen.getAllByRole('article')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText(/Need workout motivation/).length).toBe(blogPosts.length)
  })
})
