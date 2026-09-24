import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogTitle, blogPosts, blogCommentsLabel } from '../data'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
  })

  it('renders all blog post excerpts', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('renders comment links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: blogCommentsLabel })
    expect(links).toHaveLength(blogPosts.length)
  })
})
