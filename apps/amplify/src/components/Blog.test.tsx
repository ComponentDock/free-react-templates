import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and three post cards with date, title, excerpt, and Read More', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Latest Blogs' })).toBeInTheDocument()
    expect(container.querySelectorAll('article').length).toBe(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(post.excerpt.slice(0, 30)))).toBeInTheDocument()
      expect(screen.getByText(post.day)).toBeInTheDocument()
      expect(screen.getByText(post.monthYear)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `Read More ${post.title}` })).toBeInTheDocument()
    }
  })
})
