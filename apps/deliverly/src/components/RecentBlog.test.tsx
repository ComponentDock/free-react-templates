import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogPosts, blogTitle } from '../data'
import { RecentBlog } from './RecentBlog'

describe('RecentBlog', () => {
  it('renders five distinct text-only blog cards with dates, titles and excerpts', () => {
    render(<RecentBlog />)

    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(5)

    for (const post of blogPosts) {
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: post.title })).toHaveAttribute('href', '#blog')
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })
})
