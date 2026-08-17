import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BLOG_POSTS } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three distinct posts', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
