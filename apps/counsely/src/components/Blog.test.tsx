import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the centered heading', () => {
    render(<Blog />)
    expect(screen.getByText(blogPosts.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogPosts.headline })).toBeInTheDocument()
  })

  it('renders three post cards with date toppers, titles, and Read more', () => {
    const { container } = render(<Blog />)
    expect(container.querySelectorAll('article').length).toBe(3)

    for (const post of blogPosts.posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getByText(post.day)).toBeInTheDocument()
      expect(screen.getByText(`${post.year} ${post.month}`)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Read more' }).length).toBe(3)
  })

  it('styles the date topper with the brand gold background', () => {
    const { container } = render(<Blog />)
    const topper = container.querySelector('.bg-brand')
    expect(topper).not.toBeNull()
  })
})
