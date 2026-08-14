import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'
import { blogIntro, blogPosts } from '../data'

describe('BlogSection', () => {
  it('renders the title and the three post cards with author row and CTA', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: /Latest posts from our blog/ })).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.meta).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: blogIntro.cta }).length).toBe(blogPosts.length)
  })
})
