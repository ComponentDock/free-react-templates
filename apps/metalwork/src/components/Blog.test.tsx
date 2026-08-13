import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'
import { blogPosts } from '../data'

describe('Blog', () => {
  it('renders the heading and every blog post with date, title, and image', () => {
    const { container } = render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()

    for (const post of blogPosts) {
      const article = screen.getByRole('heading', { name: post.title }).closest('article')!
      expect(within(article).getByText(post.date)).toBeInTheDocument()
    }

    expect(screen.getByText(blogPosts[0]!.excerpt!)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(blogPosts.length)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(blogPosts.length)
  })
})
