import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts } from '../data'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the red-bar heading and two blog posts', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('renders a red date pill and Read more link for each post', () => {
    render(<BlogSection />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(blogPosts.length)
  })
})
