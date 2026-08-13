import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders three post cards with title and description', () => {
    render(<Blog />)
    expect(blogPosts).toHaveLength(3)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.description)).toBeInTheDocument()
    }
  })

  it('renders the green date chip with day and month/year', () => {
    render(<Blog />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.day)).toBeInTheDocument()
      expect(screen.getByText(post.month)).toBeInTheDocument()
    }
  })
})
