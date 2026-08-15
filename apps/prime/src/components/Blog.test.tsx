import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and three post cards with meta and titles', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()
    expect(screen.getByText('Read our blog')).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('August 12, 2018 · Admin · 3')).toHaveLength(3)
  })
})
