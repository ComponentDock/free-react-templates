import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and two post cards with image, title, meta and excerpt', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Our Blog')

    const cards = screen.getAllByTestId('blog-card')
    expect(cards).toHaveLength(2)

    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.meta)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: post.title })).toHaveAttribute('src', post.image)
    }
  })

  it('renders a Read More link per card', () => {
    render(<Blog />)

    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks).toHaveLength(2)
    for (const link of readMoreLinks) {
      expect(link.className).toContain('text-brand')
    }
  })
})
