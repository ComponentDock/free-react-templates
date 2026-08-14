import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { blogPosts } from '../data'

describe('BlogSection', () => {
  it('renders the heading and intro', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders three post cards with meta, title and excerpt', () => {
    render(<BlogSection />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
    for (const post of blogPosts) {
      expect(screen.getByText(post.meta)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })
})
