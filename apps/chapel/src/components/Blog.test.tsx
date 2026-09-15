import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the heading and blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog Posts' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
    blog.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getAllByText(post.author).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(post.category).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(post.date).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
    })
  })
})
