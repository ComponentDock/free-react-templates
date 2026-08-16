import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { posts } from '../data'

describe('Blog', () => {
  it('renders the heading and four post cards with meta, title and excerpt', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/ })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(posts.length)
    for (const post of posts) {
      expect(screen.getByText(`${post.date} ${post.comments} Comments`)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
  })

  it('adds a read-more link to every card', () => {
    render(<Blog />)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(posts.length)
  })
})
