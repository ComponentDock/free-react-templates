import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts, blogSubtext, blogTitle } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and subtext', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: blogTitle })).toBeInTheDocument()
    expect(screen.getByText(blogSubtext)).toBeInTheDocument()
  })

  it('renders every blog post with date, title, excerpt and counts', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.date).length).toBeGreaterThan(0)
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getAllByText(post.likes).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.comments).length).toBeGreaterThan(0)
      expect(screen.getByRole('img', { name: post.alt })).toHaveAttribute('src', post.image)
    }
  })
})
