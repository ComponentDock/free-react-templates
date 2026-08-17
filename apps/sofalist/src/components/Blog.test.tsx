import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the heading and all three posts with meta rows', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
      expect(screen.getAllByText(post.meta.author).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.meta.date).length).toBeGreaterThan(0)
      expect(screen.getAllByText(post.meta.comments).length).toBeGreaterThan(0)
    }
  })
})
