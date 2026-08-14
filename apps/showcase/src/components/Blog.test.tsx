import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and three blog cards with meta, title, and excerpt', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getAllByText('Admin')).toHaveLength(3)
      expect(screen.getByText(String(post.comments))).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })
})
