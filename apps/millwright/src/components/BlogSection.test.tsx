import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { blogPosts } from '../data'

describe('BlogSection', () => {
  it('renders the heading, lead, and four blog entries', () => {
    const { container } = render(<BlogSection />)

    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()

    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.date).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: /Read More/i })).toHaveLength(4)

    // Four thumbnail images (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })
})
