import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MorePosts } from './MorePosts'
import { morePosts } from '../data'

describe('MorePosts', () => {
  it('renders the More Blog Posts heading', () => {
    render(<MorePosts />)
    expect(screen.getByRole('heading', { name: 'More Blog Posts' })).toBeInTheDocument()
  })

  it('renders three horizontal entries with meta and headline', () => {
    render(<MorePosts />)
    for (const post of morePosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.category)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link').length).toBe(3)
  })
})
