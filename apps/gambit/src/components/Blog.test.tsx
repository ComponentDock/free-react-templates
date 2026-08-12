import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders three blog cards with titles and excerpts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Latest Blog Posts')
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('renders the meta row with date, hearts, and comments', () => {
    render(<Blog />)
    for (const post of BLOG_POSTS) {
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.hearts)).toBeInTheDocument()
      expect(screen.getByText(post.comments)).toBeInTheDocument()
    }
  })
})
