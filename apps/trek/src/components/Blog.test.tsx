import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts, blogTitle } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three post cards with a title, meta line, and excerpt', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { level: 3, name: blogTitle })).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(blogPosts.length)
    expect(container.querySelectorAll('img')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.meta)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })
})
