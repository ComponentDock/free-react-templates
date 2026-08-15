import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts, blogTitle, readMoreLabel } from '../data'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the title and three posts with meta, excerpt, and Read More', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: blogTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.meta).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(blogPosts.length)
  })
})
